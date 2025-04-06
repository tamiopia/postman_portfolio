// Inside the handleSubmit function, update the fetch URL:
const messages: any[] = [] // Declared messages variable
const userMessage: any = {} // Declared userMessage variable
const response = await fetch("/api/chat-ai", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    messages: [...messages, userMessage],
  }),
})

