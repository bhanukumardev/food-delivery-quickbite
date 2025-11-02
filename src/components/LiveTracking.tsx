import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Package, CheckCircle2 } from "lucide-react";
import mapIllustration from "@/assets/map-illustration.png";

const trackingSteps = [
  { icon: Package, label: "Order Confirmed", status: "completed" },
  { icon: Navigation, label: "Being Prepared", status: "completed" },
  { icon: MapPin, label: "Out for Delivery", status: "active" },
  { icon: CheckCircle2, label: "Delivered", status: "pending" },
];

const LiveTracking = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Map Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-card shadow-card rounded-3xl p-8">
              <img
                src={mapIllustration}
                alt="Live Order Tracking"
                className="w-full rounded-2xl"
              />

              {/* Animated Delivery Marker */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center shadow-glow">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* ETA Badge */}
              <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-card shadow-glow px-6 py-3 rounded-full"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    12 mins
                  </div>
                  <div className="text-sm text-muted-foreground">Estimated</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Track Every{" "}
              <span className="text-primary font-extrabold">
                Step
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Watch your order journey from restaurant to your doorstep with
              real-time GPS tracking
            </p>

            {/* Tracking Steps */}
            <div className="space-y-4 mb-8">
              {trackingSteps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = step.status === "completed";
                const isActive = step.status === "active";

                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isCompleted
                          ? "bg-secondary text-white"
                          : isActive
                          ? "gradient-hero text-white animate-pulse-slow"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-semibold ${
                          isActive ? "text-primary" : ""
                        }`}
                      >
                        {step.label}
                      </div>
                      {isActive && (
                        <div className="text-sm text-muted-foreground">
                          Your order is on the way!
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button variant="hero" size="lg">
              Try Live Demo
            </Button>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            "Real-time GPS tracking",
            "Driver contact info",
            "Estimated arrival time",
          ].map((feature, index) => (
            <div
              key={feature}
              className="bg-card shadow-card rounded-xl p-4 text-center"
            >
              <p className="font-semibold">✓ {feature}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTracking;
