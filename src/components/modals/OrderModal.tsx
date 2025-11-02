import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Star, Clock } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { toast } from "sonner";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Burger",
    description: "Juicy beef patty with fresh vegetables",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crispy romaine with parmesan and croutons",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
    rating: 4.6,
  },
  {
    id: "4",
    name: "Pasta Carbonara",
    description: "Creamy pasta with bacon and parmesan",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=200&fit=crop",
    rating: 4.7,
  },
];

const OrderModal = () => {
  const { isOrderModalOpen, closeOrderModal, selectedRestaurant, userLocation } = useApp();
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    toast.success("Added to cart! 🛒");
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((i) => i.id === itemId);
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const handleCheckout = () => {
    const totalItems = getTotalItems();
    if (totalItems === 0) {
      toast.error("Your cart is empty", {
        description: "Add some items before checkout",
      });
      return;
    }

    toast.success("Order Placed Successfully! 🎉", {
      description: `${totalItems} items • $${getTotalPrice().toFixed(2)} • Delivering to ${userLocation}`,
      duration: 5000,
    });
    setCart({});
    closeOrderModal();
  };

  return (
    <Dialog open={isOrderModalOpen} onOpenChange={closeOrderModal}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {selectedRestaurant || "Menu"}
          </DialogTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>4.8</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>25-30 min</span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Menu Items */}
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {item.rating}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                    {cart[item.id] ? (
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-semibold w-8 text-center">
                          {cart[item.id]}
                        </span>
                        <Button
                          size="sm"
                          variant="default"
                          className="h-8 w-8 p-0"
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => addToCart(item.id)}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cart Summary */}
          {getTotalItems() > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky bottom-0 bg-card border border-primary/20 rounded-lg p-4 shadow-glow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <span className="font-semibold">
                    {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"}
                  </span>
                </div>
                <span className="text-2xl font-bold text-primary">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
