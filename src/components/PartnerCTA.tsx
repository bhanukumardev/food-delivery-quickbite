import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Store, Bike, ArrowRight } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const PartnerCTA = () => {
  const { openPartnerModal, openDriverModal } = useApp();

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Join The{" "}
            <span className="text-primary font-extrabold">
              QuickBite
            </span>{" "}
            Family
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join India's largest food delivery network
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Restaurant Partner Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-card shadow-card rounded-3xl p-8 h-full hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 gradient-hero opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Store className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Restaurant Partners
                </h3>

                <p className="text-muted-foreground mb-6">
                  Reach lakhs of hungry customers across India. Increase your revenue
                  with QuickBite's powerful platform.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Zero setup cost",
                    "Dedicated support team",
                    "Marketing exposure",
                    "Real-time analytics",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="default"
                  size="lg"
                  className="w-full group/btn"
                  onClick={openPartnerModal}
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Delivery Hero Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-card shadow-card rounded-3xl p-8 h-full hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 gradient-fresh opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl gradient-fresh flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bike className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">Be a QuickBite Rider</h3>

                <p className="text-muted-foreground mb-6">
                  Be a QuickBite Rider in your city. Work flexible hours and earn
                  competitive pay with perks.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Flexible schedule",
                    "Competitive earnings",
                    "Weekly payouts",
                    "Insurance coverage",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="default"
                  size="lg"
                  className="w-full group/btn"
                  onClick={openDriverModal}
                >
                  Join as Driver
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
