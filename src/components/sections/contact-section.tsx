import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or need more information? We're here to help. Contact us today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Our Office</h4>
                <p className="text-muted-foreground">123 Construction Ave, Buildtown, BT 45678</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Email Us</h4>
                <p className="text-muted-foreground hover:text-primary transition-colors"><a href="mailto:info@estateview.com">info@estateview.com</a></p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Call Us</h4>
                <p className="text-muted-foreground hover:text-primary transition-colors"><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
            </div>
             <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-medium text-foreground mb-2">Office Hours</h4>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-xl animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center md:text-left">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
