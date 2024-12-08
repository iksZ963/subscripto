"use client"

import RoadmapMilestone from "@/components/ui/RoadmapMilestone";
import Timeline from "@/components/ui/Timeline";
import { motion } from "framer-motion";

const Roadmap = () => {
  const roadmapData = [
    {
      title: "Phase 1: MVP Development",
      items: [
        "Design website layout and branding.",
        "Develop core subscription management features.",
        "Set up basic dashboard for analytics.",
      ],
      isCompleted: true,
    },
    {
      title: "Phase 2: Dynamic Pricing Integration",
      items: [
        "Implement real-time pricing algorithm.",
        "Integrate with payment gateways for dynamic billing.",
        "Add pricing A/B testing functionality.",
      ],
      isCompleted: true,
    },
    {
      title: "Phase 3: User Onboarding & Customization",
      items: [
        "Add user authentication and onboarding flow.",
        "Enable business owners to fully customize their subscription plans.",
        "Add more payment options and billing cycles.",
      ],
      isCompleted: false,
    },
    {
      title: "Phase 4: Full Launch and Marketing",
      items: [
        "Launch platform for public use.",
        "Implement marketing automation and targeted campaigns.",
        "Roll out customer support features.",
      ],
      isCompleted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold">Product Roadmap</h1>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Follow our journey as we build and improve Subscripto. Here's what we've accomplished and what's coming next.
          </p>
        </motion.div>
        <Timeline>
          {roadmapData.map((milestone, index) => (
            <RoadmapMilestone
              key={index}
              title={milestone.title}
              items={milestone.items}
              isCompleted={milestone.isCompleted}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Roadmap;

