import Image from 'next/image'

const GalleryImageEdit = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <input className='border p-2' type='text' placeholder='Edit caption' />
      <label className='py-2' htmlFor='image'>
        Edit image
      </label>
      <Image
        src='https:/fakeimg.pl/150x150'
        height={150}
        width={150}
        alt='placeholder'
      />
      <input id='image' type='file' />
      <button className='bg-cyan-500'>Edit</button>
    </div>
  )
}

export default GalleryImageEdit
