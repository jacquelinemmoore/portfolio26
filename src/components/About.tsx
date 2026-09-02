import { Hero } from './Hero';

export function About() {
  return (
    <div id='about'>
      <Hero />
      <hr />
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl mb-8 text-stone-900 font-serif">About</h2>
      <div className="prose prose-stone">
        <p className="text-lg leading-relaxed text-stone-700">
          I write developer documentation for Salesforce, focusing on web components, APIs, and server-side rendering. My background in biomedical engineering and English from UC Davis informs how I translate technical complexity into clear content.
        </p>
        <p className="text-lg leading-relaxed text-stone-700 mt-6">
          Outside of writing, I cycle, rock climb, and read. I also like to cook.
        </p>
        <p className="text-lg leading-relaxed text-stone-700 mt-6">
          Contact me at{' '}
          <a 
            href="mailto:jackymoore99@gmail.com" 
            className="text-stone-700 hover:text-stone-900 underline decoration-stone-400 hover:decoration-stone-900 transition-colors"
          >
            jackymoore99@gmail.com
          </a>
          {' '}or connect with me on{' '}
          <a 
            href="https://www.linkedin.com/in/jackymoore" 
            className="text-stone-700 hover:text-stone-900 underline decoration-stone-400 hover:decoration-stone-900 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      </section>
    </div>
  );
}
