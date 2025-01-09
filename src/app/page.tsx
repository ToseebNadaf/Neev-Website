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
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
          <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
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
