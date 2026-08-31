import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FeaturedProject from "./sections/FeaturedProject";
import Projects from "./sections/Projects";
import HowIBuild from "./sections/HowIBuild";
import Stack from "./sections/Stack";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <HowIBuild />
        <Stack />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
