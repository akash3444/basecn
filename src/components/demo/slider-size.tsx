import { Slider } from "@/registry/components/ui/slider";

export default function SliderSize() {
  return (
    <div className="flex flex-col gap-12 w-full items-center max-w-sm">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="[&_[data-slot='slider-track'][data-orientation=horizontal]]:h-2  [&_[data-slot='slider-thumb']]:size-5"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="[&_[data-slot='slider-track'][data-orientation=horizontal]]:h-2.5 [&_[data-slot='slider-thumb']]:size-6"
      />
    </div>
  );
}
