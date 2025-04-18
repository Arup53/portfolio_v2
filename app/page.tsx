import AboutMe from "@/components/main/AboutMe";
import Contact from "@/components/main/Contact";
import Education from "@/components/main/Education";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
