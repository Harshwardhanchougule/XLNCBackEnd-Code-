import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return ( <></>
    // <section className="py-20 bg-white">
    //   <div className="container mx-auto px-4">
    //     <div className="max-w-4xl mx-auto">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl font-bold text-gray-900 mb-4">
    //           Get in Touch with Us
    //         </h2>
    //         <p className="text-xl text-gray-600">
    //           We'd love to hear from you. Let us know how we can help.
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
    //         <Card>
    //           <CardContent className="p-6">
    //             <div className="flex flex-col items-center text-center">
    //               <div className="p-3 bg-primary/10 rounded-full mb-4">
    //                 <MapPin className="h-6 w-6 text-primary" />
    //               </div>
    //               <h3 className="font-semibold mb-2">Visit Us</h3>
    //               <p className="text-gray-600">
    //                 123 Business Avenue
    //                 <br />
    //                 Tech Park, Suite 200
    //                 <br />
    //                 Bangalore, India 560001
    //               </p>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card>
    //           <CardContent className="p-6">
    //             <div className="flex flex-col items-center text-center">
    //               <div className="p-3 bg-primary/10 rounded-full mb-4">
    //                 <Phone className="h-6 w-6 text-primary" />
    //               </div>
    //               <h3 className="font-semibold mb-2">Call Us</h3>
    //               <p className="text-gray-600">
    //                 Main: +91 (555) 123-4567
    //                 <br />
    //                 Support: +91 (555) 765-4321
    //                 <br />
    //                 Fax: +91 (555) 999-8888
    //               </p>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card>
    //           <CardContent className="p-6">
    //             <div className="flex flex-col items-center text-center">
    //               <div className="p-3 bg-primary/10 rounded-full mb-4">
    //                 <Clock className="h-6 w-6 text-primary" />
    //               </div>
    //               <h3 className="font-semibold mb-2">Business Hours</h3>
    //               <p className="text-gray-600">
    //                 Monday - Friday
    //                 <br />
    //                 9:00 AM - 6:00 PM IST
    //                 <br />
    //                 Weekend: Closed
    //               </p>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>

    //       <Card className="mb-16">
    //         <CardHeader>
    //           <CardTitle className="text-center">Send Us a Message</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <form className="space-y-6">
    //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //               <div>
    //                 <label className="block text-sm font-medium mb-2">
    //                   Full Name *
    //                 </label>
    //                 <Input placeholder="Your full name" required />
    //               </div>
    //               <div>
    //                 <label className="block text-sm font-medium mb-2">
    //                   Email Address *
    //                 </label>
    //                 <Input type="email" placeholder="your@email.com" required />
    //               </div>
    //             </div>
    //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //               <div>
    //                 <label className="block text-sm font-medium mb-2">
    //                   Phone Number
    //                 </label>
    //                 <Input type="tel" placeholder="+91 (XXX) XXX-XXXX" />
    //               </div>
    //               <div>
    //                 <label className="block text-sm font-medium mb-2">
    //                   Subject *
    //                 </label>
    //                 <Input placeholder="How can we help?" required />
    //               </div>
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium mb-2">
    //                 Your Message *
    //               </label>
    //               <Textarea
    //                 placeholder="Please describe your requirements in detail"
    //                 className="h-32"
    //                 required
    //               />
    //             </div>
    //             <div className="text-center">
    //               <Button type="submit" size="lg" className="px-8">
    //                 Send Message
    //               </Button>
    //             </div>
    //           </form>
    //         </CardContent>
    //       </Card>

    //       <div className="text-center">
    //         <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
    //         <div className="flex items-center justify-center gap-2 text-primary">
    //           <Mail className="h-5 w-5" />
    //           <a href="mailto:info@xlnctechnologies.com" className="hover:underline">
    //             info@xlnctechnologies.com
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;