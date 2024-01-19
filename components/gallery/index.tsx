import GalleryImage from '../gallery-image';

const Gallery = () => {
  return (
    <div>
      <GalleryImage
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
        height={300}
        width={300}
        caption="animals"
        alt="placeholder"
      />
    </div>
  );
};

export default Gallery;
