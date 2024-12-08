import FeatureCard from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Features = () => {
  const features = [
    {
      title: "Custom Subscription Plans",
      description:
        "Easily create and manage flexible subscription plans tailored to your business needs.",
    },
    {
      title: "Dynamic Pricing Optimization",
      description:
        "Adjust pricing in real-time based on customer behavior, market trends, and competitor prices.",
    },
    {
      title: "Customer Insights Dashboard",
      description:
        "Gain valuable insights into your customer behavior, sales, and subscription performance.",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate with existing sales systems, payment gateways, and marketing tools effortlessly.",
    },
    {
      title: "Automated Billing",
      description:
        "Set up recurring billing cycles and automate invoice generation for your subscribers.",
    },
    {
      title: "Revenue Analytics",
      description:
        "Track and analyze your recurring revenue, churn rate, and other key financial metrics.",
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Powerful Features</h1>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Discover how Subscripto can transform your business with our comprehensive suite of features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-cta text-primary hover:bg-secondary transition-colors text-lg px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;

