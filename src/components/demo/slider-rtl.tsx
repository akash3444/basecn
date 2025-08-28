import { DirectionProvider } from "@base-ui-components/react/direction-provider";
import { Slider } from "@/registry/components/ui/slider";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/components/ui/progress";

export default function SliderRTL() {
  return (
    <div dir="rtl" className="w-full max-w-sm mx-auto space-y-10">
      <DirectionProvider direction="rtl">
        <Slider defaultValue={[50]} max={100} step={1} />
        <Progress value={50}>
          <div className="mb-2 flex items-center justify-between gap-2">
            <ProgressLabel>Progress</ProgressLabel>
            <ProgressValue />
          </div>
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
        </Progress>
      </DirectionProvider>
    </div>
  );
}
