import Image from 'next/image';
import ProfilePhoto from '../assets/profile.jpg';

export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-30">
      <div className="section-container w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-8">
        <div className="content-column max-w-lg">
          <h1 className="text-3xl md:text-5xl mb-3 leading-tight">
            Jacqueline Moore
          </h1>
          <p className="text-xl mb-8">
            Senior Technical Writer
          </p>
          <div className="text-sm md:text-base leading-relaxed mb-6 space-y-4">
            <p>
              I write developer documentation for Salesforce, focusing on engineering tools for AI-powered development. My background in biomedical engineering and English informs how I translate technical complexity into clear content.
            </p>
            <p>
              Outside of writing, you can find me riding bikes, rock climbing, or trotting a dog around the block near <a href="https://www.muttville.org/" target="_blank" rel="noopener noreferrer" className="link-underline">Muttville</a>, a senior dog rescue in San Francisco.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <a 
              href="https://www.linkedin.com/in/jackymoore"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              GitHub
            </a>
            <span>/</span>
            <a 
              href="mailto:jackymoore99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
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
