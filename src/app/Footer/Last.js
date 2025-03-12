
import React from 'react';

const Last = () => {
  return (
    <>
    <div className='w-full bg-[#0D2B43] text-white py-6'>
      <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Footer Text */}
        <div className="text-center py-4 text-gray-400">
        &copy; 2025 All Rights Reserved By <span className="font-semibold text-white">InvexTech</span>
        </div>

        {/* Settings Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-gray-300">
          <a href="/sitemap" className=" pl-2 hover:text-blue-400 cursor-pointer">Sitemap</a>
          <a href="/privacy-policy" className="border-l-2 border-gray-400 pl-2 hover:text-blue-400 cursor-pointer">Privacy Policy</a>
          <a href="/ims-policy" className="border-l-2 border-gray-400 pl-2 hover:text-blue-400 cursor-pointer">IMS Policy</a>
          <a href="/terms-conditions" className="border-l-2 border-gray-400 pl-2 hover:text-blue-400 cursor-pointer">Terms & Conditions</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Last;