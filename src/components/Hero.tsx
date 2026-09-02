import Image from 'next/image';
import ProfilePhoto from '../assets/profile.jpg';

export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-30">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-8">
        <div className="pl-8 max-w-lg">
          <h1 className="text-3xl md:text-5xl mb-3 text-stone-900 leading-tight">
            Jacqueline Moore
          </h1>
          <p className="text-[14px] md:text-base text-stone-600 mb-8 leading-normal">
            Senior Technical Writer
          </p>
          <div className="text-sm md:text-base text-stone-700 leading-relaxed mb-6 space-y-4">
            <p>
              I write developer documentation for Salesforce, focusing on engineering tools for AI-powered development. My background in biomedical engineering and English informs how I translate technical complexity into clear content.
            </p>
            <p>
              Outside of writing, you can find me riding bikes, rock climbing, or trotting a dog around the block near <a href="https://www.muttville.org/" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors">Muttville</a>, a senior dog rescue in San Francisco.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[14px] md:text-base">
            <a 
              href="https://www.linkedin.com/in/jackymoore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-stone-400">/</span>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              GitHub
            </a>
            <span className="text-stone-400">/</span>
            <a 
              href="mailto:jackymoore99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end pr-8 pb-20">
          <div className="aspect-3/4 w-full max-w-sm relative">
            <Image 
              src={ProfilePhoto.src}
              alt="Jacqueline Moore, Senior Technical Writer" 
              fetchPriority="high"
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
