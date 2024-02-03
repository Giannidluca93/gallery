import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  imageSrc: string
  height: number
  width: number
  alt: string
  caption: string
}

const GalleryImage: FC<Props> = ({ imageSrc, height, width, alt, caption }) => {
  return (
    <>
      <Link href={`/collections/${caption}`}>
        <figure className='relative m-auto max-w-[450px] cursor-pointer'>
          <Image
            src={imageSrc}
            height={height}
            width={width}
            alt='placeholder'
          />
          <figcaption className='absolute top-0 flex h-full w-full items-center justify-center bg-black/50 text-white'>
            {caption}
          </figcaption>
        </figure>
      </Link>
    </>
  )
}

export default GalleryImage
