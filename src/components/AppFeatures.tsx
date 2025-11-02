import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup.png";
import { Smartphone, Bell, Heart, CreditCard } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Easy Ordering",
    description: "Browse menus and order with just a few taps",
  },
  {
    icon: Bell,
    title: "Live Updates",
    description: "Get notified at every step of your delivery",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description: "Quickly reorder from your favorite restaurants",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with bank-level security",
  },
];

const AppFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Order From <span className="text-primary font-extrabold">Anywhere</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download the QuickBite app for the ultimate food delivery experience
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341c-.538.825-.796 1.193-1.486 1.923-.956.954-2.3 2.143-3.964 2.155-1.477.01-1.903-.945-3.86-.935-1.958.01-2.413.948-3.888.937-1.665-.012-2.944-1.07-3.901-2.024C-1.281 15.693-1.49 11.25.938 8.77c1.474-1.5 3.472-2.08 5.185-2.08 1.932 0 3.146.947 4.742.947 1.548 0 2.488-.949 4.715-.949 1.683 0 3.462.52 4.73 1.88-4.156 2.288-3.482 8.248.767 10.23-.537 1.364-1.242 2.714-2.554 4.543z M11.725 5.513C12.593 4.455 13.24 2.96 12.975 1.5c-1.372.12-2.96.95-3.902 2.058-.874 1.027-1.598 2.515-1.313 3.964 1.464.004 2.996-.83 3.965-2.01z"/>
                </svg>
                App Store
              </button>
              <button className="bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                Google Play
              </button>
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.img
              src={appMockup}
              alt="QuickBite App"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Feature Badges */}
            <motion.div
              className="absolute top-10 -left-5 bg-card shadow-glow px-4 py-2 rounded-full font-semibold text-sm"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              📍 Live Tracking
            </motion.div>

            <motion.div
              className="absolute bottom-20 -right-5 bg-card shadow-glow px-4 py-2 rounded-full font-semibold text-sm"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              ⚡ Fast Delivery
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
