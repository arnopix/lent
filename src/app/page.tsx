import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Methodology } from "@/components/methodology";
import { Results } from "@/components/results";
import { Expertise } from "@/components/expertise";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Results />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
