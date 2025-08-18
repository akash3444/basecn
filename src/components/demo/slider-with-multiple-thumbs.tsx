import { Slider } from "@/registry/components/ui/slider";

export default function SliderWithMultipleThumbs() {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <Slider defaultValue={[30, 70]} max={100} step={1} className="max-w-sm" />
      <Slider
        defaultValue={[30, 50, 70]}
        max={100}
        step={1}
        className="max-w-sm"
      />
      <Slider
        defaultValue={[20, 40, 60, 80]}
        max={100}
        step={1}
        className="max-w-sm"
      />
    </div>
  );
}
