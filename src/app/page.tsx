import About from "@/components/about";
import Cta from "@/components/cta";
import FAQs from "@/components/faqs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { LampComponent } from "@/components/lamp";
import Navbar from "@/components/navbar";
import { Team } from "@/components/team";
import InfiniteMovingCards, {
  clients,
} from "@/components/ui/infinite-moving-cards";
import Working from "@/components/working";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md relative flex flex-col items-center antialiased overflow-hidden">
        <div
          className="absolute inset-0 w-full flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"
        >
          <div className="flex flex-col mt-[-80px] sm:mt-[-60px] md:mt-[-50px] max-w-[90%] lg:max-w-5xl">
            <Hero />
          </div>
        </div>
      </section>

      <InfiniteMovingCards items={clients} />
      <section>
        <About />
      </section>
      <section>
        <Working />
      </section>
      <section>
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 mt-[-250px]">
          <Team />
        </div>
      </section>
      <FAQs />
      <Cta />
      <Footer />
    </main>
  );
}
