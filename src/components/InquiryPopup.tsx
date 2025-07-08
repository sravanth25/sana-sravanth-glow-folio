
import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface InquiryPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: string;
}

const InquiryPopup = ({ open, onOpenChange, service = 'Digital Marketing' }: InquiryPopupProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    service: service,
    budget: '',
    timeline: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Sent Successfully!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      onOpenChange(false);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        service: service,
        budget: '',
        timeline: '',
        details: ''
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-cyan-400">
            Send Inquiry
          </DialogTitle>
          <p className="text-gray-300">
            Let's discuss your {service.toLowerCase()} needs
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-300">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 focus:border-cyan-400"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 focus:border-cyan-400"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 focus:border-cyan-400"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-gray-300">Organization</Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 focus:border-cyan-400"
                placeholder="Company Name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-gray-300">Service Interest</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:border-cyan-400 focus:outline-none text-white"
            >
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="PPC Advertising">PPC Advertising</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Analytics & Reporting">Analytics & Reporting</option>
              <option value="Web Design">Web Design</option>
              <option value="Content Marketing">Content Marketing</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-gray-300">Budget Range</Label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="">Select Budget</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-gray-300">Timeline</Label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:border-cyan-400 focus:outline-none text-white"
              >
                <option value="">Select Timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="3+ months">3+ months</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details" className="text-gray-300">Project Details</Label>
            <Textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              rows={4}
              className="bg-gray-800 border-gray-700 focus:border-cyan-400"
              placeholder="Tell me more about your project, goals, and any specific requirements..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </div>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryPopup;
