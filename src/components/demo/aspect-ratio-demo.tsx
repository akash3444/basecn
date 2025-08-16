import { AspectRatio } from "@/registry/components/ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="rounded-lg">
        <img
          src="https://www.fffuel.co/images/dddepth-preview/dddepth-034.jpg"
          className="h-full w-full object-cover object-top-left rounded-lg"
        />
      </AspectRatio>
    </div>
  );
}
