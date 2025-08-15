import { Slider } from "@/registry/components/ui/slider";

export default function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />;
}
