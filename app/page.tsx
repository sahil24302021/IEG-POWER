import Hero from "@/components/Hero"
import About from "@/components/About"
import Founder from "@/components/Founder"
import Team from "@/components/Team" // <--- Added Team Section
import Problem from "@/components/Problem"
import Breakthrough from "@/components/Breakthrough"
import Technology from "@/components/Technology" // Assuming this is your "How It Works" logic
import Products from "@/components/Products"
import Comparison from "@/components/Comparison"
import Proof from "@/components/Proof"
import Roadmap from "@/components/Roadmap"
import Investor from "@/components/Investor"

export default function Home() {
  return (
    <main className="bg-[#050d0a] min-h-screen text-white selection:bg-[#2FE89B] selection:text-[#050d0a] overflow-x-hidden">
      
      {/* 1. The Hook */}
      <Hero />
      
      {/* 2. The Context */}
      <About />
      
      {/* 3. The People (Trust Signal) */}
      <div className="relative z-10">
        <Founder />
        <Team /> {/* <--- Now connected! */}
      </div>

      {/* 4. The Problem & Solution */}
      <Problem />
      <Breakthrough />
      
      {/* 5. The Deep Tech Validation */}
      <Technology /> 
      
      {/* 6. Market Application */}
      <Products />
      
      {/* 7. Economic Logic */}
      <Comparison />
      
      {/* 8. Proof & Future */}
      <Proof />
      <Roadmap />
      
      {/* 9. The Ask */}
      <Investor />
      
    </main>
  )
}