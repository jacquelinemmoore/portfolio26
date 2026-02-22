import Image from 'next/image';
import ProfilePhoto from '../assets/profile.jpg';

export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-30 ">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="pl-8">
          <h1 className="text-4xl md:text-6xl mb-6 text-stone-900 tracking-tight font-weight-semi-bold">
            Jacqueline Moore
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-serif">
            Senior Technical Writer
          </p>
        </div>
        <div className="flex justify-center md:justify-end pr-8 pb-20">
          <div className='aspect-3/4 w-full max-w-sm relative'>
            <Image 
              src={ProfilePhoto.src}
              alt="Portrait" 
              fetchPriority='high'
              preload={true}
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}