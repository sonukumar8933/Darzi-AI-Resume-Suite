"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Save, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

const defaultResumeContent = `# John Doe
**Software Engineer**

📧 john.doe@email.com | 📱 (555) 123-4567 | 🌐 linkedin.com/in/johndoe

## Summary
Experienced software engineer with 5+ years of experience in full-stack development, specializing in React, Node.js, and cloud technologies.

## Experience

### Senior Software Engineer | Tech Corp (2021 - Present)
- Led development of customer-facing web applications serving 100K+ users
- Implemented microservices architecture reducing system latency by 40%
- Mentored junior developers and conducted code reviews

### Software Engineer | StartupXYZ (2019 - 2021)
- Built responsive web applications using React and TypeScript
- Developed RESTful APIs with Node.js and Express
- Collaborated with cross-functional teams in Agile environment

## Skills
- **Languages:** JavaScript, TypeScript, Python, Java
- **Frontend:** React, Vue.js, HTML5, CSS3, Tailwind CSS
- **Backend:** Node.js, Express, Django, Spring Boot
- **Databases:** PostgreSQL, MongoDB, Redis
- **Cloud:** AWS, Docker, Kubernetes

## Education
**Bachelor of Science in Computer Science**
University of Technology (2015 - 2019)`

export function ResumeEditorPage() {
  const [content, setContent] = useState(defaultResumeContent)

  const renderMarkdown = (text: string) => {
    return text.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-2xl font-bold mb-2">
            {line.slice(2)}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-xl font-semibold mb-2 mt-4">
            {line.slice(3)}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-lg font-medium mb-1 mt-3">
            {line.slice(4)}
          </h3>
        )
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-semibold mb-1">
            {line.slice(2, -2)}
          </p>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 mb-1">
            {line.slice(2)}
          </li>
        )
      }
      if (line.trim() === "") {
        return <br key={index} />
      }
      return (
        <p key={index} className="mb-1">
          {line}
        </p>
      )
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume Editor</h1>
          <p className="text-muted-foreground">Edit your resume with live preview</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Editor</CardTitle>
          </CardHeader>
          <CardContent className="h-[65vh]">
            {/* <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[600px] font-mono text-sm"
              placeholder="Start typing your resume content..."
            /> */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <div className="min-h-[600px] p-4 bg-white text-black rounded border">
              <div className="prose prose-sm max-w-none">{renderMarkdown(content)}</div>
            </div> */}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
