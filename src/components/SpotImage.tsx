import Image from "next/image";

type SpotImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function SpotImage({ src, alt, className = "", priority }: SpotImageProps) {
  const local = src.startsWith("/images/");
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`object-cover ${className}`}
      priority={priority}
      unoptimized={local}
    />
  );
}
