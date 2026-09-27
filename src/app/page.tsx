import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Tours from "@/components/Tours";
import Speciality from "@/components/Speciality";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Tours />
      <Speciality />
      <Footer />
    </main>
  );
}
