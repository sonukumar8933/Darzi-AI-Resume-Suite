
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { tailorResume, TailorResumeOutput } from "@/ai/flows/tailor-resume-flow";
import ReactMarkdown from "react-markdown";

function GetStartedContent() {
    const searchParams = useSearchParams();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [resume, setResume] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [result, setResult] = useState<TailorResumeOutput | null>(null);

    useEffect(() => {
        const urlJobDescription = searchParams.get('jobDescription');
        if (urlJobDescription) {
            setJobDescription(decodeURIComponent(urlJobDescription));
        }
    }, [searchParams]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setResult(null);

        try {
            const response = await tailorResume({ resume, jobDescription });
            setResult(response);
        } catch (error: any) {
            console.error("Error tailoring resume:", error);
            if (error.message && error.message.includes('GEMINI_API_KEY')) {
                 toast({
                    title: "AI Feature Disabled",
                    description: "Please provide a Gemini API key in .env.local to use this feature.",
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Error",
                    description: "Failed to tailor resume. Please try again.",
                    variant: "destructive",
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
                <h1 className="text-display-small font-headline font-style-bold:font-headline-bold">Resume Tailor</h1>
                <p className="text-body-large text-on-surface-variant font-style-bold:font-body-bold">
                    Paste your resume and the job description to get started.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <Label htmlFor="resume" className="text-title-medium font-style-bold:font-body-bold">Your Resume</Label>
                        <Textarea 
                            id="resume" 
                            name="resume" 
                            rows={20} 
                            placeholder="Paste your full resume here." 
                            className="h-full bg-surface-container-low"
                            value={resume}
                            onChange={(e) => setResume(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="jobDescription" className="text-title-medium font-style-bold:font-body-bold">Job Description</Label>
                        <Textarea 
                            id="jobDescription" 
                            name="jobDescription" 
                            rows={20} 
                            placeholder="Paste the job description here." 
                            className="h-full bg-surface-container-low"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <Button type="submit" size="lg" className="rounded-full" disabled={isLoading || !resume || !jobDescription}>
                        {isLoading ? <><LoadingSpinner className="mr-2 h-5 w-5" /> Tailoring...</> : 'Tailor Resume'}
                    </Button>
                </div>
            </form>

            {isLoading && (
                 <Card className="mt-12 bg-surface-container-low animate-pulse">
                    <CardHeader>
                        <CardTitle>Generating your tailored resume...</CardTitle>
                        <CardDescription>The AI is working its magic. This may take a moment.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-full"></div>
                    </CardContent>
                </Card>
            )}

            {result && (
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2 bg-surface-container-low">
                        <CardHeader>
                            <CardTitle>Your Tailored Resume</CardTitle>
                            <CardDescription>Here is the optimized version of your resume. Copy and paste it into your document.</CardDescription>
                        </CardHeader>
                        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown>{result.tailoredResume}</ReactMarkdown>
                        </CardContent>
                    </Card>
                    <Card className="bg-surface-container-low">
                         <CardHeader>
                            <CardTitle>Analysis</CardTitle>
                            <CardDescription>Key changes made to improve your resume.</CardDescription>
                        </CardHeader>
                        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown>{result.analysis}</ReactMarkdown>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}


export default function GetStartedPage() {
    return (
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-background"><LoadingSpinner className="h-12 w-12" /></div>}>
            <GetStartedContent />
        </Suspense>
    );
}
