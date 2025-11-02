import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import DeliverySpeed from "@/components/DeliverySpeed";
import OfferBanner from "@/components/OfferBanner";
import AppFeatures from "@/components/AppFeatures";
import Testimonials from "@/components/Testimonials";
import LiveTracking from "@/components/LiveTracking";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="restaurants">
        <RestaurantCarousel />
      </div>
      <OfferBanner />
      <DeliverySpeed />
      <div id="features">
        <AppFeatures />
      </div>
      <Testimonials />
      <div id="tracking">
        <LiveTracking />
      </div>
      <PartnerCTA />
      <Footer />
    </div>
  );
};

export default Index;
