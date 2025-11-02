import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";
import deliveryBike from "@/assets/delivery-bike.png";
import foodItems from "@/assets/food-items.png";
import FoodParticles from "./FoodParticles";

const Hero = () => {
  const { handleOrderNow } = useApp();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden overflow-x-hidden bg-gradient-to-br from-background via-accent/10 to-primary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Food Particles */}
      <FoodParticles />

  {/* Hero Content */}
  <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 h-full flex items-center pt-16 md:pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                🚀 Fast & Fresh Delivery
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                QuickBite
              </span>
              <br />
              Delivered Fast
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0"
            >
              Experience the joy of lightning-fast food delivery across India. Your favorite
              desi meals, delivered hot and fresh in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleOrderNow()}
              >
                Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("how-it-works")}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <motion.img
              src={deliveryBike}
              alt="Delivery Bike"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={foodItems}
              alt="Delicious Food"
              className="absolute -bottom-10 -left-10 w-64 md:w-80 drop-shadow-xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
