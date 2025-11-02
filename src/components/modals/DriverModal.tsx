import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bike } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { toast } from "sonner";

const DriverModal = () => {
  const { isDriverModalOpen, closeDriverModal } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: "",
    licenseNumber: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application Submitted! 🎉", {
      description: "We'll review your application and get back to you soon",
      duration: 5000,
    });
    closeDriverModal();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      vehicleType: "",
      licenseNumber: "",
      experience: "",
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
    <Dialog open={isDriverModalOpen} onOpenChange={closeDriverModal}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl gradient-fresh flex items-center justify-center">
              <Bike className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">
                Delivery Hero Application
              </DialogTitle>
            </div>
          </div>
          <DialogDescription>
            Join our team and earn on your flexible schedule
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
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
            <Label htmlFor="vehicleType">Vehicle Type *</Label>
            <Select
              value={formData.vehicleType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, vehicleType: value }))
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bicycle">Bicycle</SelectItem>
                <SelectItem value="scooter">Scooter/Moped</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="car">Car</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseNumber">Driver's License Number *</Label>
            <Input
              id="licenseNumber"
              name="licenseNumber"
              placeholder="Your license number"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Previous Delivery Experience</Label>
            <Textarea
              id="experience"
              name="experience"
              placeholder="Tell us about your delivery or driving experience..."
              rows={3}
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-sm">Benefits:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Flexible schedule - work when you want</li>
              <li>✓ Competitive earnings with tips</li>
              <li>✓ Weekly payouts</li>
              <li>✓ Insurance coverage while delivering</li>
              <li>✓ Performance bonuses</li>
            </ul>
          </div>

          <Button type="submit" variant="hero" className="w-full" size="lg">
            Submit Application
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            You must be 18+ with a valid driver's license to apply
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DriverModal;
