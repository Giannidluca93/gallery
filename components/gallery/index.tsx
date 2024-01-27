import GalleryImage from '../gallery-image'
const dummyData = [
  {
    imageSrc: 'https:/fakeimg.pl/660x480',
    height: 660,
    width: 480,
    caption: 'Animals',
    alt: 'test'
  },
  {
    imageSrc: 'https:/fakeimg.pl/660x480',
    height: 660,
    width: 480,
    caption: 'Animals',
    alt: 'test'
  },
  {
    imageSrc: 'https:/fakeimg.pl/660x480',
    height: 660,
    width: 480,
    caption: 'Animals',
    alt: 'test'
  },
  {
    imageSrc: 'https:/fakeimg.pl/660x480',
    height: 660,
    width: 480,
    caption: 'Animals',
    alt: 'test'
  },
  {
    imageSrc: 'https:/fakeimg.pl/660x480',
    height: 660,
    width: 480,
    caption: 'Animals',
    alt: 'test'
  },
  {
    imageSrc: 'https:/fakeimg.pl/660x480',
    height: 660,
    width: 480,
    caption: 'Animals',
    alt: 'test'
  }
]

const Gallery = () => {
  return (
    <div className='grid grid-cols-1 gap-2 p-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-10 lg:grid-cols-4'>
      {dummyData.map(({ imageSrc, height, width, caption, alt }) => (
        <GalleryImage
          key={`${caption + Math.random()}`}
          imageSrc={imageSrc}
          height={height}
          width={width}
          caption={caption}
          alt={alt}
        />
      ))}
    </div>
  )
}

export default Gallery
