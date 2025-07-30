import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Tailoring",
      description: "Customize your resume for any job description instantly.",
    },
    {
      title: "ATS Optimization",
      description: "Beat the bots with keyword and format optimization.",
    },
    {
      title: "Performance Analytics",
      description: "Track views and measure the impact of your resume.",
    },
    {
      title: "Professional Templates",
      description: "Choose from a variety of professionally designed templates.",
    },
    {
      title: "Content Suggestions",
      description: "Get AI-powered suggestions to improve your resume content.",
    },
    {
      title: "Shareable Link",
      description: "Create a unique link to share your resume online.",
    },
  ];

  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-display-small font-headline font-style-bold:font-headline-bold">Features</h1>
              <p className="max-w-[900px] text-body-large text-on-surface-variant font-style-bold:font-body-bold">
                Everything you need to create a standout resume.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col justify-between rounded-large shadow-md hover:shadow-xl transition-shadow duration-300 p-6 bg-surface-container-low">
                <div>
                  <CardTitle className="text-title-large font-headline font-style-bold:font-headline-bold">{feature.title}</CardTitle>
                  <CardDescription className="mt-2 text-body-medium text-on-surface-variant font-style-bold:font-body-bold">{feature.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
