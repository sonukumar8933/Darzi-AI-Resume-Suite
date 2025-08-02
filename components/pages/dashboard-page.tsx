"use client"

import { motion } from "framer-motion"
import { FileText, TrendingUp, Clock, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    title: "Total Resumes",
    value: "24",
    description: "Uploaded this month",
    icon: FileText,
    trend: "+12%",
  },
  {
    title: "Average ATS Score",
    value: "78%",
    description: "Across all resumes",
    icon: Target,
    trend: "+5%",
  },
  {
    title: "Recently Parsed",
    value: "8",
    description: "In the last 7 days",
    icon: Clock,
    trend: "+3",
  },
]

const recentResumes = [
  { name: "Software Engineer Resume", score: 85, date: "2 hours ago" },
  { name: "Product Manager CV", score: 72, date: "1 day ago" },
  { name: "Data Scientist Resume", score: 91, date: "3 days ago" },
  { name: "UX Designer Portfolio", score: 68, date: "5 days ago" },
]

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your resume activities.</p>
      </div>

      {/* 🚀 uncomment the below part to see a sample layout */}

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <div className="flex items-center pt-1">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-500">{stat.trend}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle>Recently Parsed Resumes</CardTitle>
            <CardDescription>Your latest resume parsing activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResumes.map((resume, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{resume.name}</p>
                      <p className="text-xs text-muted-foreground">{resume.date}</p>
                    </div>
                  </div>
                  <Badge variant={resume.score >= 80 ? "default" : resume.score >= 70 ? "secondary" : "destructive"}>
                    {resume.score}% ATS
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div> */}
    </div>
  )
}