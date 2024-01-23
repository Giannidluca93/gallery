import GalleryImage from "../gallery-image";

const dummyData = [
  {
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg",
    height: 300,
    width: 300,
    caption: "test",
    alt: "test",
  },
  {
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg",
    height: 300,
    width: 300,
    caption: "test",
    alt: "test",
  },
  {
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg",
    height: 300,
    width: 300,
    caption: "test",
    alt: "test",
  },
  {
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg",
    height: 300,
    width: 300,
    caption: "test",
    alt: "test",
  },
  {
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg",
    height: 300,
    width: 300,
    caption: "test",
    alt: "test",
  },
  {
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg",
    height: 300,
    width: 300,
    caption: "test",
    alt: "test",
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 p-5">
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
  );
};

export default Gallery;
