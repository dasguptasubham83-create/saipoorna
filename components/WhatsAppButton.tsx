import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [showNumbers, setShowNumbers] = useState(false);
  const primaryNumber = "919440310266";
  const secondaryNumber = "916305197326";
  
  return (
    <div className="relative inline-block">
      {/* Numbers List Popup */}
      <div className={`absolute bottom-[calc(100%+20px)] right-0 flex flex-col gap-2 transition-all duration-300 min-w-[200px] ${showNumbers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <a 
          href={`https://wa.me/${primaryNumber}?text=Hello%20Sai%20Poorna%20Trading%20Agencies!`}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-[#1c1c1c] text-[12px] font-bold py-2 px-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
          9440310266 (Primary)
        </a>
        <a 
          href={`https://wa.me/${secondaryNumber}?text=Hello%20Sai%20Poorna%20Trading%20Agencies!`}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-[#1c1c1c] text-[12px] font-bold py-2 px-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          6305197326 (Secondary)
        </a>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setShowNumbers(!showNumbers)}
        className="flex flex-col items-center gap-1.5 group"
      >
        <div className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 ${showNumbers ? 'bg-[#25D366] border-[#25D366]' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-6 h-6"
          />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
          WhatsApp Chat
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;