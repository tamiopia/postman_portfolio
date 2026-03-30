"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight, Database, Globe, Server, User } from "lucide-react"
import { cn } from "@/lib/utils"
import type { RequestConfig } from "./postman-interface"

type Collection = {
  id: string
  name: string
  icon: React.ReactNode
  requests: RequestConfig[]
  isOpen?: boolean
  type: "free" | "nda"
}

type SidebarProps = {
  onSelectRequest: (request: RequestConfig) => void
}

export function Sidebar({ onSelectRequest }: SidebarProps) {
  // Update the collections array to include a new "tamagn" collection with various portfolio sections
  // Replace the existing collections state with this updated version

  const [collections, setCollections] = useState<Collection[]>([
    {
      id: "tamagn",
      name: "tamagn",
      icon: <User className="h-4 w-4" />,
      isOpen: true,
      type: "free",
      requests: [
        {
          method: "GET",
          url: "/api/portfolio/about",
          headers: [],
          params: [],
          body: "",
          name: "About Me",
        },
        {
          method: "GET",
          url: "/api/portfolio/experience",
          headers: [],
          params: [],
          body: "",
          name: "Experience",
        },
        {
          method: "GET",
          url: "/api/portfolio/education",
          headers: [],
          params: [],
          body: "",
          name: "Education",
        },
        {
          method: "GET",
          url: "/api/portfolio/projects",
          headers: [],
          params: [],
          body: "",
          name: "Projects",
        },
        {
          method: "GET",
          url: "/api/portfolio/skills",
          headers: [],
          params: [],
          body: "",
          name: "Skills",
        },
        {
          method: "POST",
          url: "/api/portfolio/contact",
          headers: [{ key: "Content-Type", value: "application/json" }],
          params: [],
          body: JSON.stringify(
            {
              name: "John Doe",
              email: "john@example.com",
              message: "I'd like to discuss a project opportunity.",
            },
            null,
            2,
          ),
          name: "Contact Form",
        },
        {
          method: "POST",
          url: "/api/auth/signup",
          headers: [{ key: "Content-Type", value: "application/json" }],
          params: [],
          body: JSON.stringify(
            {
              username: "newuser",
              email: "newuser@example.com",
              password: "securepassword",
            },
            null,
            2,
          ),
          name: "Signup",
        },
      ],
    },
    {
      id: "typing-api",
      name: "Remotide-API",
      icon: <Server className="h-4 w-4" />,
      isOpen: false,
      type: "free",
      requests: [
        {
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
        {
          method: "GET",
          url: "http://localhost:8000/api/auth/profile",
          headers: [{ key: "Authorization", value: "Bearer token" }],
          params: [],
          body: "",
        },
      ],
    },
    {
      id: "user-api",
      name: "backos_appointment_api",
      icon: <User className="h-4 w-4" />,
      isOpen: false,
      type: "nda",
      requests: [
        {
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          headers: [],
          params: [],
          body: "",
        },
        {
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users/1",
          headers: [],
          params: [],
          body: "",
        },
      ],
    },
    {
      id: "posts-api",
      name: "4B's collection",
      icon: <Database className="h-4 w-4" />,
      isOpen: false,
      type: "nda",
      requests: [
        {
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/posts",
          headers: [],
          params: [],
          body: "",
        },
        {
          method: "POST",
          url: "https://jsonplaceholder.typicode.com/posts",
          headers: [{ key: "Content-Type", value: "application/json" }],
          params: [],
          body: JSON.stringify(
            {
              title: "New Post",
              body: "This is the content of the post",
              userId: 1,
            },
            null,
            2,
          ),
        },
      ],
    },
    {
      id: "class-collection",
      name: "OMISHTU-JOY-WEBDEV-CLASS_COLLECTION",
      icon: <Globe className="h-4 w-4" />,
      isOpen: false,
      type: "nda",
      requests: [
        {
          method: "GET",
          url: "https://api.example.com/classes",
          headers: [],
          params: [],
          body: "",
        },
      ],
    },
    {
      id: "cludiee-api",
      name: "cludiee-API",
      icon: <Server className="h-4 w-4" />,
      isOpen: false,
      type: "free",
      requests: [
        {
          method: "GET",
          url: "https://api.example.com/cludiee",
          headers: [],
          params: [],
          body: "",
        },
      ],
    },
    {
      id: "rental-management",
      name: "Rental_managment_system-API",
      icon: <Server className="h-4 w-4" />,
      isOpen: false,
      type: "nda",
      requests: [
        {
          method: "GET",
          url: "https://api.example.com/rentals",
          headers: [],
          params: [],
          body: "",
        },
      ],
    },
    {
      id: "debal",
      name: "quiz-genius-API",
      icon: <Server className="h-4 w-4" />,
      isOpen: false,
      type: "free",
      requests: [
        {
          method: "GET",
          url: "https://api.example.com/basics",
          headers: [],
          params: [],
          body: "",
        },
      ],
    },
    
  ])

  const toggleCollection = (id: string) => {
    setCollections(
      collections.map((collection) =>
        collection.id === id ? { ...collection, isOpen: !collection.isOpen } : collection,
      ),
    )
  }

  return (
    <div id="sidebar-panel" className="h-full p-0 overflow-y-auto flex flex-col">
      <div className="flex items-center justify-between p-3 border-b border-[#2c2c2c]">
        <span className="text-sm font-medium">Collections</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {collections.map((collection) => (
          <div key={collection.id} className="border-b border-[#2c2c2c]">
            <button
              onClick={() => toggleCollection(collection.id)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#2c2c2c] text-left",
                collection.type === "nda" && "cursor-not-allowed",
              )}
            >
              {collection.isOpen ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )}
              <span>{collection.name}</span>
              {collection.type === "nda" && (
                <span className="ml-auto text-xs text-red-400 bg-red-400/10 px-2 py-0.5 rounded">NDA</span>
              )}
            </button>
            {collection.isOpen && collection.type !== "nda" && (
              <div className="pl-8 border-t border-[#2c2c2c]">
                {collection.requests.map((request, index) => (
                  <button
                    key={`${collection.id}-${index}`}
                    onClick={() => onSelectRequest(request)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#2c2c2c] text-left"
                  >
                    <span
                      className={cn(
                        "text-xs font-medium",
                        request.method === "GET" && "text-blue-400",
                        request.method === "POST" && "text-green-400",
                        request.method === "PUT" && "text-orange-400",
                        request.method === "DELETE" && "text-red-400",
                        request.method === "PATCH" && "text-teal-400",
                      )}
                    >
                      {request.method}
                    </span>
                    <span className="truncate text-gray-300">
                      {request.name || request.url.split("/").pop() || "New Request"}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

