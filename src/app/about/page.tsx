import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Subscripto</h1>
        <div className="space-y-6 max-w-3xl">
          <p className="text-xl text-accent">
            Subscripto helps small and medium businesses transition into subscription-based models, 
            offering fully customizable plans and seamless integration with your existing systems.
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg">
            At Subscripto, we're committed to empowering businesses with the tools they need to thrive 
            in the subscription economy. Our platform is designed to simplify the complexities of 
            subscription management, allowing you to focus on what matters most - growing your business.
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Customizable subscription plans</li>
            <li>Seamless integration with existing systems</li>
            <li>Advanced analytics and reporting</li>
            <li>Automated billing and invoicing</li>
            <li>Customer management tools</li>
          </ul>
          <div className="mt-10">
            <Link href="/features">
              <Button className="bg-cta text-primary hover:bg-secondary transition-colors">
                Explore Our Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

