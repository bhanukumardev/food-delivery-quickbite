import { motion } from "framer-motion";
import { Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Gift className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-8 h-8" />
            Special Offer
            <Sparkles className="w-8 h-8" />
          </h2>

          <p className="text-lg md:text-2xl mb-6 font-semibold">
            Get 50% OFF on your first order!
          </p>

          <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Use code <span className="font-bold bg-white text-primary px-3 py-1 rounded-lg">FIRST50</span> at checkout
          </p>

          <Button
            variant="outline"
            size="xl"
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all border-2 border-white font-bold shadow-2xl"
          >
            Claim Offer Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferBanner;
