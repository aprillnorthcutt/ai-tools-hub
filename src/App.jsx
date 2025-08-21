import React from "react";
import { motion } from "framer-motion";
import { FileText, Library, ExternalLink } from "lucide-react";

const LINKS = {
  summarizer: "https://keywordvista.azurewebsites.net/", 
  nonprofitClarity: "https://clarity-assistant.azurewebsites.net/Audit_Clarity_Assistant",
  financialClarity: "https://clarity-assistant.azurewebsites.net/Financial_Clarity_Assistant",
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20">
        <Hero />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200/70 bg-white/70 backdrop-blur dark:border-gray-800/70 dark:bg-gray-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500" />
          <span className="text-lg font-semibold tracking-tight">AI Tools Hub</span>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
          <a href="#about" className="opacity-80 hover:opacity-100">About</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-12 text-center md:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-4xl"
      >
        Explore Our AI Tools
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mx-auto mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300"
      >
        Two focused apps designed to save time and improve clarity. Choose a tool to get started.
      </motion.p>
    </section>
  );
}

function Cards() {
  return (
    <section id="projects" className="grid gap-6 md:grid-cols-2">
      <ToolCard
        icon={FileText}
        title="AI-Powered Document Summarizer"
        pill="Azure + .NET + Terraform"
        summary="Summarize documents or text and surface key insights."
        bullets={[
          "Upload .png, .pdf, or .docx (more formats coming)",
          "Azure Cognitive Services / Azure OpenAI backend",
          ".NET Web API with CI/CD and Terraform IaC",
        ]}
        ctaLabel="Open Summarizer"
        href={LINKS.summarizer}
      />

      <ToolCard
        icon={Library}
        title="Nonprofit Clarity Assistant"
        pill="Streamlit + GPT-4o"
        summary="Flags vague or unclear audit notes in nonprofit financials using prompt-engineered NLP."
        bullets={[
          "Designed for donated services, pledges, and restricted funds",
          "Built with Azure OpenAI + Streamlit",
          "Enhances defensibility and reduces review cycles",
        ]}
        ctaLabel="Open Nonprofit Assistant"
        href={LINKS.nonprofitClarity}
      />

      <ToolCard
        icon={Library}
        title="Financial Clarity Assistant"
        pill="Streamlit + GPT-4o"
        summary="Reviews financial disclosures and flags ambiguity in donor communications or compliance language."
        bullets={[
          "Highlights vague or noncompliant phrasing",
          "Streamlit frontend powered by GPT-4o backend",
          "Tailored to financial reporting workflows",
        ]}
        ctaLabel="Open Financial Assistant"
        href={LINKS.financialClarity}
      />
    </section>
  );
}

function ToolCard({ icon: Icon, title, pill, summary, bullets, href, ctaLabel }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-gray-100 p-3 dark:bg-gray-800">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="truncate text-lg font-semibold">{title}</h3>
            <span className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300">
              {pill}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{summary}</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-gray-900"
            >
              {ctaLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Footer() {
  return (
<footer
      id="about"
      className="border-t border-gray-200/70 py-10 text-center text-sm text-gray-600 dark:border-gray-800/70 dark:text-gray-300"
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-2">
          Built by April Northcutt • Software Engineering Manager • Azure & .NET
        </p>
        <p className="mb-2">
          <a
            href="https://github.com/aprillnorthcutt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Visit my GitHub →
          </a>
        </p>
        <p className="opacity-80">
          © {new Date().getFullYear()} April Northcutt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
