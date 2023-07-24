import Image from 'next/image';
import { Satisfy, Truculenta } from 'next/font/google';
const topfont = Satisfy({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})
const subfont = Truculenta({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {


  return (
    <main className='border-y-8 border-yellow-500 h-full'>
      <section className='flex flex-col my-10 lg:my-20 mx-5 md:mx-24'>
        <div className={`text-5xl md:text-6xl lg:text-9xl ${topfont.className} flex flex-row gap-4 md:gap-10 text-amber-950 justify-center`}>
          Melted
          <div className='relative w-[50px] md:w-[70px] lg:w-[150px]'>
            <Image alt='main logo deco' src={'/deco/meltedbutter.png'} priority fill />
          </div>
          Butter
        </div>
        <section className={`${subfont.className} h-[150px] px-2 lg:px-10 p-4 text-yellow-50 bg-yellow-500 my-5 flex flex-col`}>
          <h1 className='text-center text-md md:text-2xl lg:text-4xl'>Step into a world of pure delight and indulge your senses.
            I take pride in sourcing only the finest, freshest ingredients, ensuring that my creations are of the highest quality
          </h1>

         

        </section>
        <nav className='flex flex-row text-xl md:text-4xl lg:text-7xl gap-10 justify-center bg-yellow-600 text-yellow-50 py-5'>
            <a href='' className='border-b-2 border-dashed hover:scale-110 transform transition duration-500'>Cakes</a>
            <a href='' className='border-b-2 border-dashed hover:scale-110 transform transition duration-500'>Cupcakes</a>
            <a href='' className='border-b-2 border-dashed hover:scale-110 transform transition duration-500'>Pastries</a>
            <a href='' className='border-b-2 border-dashed hover:scale-110 transform transition duration-500'>Pies</a>
          </nav>
        <section className='flex flex-row justify-between my-16'>
          <div className='p-4 bg-yellow-500 font-bold text-yellow-50 text-xl w-[300px] '>
            <p className='border-b-2 border-dashed'>View Full Menu</p>
          </div>
          <div className='text-xl text-end flex flex-col'>
            <p>2999 N. Broadway ave, Englemall, NY 69690</p>
            <a>212-989-1099</a>
            <a>meltedbutter@bakery.com</a>
          </div>
        </section>
        <section>
          SOME TEXT
        </section>
        <section className='flex flex-row justify-between my-32'>
          <div className='lg:w-[350px] lg:h-[350px] relative'>
            <Image alt='featured pic 1' fill src={'/images/bluehalfcake.png'}/>
          </div>
          <div>
            DECO
          </div>
          <div className='lg:w-[350px] lg:h-[350px] relative'>
            <Image alt='featured pic 1' fill src={'/images/blueberry2.png'}/>
          </div>
        </section>
      </section>
    </main>
  )
}
