// import { ImgFormatContext } from "@/context/ImgFormatContext";
// import { getCloudinaryImgUrl } from "@/utils/cdnImage";
// import { useContext } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "react-image-gallery/styles/css/image-gallery.css";
import { StaticImageData } from "next/image";

interface ImgGalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  images: StaticImageData[];
}

export default function ImgGalleryModal({
  isOpen,
  onOpenChange,
  images,
}: ImgGalleryModalProps) {
  // const { supportingWebp } = useContext(ImgFormatContext);
  // const IMG_WIDTH = 800;
  // const IMG_HEIGHT = 500;
  // const THUMBNAIL_IMG_WIDTH = 200;
  // const THUMBNAIL_IMG_HEIGHT = 130;

  const items = images.map((src) => {
    // const { originalUrl, formattedUrl } = getCloudinaryImgUrl({
    //   width: IMG_WIDTH,
    //   height: IMG_HEIGHT,
    //   src: src.src,
    // });
    // const { originalUrl: thumbUrl, formattedUrl: thumbWebpUrl } =
    //   getCloudinaryImgUrl({
    //     width: THUMBNAIL_IMG_WIDTH,
    //     height: THUMBNAIL_IMG_HEIGHT,
    //     src: src.src,
    //   });

    return {
      original: src.src,
      thumbnail: src.src,
      // original: supportingWebp ? formattedUrl : originalUrl,
      // thumbnail: supportingWebp ? thumbWebpUrl : thumbUrl,
      // loading: "lazy",
      // thumbnailLoading: "lazy",
    } as ReactImageGalleryItem;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-auto p-4 bg-white">
        <DialogHeader>
          <DialogTitle>이미지 갤러리</DialogTitle>
        </DialogHeader>

        <div className="max-w-[400px]">
          <ImageGallery
            items={items}
            showPlayButton={false}
            showNav={true}
            thumbnailPosition="bottom"
            showThumbnails={true}
          />
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            닫기
          </Button>
          <Button onClick={() => onOpenChange(false)}>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
