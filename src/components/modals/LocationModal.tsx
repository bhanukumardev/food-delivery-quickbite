import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, Search } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { toast } from "sonner";

const popularLocations = [
  "Connaught Place, Delhi",
  "Koramangala, Bangalore",
  "Bandra West, Mumbai",
  "Salt Lake, Kolkata",
  "Hitech City, Hyderabad",
  "Anna Nagar, Chennai",
  "Civil Lines, Jaipur",
  "Gomti Nagar, Lucknow",
];

const LocationModal = () => {
  const { isLocationModalOpen, closeLocationModal, setUserLocation } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);

  const handleSelectLocation = (location: string) => {
    setUserLocation(location);
    toast.success("Location Updated! 📍", {
      description: `Now delivering to ${location}`,
    });
    closeLocationModal();
  };

  const handleDetectLocation = async () => {
    setIsDetecting(true);
    
    // Simulate geolocation detection
    setTimeout(() => {
      const detectedLocation = "Current Location (Auto-detected)";
      setUserLocation(detectedLocation);
      toast.success("Location Detected! 🎯", {
        description: "Using your current location",
      });
      setIsDetecting(false);
      closeLocationModal();
    }, 1500);
  };

  const filteredLocations = popularLocations.filter((location) =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isLocationModalOpen} onOpenChange={closeLocationModal}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Select Your Location</DialogTitle>
          <DialogDescription>
            Choose your delivery location to see nearby restaurants
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Detect Location Button */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-14"
            onClick={handleDetectLocation}
            disabled={isDetecting}
          >
            <Navigation className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-semibold">
                {isDetecting ? "Detecting..." : "Use Current Location"}
              </div>
              <div className="text-xs text-muted-foreground">
                Get precise location automatically
              </div>
            </div>
          </Button>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for your area..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-muted-foreground">
              POPULAR AREAS
            </h4>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              <AnimatePresence>
                {filteredLocations.map((location, index) => (
                  <motion.button
                    key={location}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSelectLocation(location)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{location}</span>
                  </motion.button>
                ))}
              </AnimatePresence>
              {filteredLocations.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No locations found. Try a different search term.
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationModal;
