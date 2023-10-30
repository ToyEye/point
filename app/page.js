import HomeHero from "@/components/HomeComponents/HomeHero";
import About from "@/components/HomeComponents/About";
import Gallery from "@/components/HomeComponents/Gallery/Gallery";
import Cards from "@/components/HomeComponents/Cards";

export default function Home() {
  return (
    <>
      <HomeHero />
      <About />
      <Gallery />
      <Cards />
    </>
  );
}
