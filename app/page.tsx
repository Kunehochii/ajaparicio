import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-violet-500/30 relative overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
