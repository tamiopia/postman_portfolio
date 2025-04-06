"use client"

import type React from "react"

import { useState } from "react"
import { Send, Plus, Trash, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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
    <div className="flex flex-col">
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
                      <input type="radio" name="body-type" checked className="accent-orange-500" />
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
                <div className="text-center text-gray-400 py-8">
                  <p>Authorization settings would go here</p>
                </div>
              </TabsContent>

              <TabsContent value="scripts" className="p-4 mt-0">
                <div className="text-center text-gray-400 py-8">
                  <p>Pre-request scripts would go here</p>
                </div>
              </TabsContent>

              <TabsContent value="tests" className="p-4 mt-0">
                <div className="text-center text-gray-400 py-8">
                  <p>Test scripts would go here</p>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="p-4 mt-0">
                <div className="text-center text-gray-400 py-8">
                  <p>Request settings would go here</p>
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

