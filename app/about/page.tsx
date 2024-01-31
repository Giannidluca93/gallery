import Image from 'next/image'

const About = () => {
  return (
    <div className='flex max-w-5xl flex-col p-4'>
      <h3 className='mb-4 text-2xl sm:mt-10 sm:text-4xl md:mt-20'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at,
        officia pariatur dolorum alias ex quisquam odit blanditiis amet deleniti
        suscipit ipsum! Placeat voluptates a minima tempora nobis, in maiores!
      </h3>
      <div className='sm:space-between mb-0 sm:mt-10 sm:flex sm:space-x-2'>
        <Image
          src='https:/fakeimg.pl/600x350'
          height={600}
          width={350}
          alt='placeholder'
          className='mb-3'
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error
          accusamus consectetur ducimus nihil quibusdam! Similique modi
          eligendi, non accusantium temporibus, cum necessitatibus corporis
          assumenda aperiam aspernatur magnam veritatis provident.
          <p className='mt-3'>
            contact: <span className='font-bold'>test@mail.com</span>
          </p>
        </p>
      </div>
    </div>
  )
}

export default About
