import Image from 'next/image';
import { FC } from 'react';

interface Props {
  src: string;
  height: number;
  width: number;
  alt: string;
  caption: string;
}

const GalleryImage: FC<Props> = ({ src, height, width, alt, caption }) => {
  return (
    <figure className="relative">
      <Image src={src} height={height} width={width} alt="placeholder" />
      <figcaption className="absolute top-0 h-full w-full flex justify-center items-center text-white bg-black/50">
        {caption}
      </figcaption>
    </figure>
  );
};

export default GalleryImage;
