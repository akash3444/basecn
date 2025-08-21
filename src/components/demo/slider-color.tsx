import { Slider } from "@/registry/components/ui/slider";

export default function SliderSize() {
  return (
    <div className="flex flex-col gap-8 w-full items-center max-w-sm">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="[&_[data-slot='slider-range']]:bg-blue-500 [&_[data-slot='slider-thumb']]:border-blue-500"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="[&_[data-slot='slider-range']]:bg-green-500 [&_[data-slot='slider-thumb']]:border-green-500"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="[&_[data-slot='slider-range']]:bg-red-500 [&_[data-slot='slider-thumb']]:border-red-500"
      />
    </div>
  );
}
