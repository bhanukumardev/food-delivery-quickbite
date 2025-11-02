import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Store } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { toast } from "sonner";

const PartnerModal = () => {
  const { isPartnerModalOpen, closePartnerModal } = useApp();
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application Submitted! 🎉", {
      description: "Our team will contact you within 24 hours",
      duration: 5000,
    });
    closePartnerModal();
    setFormData({
      restaurantName: "",
      ownerName: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={isPartnerModalOpen} onOpenChange={closePartnerModal}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">
                Restaurant Partner Application
              </DialogTitle>
            </div>
          </div>
          <DialogDescription>
            Join QuickBite and reach thousands of hungry customers
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Restaurant Name *</Label>
            <Input
              id="restaurantName"
              name="restaurantName"
              placeholder="Your restaurant's name"
              value={formData.restaurantName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ownerName">Owner Name *</Label>
            <Input
              id="ownerName"
              name="ownerName"
              placeholder="Your full name"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Restaurant Address *</Label>
            <Input
              id="address"
              name="address"
              placeholder="Street address, City, State, ZIP"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Tell us about your restaurant</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Cuisine type, specialty dishes, unique features..."
              rows={4}
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-sm">What you'll get:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Zero setup cost</li>
              <li>✓ Access to thousands of customers</li>
              <li>✓ Dedicated support team</li>
              <li>✓ Real-time analytics dashboard</li>
              <li>✓ Marketing and promotional support</li>
            </ul>
          </div>

          <Button type="submit" variant="hero" className="w-full" size="lg">
            Submit Application
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerModal;
