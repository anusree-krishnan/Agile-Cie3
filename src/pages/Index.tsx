
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ModelsSection from "@/components/ModelsSection";
import DatasetSection from "@/components/DatasetSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <ModelsSection />
      <DatasetSection />
      <Footer />
    </div>
  );
};

export default Index;
