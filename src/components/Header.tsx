import { motion } from "framer-motion";
import { Menu, X, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useApp } from "@/contexts/AppContext";
import logo from "@/assets/quickbite-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openLocationModal, openSignInModal, handleOrderNow, userLocation } = useApp();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logo} alt="QuickBite Logo" className="h-10 w-10 md:h-12 md:w-12" />
            <span className="text-xl md:text-2xl font-bold text-primary">
              QuickBite
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("restaurants")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Restaurants
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("tracking")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Tracking
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={openLocationModal}
            >
              <MapPin className="w-4 h-4" />
              {userLocation.length > 20 ? `${userLocation.substring(0, 20)}...` : userLocation}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={openSignInModal}
            >
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button
              variant="hero"
              size="default"
              onClick={() => handleOrderNow()}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 w-full h-full z-50 bg-background md:hidden"
          style={{ top: '64px' }}
        >
          <nav className="flex flex-col gap-4 p-6">
            <button
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
              onClick={() => scrollToSection("restaurants")}
            >
              Restaurants
            </button>
            <button
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </button>
            <button
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <button
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
              onClick={() => scrollToSection("tracking")}
            >
              Tracking
            </button>

            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 justify-start"
                onClick={() => {
                  setIsMenuOpen(false);
                  openLocationModal();
                }}
              >
                <MapPin className="w-4 h-4" />
                {userLocation}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 justify-start"
                onClick={() => {
                  setIsMenuOpen(false);
                  openSignInModal();
                }}
              >
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button
                variant="hero"
                size="default"
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleOrderNow();
                }}
              >
                Order Now
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
