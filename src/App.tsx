import { About } from './components/About';
import { Experience } from './components/Experience';
import { WritingSamples } from './components/WritingSamples';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <About />
      <hr/>
      <Experience />
      <hr/>
      <WritingSamples />
      <hr/>
      <footer className="py-12 text-center text-sm md:text-base">
        <p>© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
}
