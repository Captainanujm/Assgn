import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const GetLeftSection = () => {
  return (
    <div className="w-full max-w-[504px]">
      <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
      <p className="text-gray-500 mb-8">
        Facillisis commodo mattis neque nulla ultrices mattis sed. Ullamcorper tempus mattis ac tristique gravida ornare faucibus suspendisse.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-m font-medium text-gray-700 mb-1">Your Name</label>
          <Input placeholder="Your Name" className="bg-[#f5f5fc]" />
        </div>
        <div>
          <label className="block text-m font-medium text-gray-700 mb-1">Your Email</label>
          <Input type="email" placeholder="Email" className="bg-[#f5f5fc]" />
        </div>
        <div>
          <label className="block text-m font-medium text-gray-700 mb-1">Your Message</label>
          <Textarea placeholder="Write your message here..." className="bg-[#f5f5fc] min-h-[120px]" />
        </div>
        <Button className="bg-gradient-to-r from-[#630C92] to-[#360750] text-white hover:opacity-90">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default GetLeftSection;
