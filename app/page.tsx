import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Ecosystem } from "@/components/home/ecosystem";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Ecosystem />
      <Contact />
    </>
  );
}
