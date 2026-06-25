import SpotImage from "@/components/SpotImage";
import type { QaImage } from "@/data/help/types";

type QaImageBlockProps = {
  image: QaImage;
  priority?: boolean;
};

export default function QaImageBlock({ image, priority }: QaImageBlockProps) {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-card-border bg-surface">
      <div className="relative aspect-video w-full">
        <SpotImage src={image.src} alt={image.alt} priority={priority} />
      </div>
      {image.caption && (
        <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
