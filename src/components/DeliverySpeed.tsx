import { motion } from "framer-motion";
import { Zap, Shield, Clock, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "30-minute delivery promise or your money back",
    stat: "30 min",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Tamper-proof packaging and contactless delivery",
    stat: "100%",
  },
  {
    icon: Clock,
    title: "On Time",
    description: "98% on-time delivery rate with real-time tracking",
    stat: "98%",
  },
  {
    icon: CheckCircle2,
    title: "Quality Check",
    description: "Every order inspected before leaving the restaurant",
    stat: "✓",
  },
];

const DeliverySpeed = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Speed Meets <span className="text-secondary font-extrabold">Safety</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just deliver fast—we deliver with care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-card shadow-card rounded-2xl p-8 h-full text-center hover:shadow-glow transition-all duration-300">
                  {/* Icon with animated background */}
                  <motion.div
                    className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mb-6 mx-auto relative overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Stat */}
                  <motion.div
                    className="text-4xl font-bold mb-3 text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {feature.stat}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Promise Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-full">
            <div className="bg-card px-8 py-4 rounded-full">
              <p className="text-lg font-semibold">
                🏆 Our <span className="text-primary font-bold">30-Minute Promise</span> Guarantee
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySpeed;
