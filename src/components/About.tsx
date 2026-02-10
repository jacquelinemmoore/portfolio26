import { Hero } from './Hero';

export function About() {
  return (
    <>
      <Hero />
      <section id="about" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl mb-8 text-stone-900 font-serif">About</h2>
      <div className="prose prose-stone">
        <p className="text-lg leading-relaxed text-stone-700">
          I write developer documentation for Salesforce, focusing on web components, APIs, and server-side rendering. My background in biomedical engineering and English from UC Davis informs how I translate technical complexity into clear content.
        </p>
        <p className="text-lg leading-relaxed text-stone-700 mt-6">
          I'm based in San Francisco. Outside of writing, I play tennis, rock climb, and read. I also volunteer at Muttville, a local rescue for senior dogs.
        </p>
      </div>
      </section>
    </>
  );
}