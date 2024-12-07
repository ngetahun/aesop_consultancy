import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
