
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import HireMeSection from "@/components/HireMeSection";
import MyWorksSection from "@/components/MyWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HomeSection />
      <HireMeSection />
      <MyWorksSection />
    </div>
  );
};

export default Index;
