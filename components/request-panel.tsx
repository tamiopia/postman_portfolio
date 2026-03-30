"use client"

import type React from "react"

import { useState } from "react"
import { Send, Plus, Trash, ChevronDown, ShieldCheck, PlaySquare, FlaskConical, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import type { RequestConfig } from "./postman-interface"
import { cn } from "@/lib/utils"

type RequestPanelProps = {
  config: RequestConfig
  onConfigChange: (config: RequestConfig) => void
  onSend: (config: RequestConfig) => void
  isLoading: boolean
}

export function RequestPanel({ config, onConfigChange, onSend, isLoading }: RequestPanelProps) {
  const [activeTab, setActiveTab] = useState("body")
  const [authType, setAuthType] = useState<"none" | "bearer" | "basic" | "apikey">("bearer")
  const [authToken, setAuthToken] = useState("demo-portfolio-token")
  const [basicUsername, setBasicUsername] = useState("tamagn")
  const [basicPassword, setBasicPassword] = useState("secure-password")
  const [apiKey, setApiKey] = useState("portfolio-api-key")
  const [apiKeyHeader, setApiKeyHeader] = useState("x-api-key")
  const [preRequestScript, setPreRequestScript] = useState(
    `const startedAt = new Date().toISOString();
pm.environment.set("request_started_at", startedAt);
console.log("Preparing request for:", pm.request.url.toString());`,
  )
  const [testScript, setTestScript] = useState(
    `pm.test("Status code is successful", function () {
  pm.expect(pm.response.code).to.be.oneOf([200, 201]);
});

pm.test("Response time stays under 1000ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(1000);
});`,
  )
  const [requestSettings, setRequestSettings] = useState({
    followRedirects: true,
    validateSsl: true,
    encodeUrlAutomatically: true,
    retainHeadersOnRedirect: false,
  })

  const handleMethodChange = (value: string) => {
    onConfigChange({ ...config, method: value })
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onConfigChange({ ...config, url: e.target.value })
  }

  const handleAddHeader = () => {
    onConfigChange({
      ...config,
      headers: [...config.headers, { key: "", value: "" }],
    })
  }

  const handleHeaderChange = (index: number, field: "key" | "value", value: string) => {
    const newHeaders = [...config.headers]
    newHeaders[index][field] = value
    onConfigChange({ ...config, headers: newHeaders })
  }

  const handleRemoveHeader = (index: number) => {
    const newHeaders = [...config.headers]
    newHeaders.splice(index, 1)
    onConfigChange({ ...config, headers: newHeaders })
  }

  const handleAddParam = () => {
    onConfigChange({
      ...config,
      params: [...config.params, { key: "", value: "" }],
    })
  }

  const handleParamChange = (index: number, field: "key" | "value", value: string) => {
    const newParams = [...config.params]
    newParams[index][field] = value
    onConfigChange({ ...config, params: newParams })
  }

  const handleRemoveParam = (index: number) => {
    const newParams = [...config.params]
    newParams.splice(index, 1)
    onConfigChange({ ...config, params: newParams })
  }

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onConfigChange({ ...config, body: e.target.value })
  }

  const upsertHeader = (key: string, value: string) => {
    const nextHeaders = config.headers.filter((header) => header.key.toLowerCase() !== key.toLowerCase())
    if (value) {
      nextHeaders.push({ key, value })
    }
    onConfigChange({ ...config, headers: nextHeaders })
  }

  const applyAuthorization = () => {
    if (authType === "none") {
      const cleanedHeaders = config.headers.filter(
        (header) => !["authorization", apiKeyHeader.toLowerCase()].includes(header.key.toLowerCase()),
      )
      onConfigChange({ ...config, headers: cleanedHeaders })
      return
    }

    if (authType === "bearer") {
      upsertHeader("Authorization", `Bearer ${authToken}`)
      return
    }

    if (authType === "basic") {
      const encoded = typeof window !== "undefined" ? window.btoa(`${basicUsername}:${basicPassword}`) : ""
      upsertHeader("Authorization", `Basic ${encoded}`)
      return
    }

    if (authType === "apikey") {
      upsertHeader(apiKeyHeader, apiKey)
    }
  }

  const toggleSetting = (key: keyof typeof requestSettings) => {
    setRequestSettings((current) => ({
      ...current,
      [key]: !current[key],
    }))
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "text-blue-400"
      case "POST":
        return "text-green-400"
      case "PUT":
        return "text-orange-400"
      case "DELETE":
        return "text-red-400"
      case "PATCH":
        return "text-teal-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div id="request-panel" className="flex flex-col">
      {/* URL Bar */}
      <div className="flex items-center p-2 border-b border-[#2c2c2c] bg-[#1c1c1c]">
        <div className="flex items-center mr-2">
          <Select value={config.method} onValueChange={handleMethodChange}>
            <SelectTrigger className={cn("w-[100px] h-9 bg-[#2c2c2c] border-[#3c3c3c]", getMethodColor(config.method))}>
              <SelectValue placeholder="Method" />
            </SelectTrigger>
            <SelectContent className="bg-[#2c2c2c] border-[#3c3c3c]">
              <SelectItem value="GET" className="text-blue-400">
                GET
              </SelectItem>
              <SelectItem value="POST" className="text-green-400">
                POST
              </SelectItem>
              <SelectItem value="PUT" className="text-orange-400">
                PUT
              </SelectItem>
              <SelectItem value="DELETE" className="text-red-400">
                DELETE
              </SelectItem>
              <SelectItem value="PATCH" className="text-teal-400">
                PATCH
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input
          value={config.url}
          onChange={handleUrlChange}
          placeholder="Enter request URL"
          className="flex-1 h-9 bg-[#2c2c2c] border-[#3c3c3c]"
        />
        <Button
          id="send-button"
          onClick={() => onSend(config)}
          disabled={isLoading || !config.url}
          className="ml-2 bg-orange-600 hover:bg-orange-700 text-white"
        >
          <Send className="h-4 w-4 mr-1" />
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#2c2c2c] bg-[#1c1c1c]">
        <div className="flex items-center px-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
            <div className="flex items-center">
              <TabsList className="bg-transparent h-10">
                <TabsTrigger
                  value="params"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
                >
                  Params
                </TabsTrigger>
                <TabsTrigger
                  value="authorization"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
                >
                  Authorization
                </TabsTrigger>
                <TabsTrigger
                  value="headers"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
                >
                  Headers
                </TabsTrigger>
                <TabsTrigger
                  value="body"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
                >
                  Body
                </TabsTrigger>
                <TabsTrigger
                  value="scripts"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
                >
                  Scripts
                </TabsTrigger>
                <TabsTrigger
                  value="tests"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
                >
                  Tests
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-auto bg-[#1c1c1c]">
              <TabsContent value="params" className="p-4 space-y-2 mt-0">
                {config.params.map((param, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={param.key}
                      onChange={(e) => handleParamChange(index, "key", e.target.value)}
                      placeholder="Key"
                      className="flex-1 bg-[#2c2c2c] border-[#3c3c3c]"
                    />
                    <Input
                      value={param.value}
                      onChange={(e) => handleParamChange(index, "value", e.target.value)}
                      placeholder="Value"
                      className="flex-1 bg-[#2c2c2c] border-[#3c3c3c]"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveParam(index)}
                      className="text-gray-400 hover:text-white"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddParam}
                  className="flex items-center gap-1 border-dashed border-[#3c3c3c] text-gray-400"
                >
                  <Plus className="h-4 w-4" />
                  Add Parameter
                </Button>
              </TabsContent>

              <TabsContent value="headers" className="p-4 space-y-2 mt-0">
                {config.headers.map((header, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={header.key}
                      onChange={(e) => handleHeaderChange(index, "key", e.target.value)}
                      placeholder="Key"
                      className="flex-1 bg-[#2c2c2c] border-[#3c3c3c]"
                    />
                    <Input
                      value={header.value}
                      onChange={(e) => handleHeaderChange(index, "value", e.target.value)}
                      placeholder="Value"
                      className="flex-1 bg-[#2c2c2c] border-[#3c3c3c]"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveHeader(index)}
                      className="text-gray-400 hover:text-white"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddHeader}
                  className="flex items-center gap-1 border-dashed border-[#3c3c3c] text-gray-400"
                >
                  <Plus className="h-4 w-4" />
                  Add Header
                </Button>
              </TabsContent>

              <TabsContent value="body" className="mt-0">
                <div className="p-2 border-b border-[#2c2c2c] flex items-center">
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="body-type" className="accent-orange-500" />
                      <span>none</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="body-type" className="accent-orange-500" />
                      <span>form-data</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="body-type" className="accent-orange-500" />
                      <span>x-www-form-urlencoded</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="body-type" defaultChecked className="accent-orange-500" />
                      <span>raw</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="body-type" className="accent-orange-500" />
                      <span>binary</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="body-type" className="accent-orange-500" />
                      <span>GraphQL</span>
                    </label>
                  </div>
                  <div className="ml-auto flex items-center">
                    <Button variant="ghost" size="sm" className="text-blue-400 flex items-center">
                      JSON <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="p-0 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#262626] flex flex-col text-xs text-gray-500 font-mono">
                    {config.body.split("\n").map((_, i) => (
                      <div key={i} className="px-2 py-1 text-right">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <Textarea
                    value={config.body}
                    onChange={handleBodyChange}
                    className="min-h-[200px] font-mono text-sm bg-[#1c1c1c] border-0 rounded-none pl-10 resize-none code-editor"
                  />
                </div>
              </TabsContent>

              <TabsContent value="authorization" className="p-4 mt-0">
                <div className="rounded-lg border border-[#2c2c2c] bg-[#171717] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-orange-500" />
                      <h4 className="text-sm font-medium text-white">Authorization</h4>
                    </div>
                    <Badge variant="outline" className="border-[#3c3c3c] text-gray-300">
                      Applied to headers
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Type</Label>
                      <Select value={authType} onValueChange={(value: "none" | "bearer" | "basic" | "apikey") => setAuthType(value)}>
                        <SelectTrigger className="bg-[#2c2c2c] border-[#3c3c3c]">
                          <SelectValue placeholder="Select auth type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2c2c2c] border-[#3c3c3c]">
                          <SelectItem value="none">No Auth</SelectItem>
                          <SelectItem value="bearer">Bearer Token</SelectItem>
                          <SelectItem value="basic">Basic Auth</SelectItem>
                          <SelectItem value="apikey">API Key</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {authType === "bearer" && (
                      <div className="space-y-2">
                        <Label className="text-gray-300">Token</Label>
                        <Input
                          value={authToken}
                          onChange={(e) => setAuthToken(e.target.value)}
                          className="bg-[#2c2c2c] border-[#3c3c3c]"
                          placeholder="Enter bearer token"
                        />
                      </div>
                    )}

                    {authType === "basic" && (
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-gray-300">Username</Label>
                          <Input
                            value={basicUsername}
                            onChange={(e) => setBasicUsername(e.target.value)}
                            className="bg-[#2c2c2c] border-[#3c3c3c]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-300">Password</Label>
                          <Input
                            value={basicPassword}
                            onChange={(e) => setBasicPassword(e.target.value)}
                            className="bg-[#2c2c2c] border-[#3c3c3c]"
                            type="password"
                          />
                        </div>
                      </div>
                    )}

                    {authType === "apikey" && (
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-gray-300">Header Name</Label>
                          <Input
                            value={apiKeyHeader}
                            onChange={(e) => setApiKeyHeader(e.target.value)}
                            className="bg-[#2c2c2c] border-[#3c3c3c]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-300">API Key</Label>
                          <Input
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            className="bg-[#2c2c2c] border-[#3c3c3c]"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3">
                      <Button onClick={applyAuthorization} className="bg-orange-600 hover:bg-orange-700 text-white">
                        Apply Authorization
                      </Button>
                      <span className="text-xs text-gray-400">
                        This updates the request headers so the request is closer to a real Postman flow.
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="scripts" className="p-4 mt-0">
                <div className="rounded-lg border border-[#2c2c2c] bg-[#171717] overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#2c2c2c] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <PlaySquare className="h-4 w-4 text-orange-500" />
                      <h4 className="text-sm font-medium text-white">Pre-request Script</h4>
                    </div>
                    <Badge variant="outline" className="border-[#3c3c3c] text-gray-300">
                      Workspace draft
                    </Badge>
                  </div>
                  <Textarea
                    value={preRequestScript}
                    onChange={(e) => setPreRequestScript(e.target.value)}
                    className="min-h-[220px] rounded-none border-0 bg-[#111111] font-mono text-sm text-gray-200"
                  />
                  <div className="border-t border-[#2c2c2c] px-4 py-3 text-xs text-gray-400">
                    Use this area for tokens, environment variables, timestamps, or any setup logic before sending a request.
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tests" className="p-4 mt-0">
                <div className="rounded-lg border border-[#2c2c2c] bg-[#171717] overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#2c2c2c] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="h-4 w-4 text-orange-500" />
                      <h4 className="text-sm font-medium text-white">Tests</h4>
                    </div>
                    <Badge variant="outline" className="border-[#3c3c3c] text-gray-300">
                      Post-response checks
                    </Badge>
                  </div>
                  <Textarea
                    value={testScript}
                    onChange={(e) => setTestScript(e.target.value)}
                    className="min-h-[220px] rounded-none border-0 bg-[#111111] font-mono text-sm text-gray-200"
                  />
                  <div className="border-t border-[#2c2c2c] px-4 py-3 text-xs text-gray-400">
                    Add validation logic here for status codes, response time, JSON structure, or contract checks.
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="p-4 mt-0">
                <div className="rounded-lg border border-[#2c2c2c] bg-[#171717] p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-orange-500" />
                    <h4 className="text-sm font-medium text-white">Request Settings</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        key: "followRedirects" as const,
                        title: "Automatically follow redirects",
                        description: "Useful when testing endpoints that return 301 or 302 responses.",
                      },
                      {
                        key: "validateSsl" as const,
                        title: "SSL certificate verification",
                        description: "Keep HTTPS checks enabled for a more realistic production request flow.",
                      },
                      {
                        key: "encodeUrlAutomatically" as const,
                        title: "Encode URL automatically",
                        description: "Helps prevent malformed requests when parameters contain special characters.",
                      },
                      {
                        key: "retainHeadersOnRedirect" as const,
                        title: "Retain headers on redirect",
                        description: "Keeps custom headers attached when requests move through redirects.",
                      },
                    ].map((setting) => (
                      <div
                        key={setting.key}
                        className="flex items-start justify-between gap-4 rounded-lg border border-[#2c2c2c] bg-[#111111] p-4"
                      >
                        <div>
                          <Label className="text-sm text-white">{setting.title}</Label>
                          <p className="mt-1 text-xs text-gray-400">{setting.description}</p>
                        </div>
                        <Switch
                          checked={requestSettings[setting.key]}
                          onCheckedChange={() => toggleSetting(setting.key)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
          <div className="ml-auto text-sm text-gray-400">Cookies</div>
        </div>
      </div>
    </div>
  )
}

