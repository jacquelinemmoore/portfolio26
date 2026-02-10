import { About } from './components/About';
import { Experience } from './components/Experience';
import { WritingSamples } from './components/WritingSamples';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <About />
      <hr className="border-stone-200 max-w-3xl mx-auto"/>
      <Experience />
      <hr className="border-stone-200 max-w-3xl mx-auto"/>
      <WritingSamples />
      <hr className="border-stone-200 max-w-3xl mx-auto"/>
      <footer className="py-12 text-center text-stone-500 text-sm">
        <p>© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
}