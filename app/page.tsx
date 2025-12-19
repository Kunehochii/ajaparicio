import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200 selection:bg-cyan-500/30 relative">
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
