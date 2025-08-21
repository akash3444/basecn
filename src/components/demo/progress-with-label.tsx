"use client";

import * as React from "react";

import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/components/ui/progress";

export default function ProgressWithValue() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-sm flex flex-col gap-6">
      <Progress value={progress}>
        <ProgressLabel>Progress with label</ProgressLabel>
        <ProgressTrack className="mt-2">
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>

      <Progress value={progress} className="flex items-center gap-4">
        <ProgressLabel>Progress</ProgressLabel>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>

      <Progress value={progress} className="mt-16">
        <div className="flex items-center justify-between gap-2">
          <ProgressLabel>Progress with label and value</ProgressLabel>
          <ProgressValue />
        </div>
        <ProgressTrack className="mt-2">
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>

      <Progress value={progress}>
        <ProgressLabel>Progress with label and value</ProgressLabel>
        <div className="flex items-center gap-4">
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
          <ProgressValue />
        </div>
      </Progress>
    </div>
  );
}
