import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import DeliverySpeed from "@/components/DeliverySpeed";
import AppFeatures from "@/components/AppFeatures";
import Testimonials from "@/components/Testimonials";
import LiveTracking from "@/components/LiveTracking";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <RestaurantCarousel />
      <DeliverySpeed />
      <AppFeatures />
      <Testimonials />
      <LiveTracking />
      <PartnerCTA />
      <Footer />
    </div>
  );
};

export default Index;
