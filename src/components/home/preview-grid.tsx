"use client";

import React, { Suspense } from "react";
import { components } from "@/registry/__index__";

interface FloatingPreviewsProps {
  className?: string;
}

const previewComponents = [
  "button-demo",
  "avatar-demo",
  "checkbox-demo",
  "switch-demo",
  "tabs-demo",
  "input-demo",
  "radio-group-demo",
  "toggle-group-demo",
];

function ComponentCard({ componentKey }: { componentKey: string }) {
  const componentData = components[componentKey];

  if (!componentData) return null;

  const Component = componentData.component;

  return (
    <Suspense fallback={null}>
      <div className="relative group transform-none">
        <div className="relative bg-background/80 dark:bg-muted/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:bg-background/90 transition-all duration-300 shadow-lg">
          <Component />
        </div>
      </div>
    </Suspense>
  );
}

export default function FloatingPreviews({
  className = "",
}: FloatingPreviewsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Floating components positioned around hero */}
      <div className="relative h-full w-full">
        {previewComponents.map((componentKey, index) => {
          // Strategic positions around the hero content
          const positions = [
            { top: "20%", left: "8%", delay: "0s" },
            { top: "35%", right: "10%", delay: "0.5s" },
            { top: "60%", left: "5%", delay: "1s" },
            { top: "70%", right: "8%", delay: "1.5s" },
            { top: "65%", left: "55%", delay: "2s" },
            { top: "80%", left: "75%", delay: "2.5s" },
            { top: "80%", left: "40%", delay: "3s" },
            { top: "15%", right: "15%", delay: "3.5s" },
          ];

          const position = positions[index] || positions[0];

          return (
            <div
              key={componentKey}
              className="text-left absolute animate-float duration-300 pointer-events-auto transition-[translate,rotate]"
              style={{
                ...position,
                animationDelay: position.delay,
                animationDuration: `${6 + index * 0.5}s`,
              }}
            >
              <ComponentCard componentKey={componentKey} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
