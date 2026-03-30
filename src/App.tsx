import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/ui/ScrollProgress"
import { MagicBackground } from "@/components/ui/MagicBackground"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { Certifications } from "@/components/sections/Certifications"
import { Projects } from "@/components/sections/Projects"
import { OpenSource } from "@/components/sections/OpenSource"
import { Contact } from "@/components/sections/Contact"

function App() {
  return (
    <>
      <ScrollProgress />
      <MagicBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
