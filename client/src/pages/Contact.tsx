import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground">Start Your Project</h1>
          </motion.div>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-3xl mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are available for consultations by appointment. Reach out to us via phone or email, or fill out the form to discuss your vision.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Phone</h4>
                    <p className="text-muted-foreground text-lg hover:text-primary transition-colors cursor-pointer">+91 93636 04440</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Email</h4>
                    <p className="text-muted-foreground text-lg hover:text-primary transition-colors cursor-pointer">srisaiinteriors369@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Location</h4>
                    <p className="text-muted-foreground text-lg">
                      123 Main Street, Design District,<br />
                      Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Hours</h4>
                    <p className="text-muted-foreground text-lg">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white p-8 md:p-12 border border-border shadow-lg">
              <h3 className="font-display text-2xl mb-8">Send us a Message</h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <div className="h-[400px] w-full bg-muted grayscale">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167537367!2d80.06892425049968!3d13.047487841775878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709405436665!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}
