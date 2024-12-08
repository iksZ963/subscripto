"use client"

import { motion } from "framer-motion";

type TimelineProps = {
  children: React.ReactNode;
};

const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="relative">
      <motion.div
        className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5 }}
      />
      <div className="space-y-12 ml-12">{children}</div>
    </div>
  );
};

export default Timeline;

