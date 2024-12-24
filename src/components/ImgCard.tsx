import { Card, CardHeader, CardContent } from "@/components/ui/card";
import CloudinaryImage from "./CloudinaryImage";

export default function ImgCard({
  src,
  handleClick = () => {},
}: {
  src: string;
  handleClick?: (src: string) => void;
}) {
  return (
    <div onClick={() => handleClick(src)}>
      <Card className="py-4 max-w-[294px] hover:scale-105">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardContent className="overflow-hidden py-2 rounded-xl h-[185px]">
          <CloudinaryImage
            src={src}
            width={270}
            height={175}
            alt="Card background"
          />
        </CardContent>
      </Card>
    </div>
  );
}
