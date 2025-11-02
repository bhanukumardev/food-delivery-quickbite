import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ritu Sharma",
    role: "Foodie, Mumbai",
    comment: "QuickBite delivers piping hot dosas right to my desk! Real-time tracking is superb.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Amit Kumar",
    role: "Software Engineer, Bangalore",
    comment: "30-minute biryani delivery is a lifesaver during lunch break! Never disappointed with QuickBite.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Singh",
    role: "College Student, Delhi",
    comment: "Love ordering chaat and pizzas for impromptu hostel parties. Food always arrives hot and fresh!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Rakesh Verma",
    role: "Family Man, Patna",
    comment: "Safe packaging makes ordering food for my kids worry-free. Perfect for family dinners!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary font-extrabold">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join lakhs of satisfied customers enjoying fast, reliable delivery across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card shadow-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card shadow-glow rounded-2xl px-8 py-6">
            <div className="flex items-center gap-3 justify-center mb-2">
              <span className="text-5xl font-bold text-primary">
                4.8
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-accent text-accent"
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">
              Based on <span className="font-semibold">2 Lakh+</span> reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
