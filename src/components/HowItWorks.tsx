import { motion } from "framer-motion";
import { Search, ShoppingBag, MapPin } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse",
    description: "Explore thousands of Indian restaurants and cuisines near you",
    color: "from-primary to-accent",
  },
  {
    icon: ShoppingBag,
    title: "Order",
    description: "Select your favorites from biryani to dosa and place your order in seconds",
    color: "from-accent to-secondary",
  },
  {
    icon: MapPin,
    title: "Track",
    description: "Watch your order arrive in real-time with live GPS tracking",
    color: "from-secondary to-primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary font-extrabold">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your favorite food delivered in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-card shadow-card rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting Lines (desktop only) */}
        <div className="hidden md:block relative -mt-8">
          <svg className="w-full h-20" viewBox="0 0 1000 80" preserveAspectRatio="none">
            <motion.path
              d="M 0,40 Q 250,10 500,40 T 1000,40"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
