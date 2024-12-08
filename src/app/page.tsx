import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Subscripto
            </h1>
            <p className="text-xl sm:text-2xl text-accent">
              Transform your business with customizable subscription plans.
            </p>
            <div className="space-y-4">
              {["Flexible Pricing", "Easy Integration", "Analytics Dashboard"].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-cta" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-x-4">
              <Link href="/about">
                <Button variant="default" className="bg-cta text-primary hover:bg-secondary transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-primary transition-colors">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/dummy-dashboard.png"
              alt="Subscripto Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'TechCorp', color: 'bg-primary' },
              { name: 'GreenEnergy', color: 'bg-secondary' },
              { name: 'FinanceHub', color: 'bg-primary' },
              { name: 'HealthInnovate', color: 'bg-secondary' }
            ].map((company, index) => (
              <div key={index} className={`w-32 h-12 ${company.color} rounded-md flex items-center justify-center`}>
                <span className="text-primary-foreground font-bold">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

