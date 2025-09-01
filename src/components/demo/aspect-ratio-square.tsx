import { AspectRatio } from "@/registry/components/ui/aspect-ratio";

export default function AspectRatioSquare() {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={1 / 1} className="rounded-lg">
        <img
          src="https://www.fffuel.co/images/dddepth-preview/dddepth-149.jpg"
          className="h-full w-full object-cover object-top-left rounded-lg"
        />
      </AspectRatio>
    </div>
  );
}
