"use client";

import * as React from "react";

import {
  Progress,
  ProgressIndicator,
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
    <div className="w-full max-w-sm flex flex-col gap-4">
      <Progress value={progress} className="flex items-center gap-4">
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
        <ProgressValue />
      </Progress>

      <Progress value={progress} className="flex items-center gap-4">
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>

      <Progress value={progress} className="flex items-center gap-4">
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
        <ProgressValue>{(_, progress) => `$${progress}`}</ProgressValue>
      </Progress>
    </div>
  );
}
