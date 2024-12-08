"use client"

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

type RoadmapMilestoneProps = {
  title: string;
  items: string[];
  isCompleted: boolean;
};

const RoadmapMilestone = ({ title, items, isCompleted }: RoadmapMilestoneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`bg-accent text-accent-foreground ${isCompleted ? 'border-secondary' : ''}`}>
        <CardHeader>
          <h2 className="text-xl font-semibold text-primary flex items-center">
            {title}
            {isCompleted && <CheckCircle className="ml-2 text-secondary" size={20} />}
          </h2>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="mr-2 mt-1 text-cta">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RoadmapMilestone;

