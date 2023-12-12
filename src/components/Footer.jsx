import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div>
          <h2 className="text-xl font-semibold mb-2">Subscribe</h2>
          <p className="mb-2">Subscribe to our newsletter for updates.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border border-white rounded-l mb-2 md:mb-0 md:mr-2"
            />
            <button className="bg-white text-gray-900 py-2 px-4 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-8 border-t border-gray-800 pt-4 text-center">
        <p>&copy; 2023 EcommSrapper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
