## 🔥 Overview

This project lets users **generate fully functional web projects** by describing their idea in natural language.  
It leverages **AI agents (Gemini)**, **serverless workflows (Inngest)**, and a **sandboxed environment (e2b)** to create, run, and manage projects dynamically.

Users can:
- Select project templates (Netflix clone, Airbnb clone, etc.)
- Describe a custom project idea
- Watch AI generate code and sandbox it in real-time
- Preview live project from the sandbox

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | **Next.js 13+**, React, TailwindCSS |
| Backend | **Inngest** serverless functions, Prisma ORM, PostgreSQL |
| AI | **Gemini API** (AI agents), AI orchestration via `@inngest/agent-kit` |
| Sandbox | **e2b Code Interpreter** (isolated project execution) |
| Authentication | **Clerk** |
| Utilities | React Hook Form, Zod, Sonner, Zustand |

---

## ⚙️ Features

- **AI Project Generation**
  - Use predefined templates or custom prompts
  - Generates fully functional projects with file structure
- **Real-time Code Execution**
  - e2b Sandbox executes terminal commands safely
  - Read/Write/Update files in sandbox dynamically
- **Project Management**
  - Each project has its own sandbox & AI workflow
  - Projects saved in DB (Prisma + PostgreSQL)
  - Project previews with live sandbox URL
- **Responsive UI**
  - Template selection grid
  - Carousel view for mobile
  - Dark mode support
- **Event-driven Architecture**
  - Inngest functions manage async workflows
  - Multi-step AI execution with error handling and retries

---

## 🏗 Workflow Explained

1. **User submits a project idea** via frontend form.
2. **New project is created** in DB with a slug, userId, and initial message.
3. **Inngest triggers** `code-agent/run`:
   - Creates a **new sandbox** in e2b
   - Fetches **previous messages** from DB
   - Initializes AI agent state
4. **AI Agent Workflow**
   - Runs coding agent with tools:
     - Terminal
     - File management (create/update/read)
   - Generates code & project files
5. **AI Response Generation**
   - `fragment-title-generator` creates project fragment title
   - `response-generator` creates user-friendly AI message
6. **Result Saved**
   - All AI output, sandbox files, and URL saved in DB
7. **Frontend**
   - Displays project, live preview URL, and generated code

---

## 🧩 How It Works

- **Inngest**: Handles **async, multi-step server workflows**  
- **Sandbox (e2b)**: Safe environment to **execute and test project code**  
- **Gemini AI Agents**: Generate code, summaries, and assistant responses  
- **Prisma & PostgreSQL**: Store projects, messages, and AI outputs  
- **Next.js + React**: Frontend form, template grid, project listing  

---

## 🚀 Setup & Run Locally

1. **Clone Repo**
```bash
git clone <your-repo-url>
cd <project-folder>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
