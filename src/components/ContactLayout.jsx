import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

const ContactLayout = () => {
  return (
    <div className="bg-white text-black">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h1 className="text-4xl font-bold mb-10">
              Visit Our Boutique
            </h1>

            <div className="space-y-10">

              <div className="flex gap-5">
                <MapPin size={32} />
                <div>
                  <h2 className="text-2xl font-semibold">Address</h2>
                  <p className="text-gray-600 mt-2">
                    123 Madison Avenue <br />
                    New York, NY 10016 <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone size={32} />
                <div>
                  <h2 className="text-2xl font-semibold">Phone</h2>
                  <p className="text-gray-600 mt-2">
                    +1 (212) 555-0123
                  </p>
                  <p className="text-gray-500">
                    Mon-Sat: 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail size={32} />
                <div>
                  <h2 className="text-2xl font-semibold">Email</h2>
                  <p className="text-gray-600 mt-2">
                    contact@luxejewelry.com
                  </p>
                  <p className="text-gray-600">
                    info@luxejewelry.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock size={32} />
                <div>
                  <h2 className="text-2xl font-semibold">
                    Business Hours
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Monday - Friday: 10:00 AM - 7:00 PM
                  </p>

                  <p className="text-gray-600">
                    Saturday: 10:00 AM - 6:00 PM
                  </p>

                  <p className="text-gray-600">
                    Sunday: 12:00 PM - 5:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Map */}
            <div className="mt-12 h-72 rounded-xl overflow-hidden">

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              ></iframe>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <h1 className="text-4xl font-bold mb-10">
              Send Us a Message
            </h1>

            <form className="space-y-6">

              <div>
                <label className="font-medium">
                  Name *
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border mt-2 p-4 rounded-md outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="font-medium">
                  Email *
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border mt-2 p-4 rounded-md outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="font-medium">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="+91 9876543210"
                  className="w-full border mt-2 p-4 rounded-md outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="font-medium">
                  Message *
                </label>

                <textarea
                  rows="6"
                  placeholder="How can we help you?"
                  className="w-full border mt-2 p-4 rounded-md outline-none focus:border-black"
                ></textarea>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition">
                Send Message
              </button>

            </form>

            <div className="mt-12">

              <h2 className="text-3xl font-semibold">
                Book a Private Consultation
              </h2>

              <p className="text-gray-600 mt-4">
                Schedule a one-on-one appointment
                with our jewellery experts to explore
                our collection or discuss a custom piece.
              </p>

              <button className="flex items-center gap-2 mt-6 font-medium hover:gap-4 transition-all">
                Schedule Appointment
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ContactLayout;