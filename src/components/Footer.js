import React from "react";

const Footer = () => (
  <footer className="bg-primary-light text-white py-4">
    <div className="container mx-auto text-center">
      <p>© 2024 DOAD. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        {/* Repeat for each social icon */}
        <a href="#" className="text-gray-400 hover:text-white">
          Facebook
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Twitter
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
