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
          <p className="text-sm md:text-base text-center">
            © 2026 Jacqueline Moore. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
