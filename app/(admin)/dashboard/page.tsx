import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import Image from 'next/image'

const collections = [
  {
    collectionName: 'Animals',
    images: ['https:/fakeimg.pl/1024x900', 'https:/fakeimg.pl/1024x900']
  }
]

const Dashboard = () => {
  return (
    <div className='w-full p-5'>
      <h2 className='mb-10 text-4xl'>Collections</h2>
      <div>
        <button className='align-center mb-2 flex w-2/4 items-center justify-between rounded bg-slate-500 p-2 text-white'>
          Animals
          <FaArrowUp />
        </button>
        <ul className='mb-2 flex space-x-1'>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
        </ul>
        <button className='align-center mb-2 flex w-2/4 items-center justify-between rounded bg-slate-500 p-2 text-white'>
          Profiles
          <FaArrowUp />
        </button>
        <ul className='mb-2 flex space-x-1'>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
          <li>
            <Image
              src='https:/fakeimg.pl/300x300'
              width={150}
              height={150}
              alt='placeholder'
            />
            <button className='mt-1 w-14 bg-blue-700 p-1 text-white'>
              edit
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
