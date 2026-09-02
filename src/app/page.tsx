import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { WritingSamples } from '../components/WritingSamples';
import { Navigation } from '../components/Navigation';

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <About />
      <hr/>
      <Experience />
      <hr/>
      <WritingSamples />
      <hr/>
      <footer className="py-12 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-stone-600 text-sm mb-4">Get in touch</p>
              <div className="flex gap-6 text-sm">
                <a 
                  href="mailto:jackymoore99@gmail.com"
                  className="text-stone-700 hover:text-stone-900 underline decoration-stone-400 hover:decoration-stone-900 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/jackymoore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-stone-900 underline decoration-stone-400 hover:decoration-stone-900 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <p className="text-stone-500 text-xs">
              © 2026 Jacqueline Moore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
