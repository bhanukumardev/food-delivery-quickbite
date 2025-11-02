import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Clock } from "lucide-react";

const restaurants = [
  {
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
  },
  {
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "30-35 min",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop",
  },
  {
    name: "Burger House",
    cuisine: "American",
    rating: 4.7,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
  },
  {
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&h=300&fit=crop",
  },
  {
    name: "Thai Spice",
    cuisine: "Thai",
    rating: 4.8,
    deliveryTime: "30-35 min",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&h=300&fit=crop",
  },
  {
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.9,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
  },
];

const RestaurantCarousel = () => {
  return (
    <section id="restaurants" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary font-extrabold">Restaurants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing local restaurants ready to deliver
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-card shadow-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold text-sm">{restaurant.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                  <p className="text-muted-foreground mb-4">{restaurant.cuisine}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {restaurant.deliveryTime}
                    </div>
                    <Button size="sm" variant="default">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            View All Restaurants
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantCarousel;
