import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

interface AppContextType {
  isLocationModalOpen: boolean;
  isSignInModalOpen: boolean;
  isOrderModalOpen: boolean;
  isPartnerModalOpen: boolean;
  isDriverModalOpen: boolean;
  selectedRestaurant: string | null;
  userLocation: string;
  openLocationModal: () => void;
  closeLocationModal: () => void;
  openSignInModal: () => void;
  closeSignInModal: () => void;
  openOrderModal: (restaurant?: string) => void;
  closeOrderModal: () => void;
  openPartnerModal: () => void;
  closePartnerModal: () => void;
  openDriverModal: () => void;
  closeDriverModal: () => void;
  setUserLocation: (location: string) => void;
  handleOrderNow: (restaurant?: string) => void;
  handleClaimOffer: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState("Select Location");

  const openLocationModal = () => setIsLocationModalOpen(true);
  const closeLocationModal = () => setIsLocationModalOpen(false);

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  const openOrderModal = (restaurant?: string) => {
    setSelectedRestaurant(restaurant || null);
    setIsOrderModalOpen(true);
  };
  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedRestaurant(null);
  };

  const openPartnerModal = () => setIsPartnerModalOpen(true);
  const closePartnerModal = () => setIsPartnerModalOpen(false);

  const openDriverModal = () => setIsDriverModalOpen(true);
  const closeDriverModal = () => setIsDriverModalOpen(false);

  const handleOrderNow = (restaurant?: string) => {
    if (userLocation === "Select Location") {
      toast.info("Please select your location first", {
        description: "We need to know where to deliver your food!",
      });
      openLocationModal();
    } else {
      openOrderModal(restaurant);
    }
  };

  const handleClaimOffer = () => {
    toast.success("Offer Code Copied! 🎉", {
      description: "Use code FIRST50 at checkout for 50% off",
      duration: 5000,
    });
    navigator.clipboard.writeText("FIRST50");
    handleOrderNow();
  };

  const value = {
    isLocationModalOpen,
    isSignInModalOpen,
    isOrderModalOpen,
    isPartnerModalOpen,
    isDriverModalOpen,
    selectedRestaurant,
    userLocation,
    openLocationModal,
    closeLocationModal,
    openSignInModal,
    closeSignInModal,
    openOrderModal,
    closeOrderModal,
    openPartnerModal,
    closePartnerModal,
    openDriverModal,
    closeDriverModal,
    setUserLocation,
    handleOrderNow,
    handleClaimOffer,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
