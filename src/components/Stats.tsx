import { motion } from "framer-motion";
import { TrendingUp, Users, Star, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "50k+", label: "Happy Customers", color: "text-primary" },
  { icon: Star, value: "4.8/5", label: "Average Rating", color: "text-accent" },
  { icon: TrendingUp, value: "500+", label: "Partner Restaurants", color: "text-secondary" },
  { icon: Clock, value: "30min", label: "Avg Delivery Time", color: "text-primary" },
];

const Stats = () => {
  return (
    <section className="py-8 md:py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 md:p-6 rounded-2xl bg-background shadow-card hover:shadow-glow transition-all cursor-pointer"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="inline-block mb-3"
                >
                  <Icon className={`w-10 h-10 md:w-12 md:h-12 ${stat.color}`} />
                </motion.div>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
