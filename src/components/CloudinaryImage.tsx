import { getCloudinaryImgUrl } from "@/utils/cdnImage";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export default function CloudinaryImage({ width, height, src, alt }: Props) {
  const originalUrl = getCloudinaryImgUrl({
    width,
    height,
    src,
  });

  return <LazyLoadImage src={originalUrl} alt={alt} />;
}
