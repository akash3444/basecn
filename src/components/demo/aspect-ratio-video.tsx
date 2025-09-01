import { AspectRatio } from "@/registry/components/ui/aspect-ratio";

export default function AspectRatioVideo() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="rounded-lg shadow-md">
        <video
          src="https://www.pexels.com/download/video/3571264/"
          className="h-full w-full object-cover object-top-left rounded-lg"
          autoPlay
          controls
          muted
          loop
        />
      </AspectRatio>
    </div>
  );
}
