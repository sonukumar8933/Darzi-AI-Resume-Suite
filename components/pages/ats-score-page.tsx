"use client";

import { motion } from "framer-motion";
import { Target, AlertCircle, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const atsData = {
  overallScore: 78,
  breakdown: [
    {
      category: "Keywords",
      score: 85,
      description: "Good keyword optimization",
    },
    {
      category: "Formatting",
      score: 72,
      description: "Some formatting issues detected",
    },
    {
      category: "Skills Match",
      score: 90,
      description: "Excellent skills alignment",
    },
    {
      category: "Experience",
      score: 68,
      description: "Could improve experience descriptions",
    },
    {
      category: "Education",
      score: 95,
      description: "Perfect education formatting",
    },
    {
      category: "Contact Info",
      score: 100,
      description: "All contact information present",
    },
  ],
  recommendations: [
    "Add more industry-specific keywords",
    "Improve bullet point formatting",
    "Quantify achievements with numbers",
    "Use standard section headings",
  ],
  strengths: [
    "Strong technical skills section",
    "Clear contact information",
    "Relevant work experience",
  ],
};

export function ATSScorePage() {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          ATS Score Analysis
        </h1>
        <p className="text-muted-foreground">
          Detailed breakdown of your resume's ATS compatibility
        </p>
      </div>

      {/* 🚀 uncomment the below part to see a sample layout */}

      {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Target className="h-5 w-5" />
              Overall ATS Score
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className={`text-4xl font-bold ${getScoreColor(atsData.overallScore)}`}>{atsData.overallScore}%</div>
            <p className="text-sm text-muted-foreground mt-2">
              {atsData.overallScore >= 80 ? "Excellent" : atsData.overallScore >= 60 ? "Good" : "Needs Improvement"}
            </p>
            <div className="mt-4">
              <Progress value={atsData.overallScore} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Score Breakdown</CardTitle>
            <CardDescription>Detailed analysis of each resume section</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {atsData.breakdown.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{item.category}</span>
                    <Badge variant={getScoreVariant(item.score)}>{item.score}%</Badge>
                  </div>
                  <Progress value={item.score} className="h-2 mb-1" />
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Recommendations
              </CardTitle>
              <CardDescription>Areas for improvement to boost your ATS score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {atsData.recommendations.map((rec, index) => (
                  <Alert key={index}>
                    <AlertDescription>{rec}</AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Strengths
              </CardTitle>
              <CardDescription>What your resume does well</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {atsData.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div> */}
    </div>
  );
}