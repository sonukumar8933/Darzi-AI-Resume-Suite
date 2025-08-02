"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, User, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const mockParsedData = {
  personalInfo: {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "(555) 987-6543",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/sarahjohnson",
  },
  summary:
    "Experienced Product Manager with 7+ years of experience leading cross-functional teams and launching successful digital products.",
  experience: [
    {
      title: "Senior Product Manager",
      company: "TechCorp Inc.",
      duration: "2021 - Present",
      description: "Led product strategy for B2B SaaS platform serving 50K+ users",
    },
    {
      title: "Product Manager",
      company: "Innovation Labs",
      duration: "2019 - 2021",
      description: "Managed product roadmap and collaborated with engineering teams",
    },
  ],
  education: [
    {
      degree: "MBA",
      school: "Stanford University",
      year: "2019",
    },
    {
      degree: "BS Computer Science",
      school: "UC Berkeley",
      year: "2017",
    },
  ],
  skills: ["Product Strategy", "Agile/Scrum", "Data Analysis", "User Research", "A/B Testing", "SQL", "Figma", "Jira"],
}

export function ParseResumePage() {
  const [isParsed, setIsParsed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsParsed(true)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Parse Resume</h1>
        <p className="text-muted-foreground">Upload a resume to extract and analyze its content</p>
      </div>

      {!isParsed ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Upload Resume</CardTitle>
              <CardDescription>Drag and drop your resume file or click to browse</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:border-muted-foreground/50 transition-colors">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Supported formats: PDF, DOC, DOCX</p>
                  <Input type="file" accept=".pdf,.doc,.docx" className="hidden" id="resume-upload" />
                  <Button onClick={handleFileUpload} disabled={isLoading} className="mt-4">
                    {isLoading ? "Processing..." : "Choose File"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">{mockParsedData.personalInfo.name}</p>
                  <p className="text-sm text-muted-foreground">{mockParsedData.personalInfo.email}</p>
                  <p className="text-sm text-muted-foreground">{mockParsedData.personalInfo.phone}</p>
                  <p className="text-sm text-muted-foreground">{mockParsedData.personalInfo.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{mockParsedData.summary}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockParsedData.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                  <p className="text-sm">{exp.description}</p>
                  {index < mockParsedData.experience.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockParsedData.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mockParsedData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => setIsParsed(false)}>
              Parse Another Resume
            </Button>
            <Button>Save Parsed Data</Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
