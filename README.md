# AI Tools Hub — Landing Page

This repository hosts the **AI Tools Hub**, a landing page designed as a central entry point to my AI projects.  
The hub provides a simple, clean interface where visitors can explore and access individual AI tools.  

Currently, the landing page connects to two applications:

---

## 🚀 Projects

### 1. [AI-Powered Document Summarizer](https://keywordvista.azurewebsites.net/)
Summarizes long documents and extracts key insights using Azure Cognitive Services and Azure OpenAI.

- Upload supported formats: `.png`, `.pdf`, `.docx` (with more coming soon)  
- Built with **.NET Web API**, **Azure Cognitive Services**, and **Terraform IaC**  
- Provides both extractive and abstractive summaries  
- Deployed to Azure with CI/CD pipelines  

---

### 2. Audit Clarity Assistant
Reviews nonprofit audit notes for clarity, specificity, and GAAP alignment. Flags vague language and suggests precise alternatives.

- Prompt library focused on nonprofit accounting scenarios  
- Modules include donated services, multi-year pledges, restrictions, and more  
- Built with **GPT-4o** for real-world defensibility  
- Helps reduce review cycles and improve audit readiness  

---

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS (CDN), Framer Motion, Lucide React icons  
- **Hosting**: Azure Static Web Apps  
- **Integrations**:  
  - AI Summarizer → Azure Cognitive Services + Azure OpenAI  
  - Audit Clarity Assistant → GPT-4o prompt modules  
- **Infrastructure**: Terraform for Azure resources, GitHub Actions for CI/CD  

---

## 📦 Getting Started

### Local Development
Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/ai-tools-hub.git
cd ai-tools-hub
npm install
npm run dev
```

Open `http://localhost:5173` to view the landing page.

---

## 📄 Roadmap
- Add additional AI projects as they are developed  
- Expand content for each project (screenshots, feature highlights)  
- Support dark/light theme toggle  
- Future: central analytics/dashboard across tools  

---

## 👩‍💻 Author
**April Northcutt**  
Software Engineering Manager | Azure & .NET | AI & Cloud Solutions  
