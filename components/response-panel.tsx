"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ApiResponse } from "./postman-interface"
import { Loader2, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

type ResponsePanelProps = {
  response: ApiResponse | null
  isLoading: boolean
}

export function ResponsePanel({ response, isLoading }: ResponsePanelProps) {
  const [activeTab, setActiveTab] = useState("body")

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return "text-green-500"
    if (status >= 300 && status < 400) return "text-blue-500"
    if (status >= 400 && status < 500) return "text-yellow-500"
    if (status >= 500) return "text-red-500"
    return "text-gray-500"
  }

  return (
    <div className="flex-1 flex flex-col bg-[#1c1c1c] overflow-hidden">
      <div className="border-b border-[#2c2c2c] p-2 flex items-center">
        <h3 className="text-sm font-medium">Response</h3>
        {response && (
          <div className="ml-auto flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{response.time}ms</span>
            </span>
            <span className="flex items-center">
              <FileText className="h-3 w-3 mr-1" />
              <span>{response.size} B</span>
            </span>
            <span className={getStatusColor(response.status)}>
              Status: {response.status} {response.statusText}
            </span>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
        </div>
      ) : response ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <div className="border-b border-[#2c2c2c]">
            <TabsList className="bg-transparent h-10">
              <TabsTrigger
                value="body"
                className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
              >
                Body
              </TabsTrigger>
              <TabsTrigger
                value="html"
                className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
              >
                HTML
              </TabsTrigger>
              <TabsTrigger
                value="headers"
                className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-10"
              >
                Headers
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="body" className="flex-1 overflow-auto p-0 m-0">
            <div className="p-4 text-sm font-mono overflow-auto h-full bg-black border-t border-[#3c3c3c] max-h-[calc(100vh-300px)] scrollbar-thin scrollbar-thumb-[#3c3c3c] scrollbar-track-black">
              <div className="mb-2">
                <span className="text-orange-500">$</span> <span className="text-gray-400">response.json</span>
              </div>
              <pre className="text-green-400 whitespace-pre-wrap overflow-x-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="html" className="flex-1 overflow-auto p-0 m-0">
            <div className="p-0 h-full bg-black relative">
              <div className="absolute top-2 right-2 z-10 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#1c1c1c] text-orange-500 border-[#3c3c3c] hover:bg-[#2c2c2c]"
                  onClick={() => {
                    // Open in new tab/window
                    const newWindow = window.open("", "_blank")
                    if (newWindow) {
                      const content = typeof response.data === "string" ? response.data : JSON.stringify(response.data)
                      newWindow.document.write(content)
                      newWindow.document.close()
                    }
                  }}
                >
                  Open in New Tab
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#1c1c1c] text-orange-500 border-[#3c3c3c] hover:bg-[#2c2c2c]"
                  onClick={() => {
                    // Request fullscreen on the iframe
                    const iframe = document.getElementById("response-iframe") as HTMLIFrameElement
                    if (iframe) {
                      if (iframe.requestFullscreen) {
                        iframe.requestFullscreen()
                      }
                    }
                  }}
                >
                  Fullscreen
                </Button>
              </div>
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#1c1c1c] border-b border-[#3c3c3c] flex items-center px-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">response-terminal</div>
              </div>
              <iframe
                id="response-iframe"
                srcDoc={`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                background-color: #000;
                color: #f1f1f1;
                font-family: 'Courier New', monospace;
                padding: 40px 20px 20px;
                margin: 0;
                line-height: 1.5;
              }
              pre {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .terminal-prompt:before {
                content: "$ ";
                color: #f97316;
                font-weight: bold;
              }
              .terminal-prompt {
                margin-bottom: 10px;
                display: block;
              }
              .response-content {
                padding-left: 15px;
                border-left: 2px solid #333;
              }
              .highlight {
                color: #f97316;
                font-weight: bold;
              }
              .comment {
                color: #666;
                font-style: italic;
              }
            </style>
          </head>
          <body>
            <span class="terminal-prompt">fetch response</span>
            <div class="response-content">
              ${typeof response.data === "string" ? response.data : JSON.stringify(response.data, null, 2)}
            </div>
            <span class="terminal-prompt comment">// Backend response received</span>
          </body>
        </html>
      `}
                className="w-full h-full border-0 pt-8"
                title="HTML Response"
                sandbox="allow-same-origin allow-scripts"
              />
            </div>
          </TabsContent>

          <TabsContent value="headers" className="flex-1 overflow-auto p-0 m-0">
            <div className="bg-black p-4">
              <div className="mb-2">
                <span className="text-orange-500">$</span> <span className="text-gray-400">response.headers</span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2c2c2c]">
                    <th className="text-left py-2 font-medium text-orange-400">Key</th>
                    <th className="text-left py-2 font-medium text-orange-400">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(response.headers).map(([key, value]) => (
                    <tr key={key} className="border-b border-[#2c2c2c]">
                      <td className="py-2 font-mono text-green-400">{key}</td>
                      <td className="py-2 font-mono text-gray-300">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 bg-black">
          <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#1c1c1c] border border-[#3c3c3c]">
            <code className="text-orange-500 text-xl">&gt;_</code>
          </div>
          <p className="text-center">
            <span className="text-orange-500">$</span> Click Send to execute request
          </p>
        </div>
      )}
    </div>
  )
}

