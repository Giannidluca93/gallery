import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  imageSrc: string;
  height: number;
  width: number;
  alt: string;
  caption: string;
}

const GalleryImage: FC<Props> = ({ imageSrc, height, width, alt, caption }) => {
  return (
    <>
      <Link href={`/collections/${caption}`}>
        <figure className="relative cursor-pointer">
          <Image
            src={imageSrc}
            height={height}
            width={width}
            alt="placeholder"
          />
          <figcaption className="absolute top-0 h-full w-full flex justify-center items-center text-white bg-black/50">
            {caption}
          </figcaption>
        </figure>
      </Link>
    </>
  );
};

export default GalleryImage;
