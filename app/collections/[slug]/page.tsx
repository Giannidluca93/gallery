import Image from 'next/image'

const CollectionsPage = () => {
  return (
    <div className='m-auto min-h-screen max-w-5xl px-5 text-center'>
      <p className='my-20  text-2xl sm:text-3xl md:text-4xl'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        ipsa cum, a illum rem nemo corrupti dolorem laboriosam
      </p>
      <div>
        <div className='flex flex-col items-center   justify-between'>
          <Image
            src='https:/fakeimg.pl/1024x900'
            height={1024}
            width={900}
            alt='placeholder'
            className='mb-3'
          />
          <Image
            src='https:/fakeimg.pl/1024x900'
            height={1024}
            width={900}
            alt='placeholder'
            className='mb-3'
          />
          <Image
            src='https:/fakeimg.pl/1024x900'
            height={1024}
            width={900}
            alt='placeholder'
            className='mb-3'
          />
        </div>
      </div>
    </div>
  )
}

export default CollectionsPage
