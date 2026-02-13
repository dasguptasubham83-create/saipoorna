import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [showNumbers, setShowNumbers] = useState(false);
  const primaryNumber = "919440310266";
  const secondaryNumber = "916305197326";
  
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-[9999] gap-3">
      {/* Dynamic Numbers List */}
      <div className={`flex flex-col gap-2 transition-all duration-300 ${showNumbers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <a 
          href={`https://wa.me/${primaryNumber}?text=Hello%20Sai%20Poorna%20Trading%20Agencies!`}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-[#1c1c1c] text-sm font-bold py-2 px-4 rounded-full shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
          9440310266 (Primary)
        </a>
        <a 
          href={`https://wa.me/${secondaryNumber}?text=Hello%20Sai%20Poorna%20Trading%20Agencies!`}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-[#1c1c1c] text-sm font-bold py-2 px-4 rounded-full shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          6305197326 (Secondary)
        </a>
      </div>

      {/* Main Button Toggle */}
      <button 
        onClick={() => setShowNumbers(!showNumbers)}
        id="whatsapp-chat-widget"
        className="w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
      >
        <div className={`absolute -top-12 right-0 bg-white text-[#1c1c1c] text-xs font-bold py-1 px-3 rounded shadow-lg transition-opacity ${showNumbers ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'} whitespace-nowrap pointer-events-none`}>
          Chat with us
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-[35px] h-[35px]"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;