
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'SEO Optimization',
  'Digital Marketing Strategy',
  'Meta & Google Ads',
  'Website Design Using AI',
  'UI/UX Design',
  'Custom Solutions & Integrations',
  'Other'
];

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    const subject = `New Inquiry: ${data.service}`;
    const body = `
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
${data.message ? `Message: ${data.message}` : ''}
    `.trim();

    const mailtoLink = `mailto:sanasravanth25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Inquiry Sent!",
      description: "Your email client should open with your inquiry details.",
    });

    form.reset();
  };

  return (
    <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to grow your brand?</h3>
        <p className="text-gray-300">Let's discuss how we can take your digital presence to the next level.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your phone number"
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Service Needed</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white focus:border-cyan-400">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {services.map((service) => (
                      <SelectItem key={service} value={service} className="text-white hover:bg-gray-700">
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Additional Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your project..."
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <Mail className="mr-2" size={20} />
            Send Inquiry
          </Button>
        </form>
      </Form>

      <p className="text-gray-400 mt-4 text-sm text-center">
        Email: <span className="text-cyan-400">sanasravanth25@gmail.com</span>
      </p>
    </div>
  );
};

export default ContactForm;
