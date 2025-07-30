import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-3xl">
      <div className="space-y-4 text-center">
        <h1 className="text-display-small font-headline font-style-bold:font-headline-bold">Contact Us</h1>
        <p className="text-body-large text-on-surface-variant font-style-bold:font-body-bold">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>
      <form className="mt-12 space-y-8">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <Label htmlFor="first-name" className="text-title-small font-style-bold:font-body-bold">First name</Label>
            <div className="mt-2.5">
              <Input type="text" id="first-name" name="first-name" autoComplete="given-name" />
            </div>
          </div>
          <div>
            <Label htmlFor="last-name" className="text-title-small font-style-bold:font-body-bold">Last name</Label>
            <div className="mt-2.5">
              <Input type="text" id="last-name" name="last-name" autoComplete="family-name" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-title-small font-style-bold:font-body-bold">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-title-small font-style-bold:font-body-bold">Message</Label>
          <Textarea id="message" name="message" rows={4} />
        </div>
        <Button type="submit" size="lg" className="w-full rounded-full">Send message</Button>
      </form>
    </div>
  );
}
