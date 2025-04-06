"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { RequestPanel } from "./request-panel"
import { ResponsePanel } from "./response-panel"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"
import { ChevronLeft, ChevronRight, Home, Plus, Search, Settings, X } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export type ApiResponse = {
  status: number
  statusText: string
  headers: Record<string, string>
  data: any
  time: number
  size: string
}

export type RequestConfig = {
  method: string
  url: string
  headers: { key: string; value: string }[]
  params: { key: string; value: string }[]
  body: string
  name?: string
}

export function PostmanInterface() {
  const [response, setResponse] = useState<ApiResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeRequest, setActiveRequest] = useState<RequestConfig>({
    method: "POST",
    url: "http://localhost:8000/api/auth/register",
    headers: [{ key: "Content-Type", value: "application/json" }],
    params: [],
    body: JSON.stringify(
      {
        username: "tamiopia",
        email: "tamiopia@gmail.com",
        password: "**",
      },
      null,
      2,
    ),
  })

  // Update the tab state to include the request configuration for each tab
  const [tabs, setTabs] = useState<
    Array<{
      id: string
      method: string
      name: string
      active?: boolean
      requestConfig: RequestConfig
    }>
  >([
    {
      id: "tab-1",
      method: "POST",
      name: "New Request",
      active: true,
      requestConfig: {
        method: "POST",
        url: "http://localhost:8000/api/auth/register",
        headers: [{ key: "Content-Type", value: "application/json" }],
        params: [],
        body: JSON.stringify(
          {
            username: "tamiopia",
            email: "tamiopia@gmail.com",
            password: "**",
          },
          null,
          2,
        ),
      },
    },
    {
      id: "tab-2",
      method: "GET",
      name: "User Profile",
      active: false,
      requestConfig: {
        method: "GET",
        url: "http://localhost:8000/api/auth/profile",
        headers: [{ key: "Authorization", value: "Bearer token" }],
        params: [],
        body: "",
      },
    },
  ])

  // Update the addNewTab function to include request configuration
  const addNewTab = () => {
    const newTabId = `tab-${tabs.length + 1}-${Date.now()}`
    const newRequestConfig = {
      method: "GET",
      url: "https://api.example.com/endpoint",
      headers: [],
      params: [],
      body: "",
    }

    const newTab = {
      id: newTabId,
      method: "GET",
      name: "New Request",
      active: true,
      requestConfig: newRequestConfig,
    }

    // Set all other tabs as inactive
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      active: false,
    }))

    // Add the new tab and update state
    setTabs([...updatedTabs, newTab])

    // Set the active request to the new tab's request config
    setActiveRequest(newRequestConfig)
    setResponse(null) // Clear previous response
  }

  const handleSendRequest = async (config: RequestConfig) => {
    setIsLoading(true)
    setResponse(null)

    try {
      const startTime = performance.now()

      // Build URL with query parameters
      let finalUrl
      try {
        // Check if the URL is absolute or relative
        if (config.url.startsWith("http://") || config.url.startsWith("https://")) {
          finalUrl = new URL(config.url)
        } else {
          // For relative URLs, prepend the base URL
          const baseUrl = window.location.origin
          finalUrl = new URL(config.url.startsWith("/") ? `${baseUrl}${config.url}` : `${baseUrl}/${config.url}`)
        }

        // Add query parameters
        config.params.forEach((param) => {
          if (param.key && param.value) {
            finalUrl.searchParams.append(param.key, param.value)
          }
        })
      } catch (error) {
        console.error("Invalid URL:", error)
        setResponse({
          status: 400,
          statusText: "Bad Request",
          headers: {},
          data: { error: "Invalid URL format" },
          time: 0,
          size: "0",
        })
        setIsLoading(false)
        return
      }

      // Build headers
      const headers: HeadersInit = {}
      config.headers.forEach((header) => {
        if (header.key && header.value) {
          headers[header.key] = header.value
        }
      })

      // Make the request
      const res = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: config.method,
          url: finalUrl.toString(),
          headers,
          body: config.body,
        }),
      })

      let data
      const contentType = res.headers.get("content-type") || ""
      if (contentType.includes("application/json")) {
        data = await res.json()
      } else {
        // Handle text/html or other content types
        data = await res.text()
      }

      const endTime = performance.now()

      // Format response
      setResponse({
        status: res.status,
        statusText: res.statusText,
        headers: Object.fromEntries(res.headers.entries()),
        data,
        time: Math.round(endTime - startTime),
        size: typeof data === "string" ? data.length.toString() : JSON.stringify(data).length.toString(),
      })
    } catch (error) {
      console.error("Request failed:", error)
      setResponse({
        status: 500,
        statusText: "Error",
        headers: {},
        data: { error: "Failed to send request" },
        time: 0,
        size: "0",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#1c1c1c] text-white">
      {/* Top Navigation Bar */}
      <header className="h-12 border-b border-[#2c2c2c] flex items-center px-4 bg-[#1c1c1c]">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Home className="h-4 w-4" />
          </Button>
          <span className="font-medium">Home</span>
          <span className="text-gray-500">Workspaces</span>
          <span className="text-gray-500">API Network</span>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search Portfolio"
              className="pl-8 bg-[#2c2c2c] border-[#3c3c3c] h-9 focus-visible:ring-orange-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">Contact Me</Button>
        </div>
      </header>

      {/* Tabs Bar */}
      <div className="h-10 border-b border-[#2c2c2c] flex items-center px-4 bg-[#1c1c1c] text-sm">
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
            New
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
            Import
          </Button>
        </div>
        {/* Replace the div containing the tabs.map with this updated version */}
        <div className="flex-1 overflow-x-auto ml-4 flex items-center space-x-1">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center h-7 px-2 ${tab.active ? "bg-[#2c2c2c]" : ""} rounded text-xs cursor-pointer`}
              onClick={() => {
                // Set this tab as active and load its request configuration
                const updatedTabs = tabs.map((t) => ({
                  ...t,
                  active: t.id === tab.id,
                }))
                setTabs(updatedTabs)

                // Load this tab's request configuration
                const activeTab = updatedTabs.find((t) => t.id === tab.id)
                if (activeTab) {
                  setActiveRequest(activeTab.requestConfig)
                  setResponse(null) // Clear previous response
                }
              }}
            >
              <span className={tab.method === "GET" ? "text-blue-400 mr-1" : "text-green-400 mr-1"}>{tab.method}</span>
              <span>{tab.name}</span>
              <X
                className="ml-2 h-3 w-3 text-gray-500 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  // Remove this tab
                  if (tabs.length > 1) {
                    const newTabs = tabs.filter((t) => t.id !== tab.id)
                    // If we're removing the active tab, make the first tab active
                    if (tab.active && newTabs.length > 0) {
                      newTabs[0].active = true
                      // Load the new active tab's request configuration
                      setActiveRequest(newTabs[0].requestConfig)
                      setResponse(null) // Clear previous response
                    }
                    setTabs(newTabs)
                  }
                }}
              />
            </div>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={addNewTab}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Content */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30} className="bg-[#262626]">
          <Sidebar onSelectRequest={setActiveRequest} />
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-[#2c2c2c] w-1" />
        <ResizablePanel defaultSize={80}>
          <div className="h-full flex flex-col">
            {/* Update the onConfigChange handler in the RequestPanel component call to save changes to the active tab */}
            <RequestPanel
              config={activeRequest}
              onConfigChange={(updatedConfig) => {
                setActiveRequest(updatedConfig)

                // Update the active tab's request configuration
                setTabs((currentTabs) =>
                  currentTabs.map((tab) =>
                    tab.active
                      ? {
                          ...tab,
                          method: updatedConfig.method, // Update the tab's method display
                          requestConfig: updatedConfig,
                        }
                      : tab,
                  ),
                )
              }}
              onSend={handleSendRequest}
              isLoading={isLoading}
            />
            <ResizableHandle withHandle className="bg-[#2c2c2c] h-1" />
            <ResponsePanel response={response} isLoading={isLoading} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

