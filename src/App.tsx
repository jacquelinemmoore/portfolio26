import { About } from './components/About';
import { Experience } from './components/Experience';
import { WritingSamples } from './components/WritingSamples';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <About />
      <Experience />
      <WritingSamples />
      <footer className="py-12 text-center text-stone-500 text-sm border-t border-stone-200">
        <p>© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
}