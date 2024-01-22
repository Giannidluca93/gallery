import Image from "next/image";

const CollectionsPage = () => {
  return (
    <div className="min-h-screen text-center p-4">
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        ipsa cum, a illum rem nemo corrupti dolorem laboriosam
      </p>
      <div>
        <div className="flex flex-col items-center justify-between">
          <Image
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
            height={660}
            width={480}
            alt="placeholder"
            className="mb-3"
          />
          <Image
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
            height={660}
            width={480}
            alt="placeholder"
            className="mb-3"
          />
          <Image
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
            height={660}
            width={480}
            alt="placeholder"
            className="mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
