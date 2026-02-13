import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5d3326] text-white pt-16 pb-12 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Column 1: Company Description (Span 4 for more space) */}
          <div className="md:col-span-4 lg:pr-12">
            {/* Logo area replaced with empty space to maintain height and alignment (Logo size was 44px + mb-6) */}
            <div className="h-[44px] mb-6"></div>
            <p className="text-[15px] leading-relaxed font-medium">
              <span className="font-bold">SAI POORNA</span> is a machinery export company that
              exports heavy machinery across the globe with
              diverse categories like agricultural, mining,
              construction, energy, and logistics industries.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="md:col-span-2">
            <h4 className="text-[18px] font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col space-y-4 text-[15px]">
              <li>
                <Link to="/home" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-[18px] font-bold mb-6">Our Services</h4>
            <ul className="flex flex-col space-y-4 text-[15px]">
              <li>
                <Link to="/services" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Heavy Machinery Export
                </Link>
              </li>
              <li>
                <Link to="/services" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Machinery Sourcing
                </Link>
              </li>
              <li>
                <Link to="/services" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Inspection & Quality Check
                </Link>
              </li>
              <li>
                <Link to="/services" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Packaging & Logistics
                </Link>
              </li>
              <li>
                <Link to="/services" className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-[18px] font-bold mb-6">Contact Info</h4>
            <ul className="flex flex-col space-y-5 text-[15px] font-medium">
              <li className="flex items-start">
                <span>Office Address: 68-1-99, Mulagada, Mindi post, Visakhapatnam 530012</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span>Phone : +91 9440310266</span>
                <span className="ml-[62px]">+91 6305197326</span>
              </li>
              <li className="flex items-center">
                <span>Email : saipoornatrading@gmail.com</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span>IEC: CKVPC7917H (Importer-Exporter Code)</span>
              </li>
              <li className="flex items-center">
                <span>GSTIN: 37CKVPC7917H1ZM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Reserved */}
        <div className="mt-20 pt-8 text-center md:text-left border-t border-white/5">
          <p className="text-[13px] opacity-60 tracking-wider">
            © 2026 Sai Poorna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; export default Footer;