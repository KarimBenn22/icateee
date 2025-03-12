import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import HeaderSection from "@/app/components/sections/Header";
import Commitee from "../components/sections/Commitee";
import Chairs from "../components/sections/Chairs";
import CarouselPlayground from "../components/sections/HeaderCarousel";

export default function Playground() {
  return (
    <main className="flex flex-col items-center">
      <Nav />
      <div className="">
        <CarouselPlayground></CarouselPlayground>
      </div>
      <Footer />
    </main>
  );
}
