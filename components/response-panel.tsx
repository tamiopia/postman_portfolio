"use client"

import { useId, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ApiResponse } from "./postman-interface"
import { ExternalLink, Loader2, Maximize2, Minimize2, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

type ResponsePanelProps = {
  response: ApiResponse | null
  isLoading: boolean
}

export function ResponsePanel({ response, isLoading }: ResponsePanelProps) {
  const [activeTab, setActiveTab] = useState("html")
  const previewId = useId()

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return "text-green-500"
    if (status >= 300 && status < 400) return "text-blue-500"
    if (status >= 400 && status < 500) return "text-yellow-500"
    if (status >= 500) return "text-red-500"
    return "text-gray-500"
  }

  const rawContent = response ? (typeof response.data === "string" ? response.data : JSON.stringify(response.data, null, 2)) : ""

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")

  const buildPreviewDocument = (content: string, mode: "embedded" | "standalone") => {
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    const safeContent = content.trim().startsWith("<")
      ? content
      : `<pre>${escapeHtml(content)}</pre>`

    const standaloneControls =
      mode === "standalone"
        ? `
      <div class="standalone-actions">
        <button type="button" class="nav-button" onclick="window.location.href='${origin}'">Back to Portfolio</button>
        <button type="button" class="nav-button nav-button-secondary" onclick="window.close()">Close Tab</button>
      </div>`
        : ""

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <base target="_blank" />
          <style>
            :root {
              color-scheme: dark;
            }
            * {
              box-sizing: border-box;
            }
            body {
              background: #000;
              color: #f1f1f1;
              font-family: 'Courier New', monospace;
              margin: 0;
              line-height: 1.55;
              padding: ${mode === "standalone" ? "0" : "40px 20px 20px"};
            }
            .preview-shell {
              min-height: 100vh;
              background: #000;
            }
            .preview-nav {
              position: sticky;
              top: 0;
              z-index: 20;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 16px;
              padding: 14px 18px;
              border-bottom: 1px solid #252525;
              background: rgba(12, 12, 12, 0.94);
              backdrop-filter: blur(10px);
            }
            .preview-nav strong {
              color: #f97316;
              font-size: 13px;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
            .preview-nav span {
              color: #8b8b8b;
              font-size: 12px;
            }
            .standalone-actions {
              display: flex;
              gap: 10px;
              flex-wrap: wrap;
            }
            .nav-button {
              border: 1px solid #3a3a3a;
              background: #f97316;
              color: #fff;
              border-radius: 999px;
              padding: 9px 14px;
              font-size: 12px;
              font-weight: 700;
              cursor: pointer;
            }
            .nav-button-secondary {
              background: #171717;
              color: #f4f4f5;
            }
            .preview-content {
              padding: 24px 20px 28px;
            }
            pre {
              white-space: pre-wrap;
              word-wrap: break-word;
              margin: 0;
            }
            .terminal-prompt::before {
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
            .comment {
              color: #666;
              font-style: italic;
            }
            a {
              color: #fb923c !important;
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="preview-shell">
            ${
              mode === "standalone"
                ? `<div class="preview-nav"><div><strong>Response Preview</strong><br /><span>External links open normally and you can return to the workspace anytime.</span></div>${standaloneControls}</div>`
                : ""
            }
            <div class="preview-content">
              <span class="terminal-prompt">fetch response</span>
              <div class="response-content">${safeContent}</div>
              <span class="terminal-prompt comment">// Backend response received</span>
            </div>
          </div>
          <script>
            document.querySelectorAll('a[href]').forEach((link) => {
              link.setAttribute('target', '_blank');
              link.setAttribute('rel', 'noopener noreferrer');
            });
          </script>
        </body>
      </html>
    `
  }

  const openInNewTab = () => {
    if (!response) return

    const newWindow = window.open("", "_blank")
    if (newWindow) {
      newWindow.opener = null
      newWindow.document.open()
      newWindow.document.write(buildPreviewDocument(rawContent, "standalone"))
      newWindow.document.close()
    }
  }

  const toggleFullscreen = async () => {
    const container = document.getElementById(previewId)
    if (!container) return

    if (document.fullscreenElement) {
      await document.exitFullscreen()
      return
    }

    if (container.requestFullscreen) {
      await container.requestFullscreen()
    }
  }

  return (
    <div id="response-panel" className="flex-1 flex flex-col bg-[#1c1c1c] overflow-hidden">
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
            <div id={previewId} className="p-0 h-full bg-black relative">
              <div className="absolute top-2 right-2 z-10 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#1c1c1c] text-orange-500 border-[#3c3c3c] hover:bg-[#2c2c2c]"
                  onClick={openInNewTab}
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Open in New Tab
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#1c1c1c] text-orange-500 border-[#3c3c3c] hover:bg-[#2c2c2c]"
                  onClick={toggleFullscreen}
                >
                  {typeof document !== "undefined" && document.fullscreenElement ? (
                    <Minimize2 className="mr-1 h-4 w-4" />
                  ) : (
                    <Maximize2 className="mr-1 h-4 w-4" />
                  )}
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
                <div className="ml-auto text-[11px] text-gray-500">Use Esc to exit fullscreen</div>
              </div>
              <iframe
                id="response-iframe"
                srcDoc={buildPreviewDocument(rawContent, "embedded")}
                className="w-full h-full border-0 pt-8"
                title="HTML Response"
                sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
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
