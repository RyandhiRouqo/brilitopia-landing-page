import Image from 'next/image';

export function StarBadge() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background Blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-50 to-orange-50 rounded-full blur-3xl opacity-60" />
      
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-teal-300 rounded-full opacity-70" />
      <div className="absolute top-20 right-16 w-12 h-12 bg-purple-300 rounded-full opacity-70" />
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-blue-300 rounded-full opacity-70" />
      
      {/* Sparkle Stars */}
      <div className="absolute top-16 right-12 text-yellow-300 text-2xl">✨</div>
      <div className="absolute bottom-28 left-16 text-yellow-200 text-xl">✨</div>
      <div className="absolute top-1/2 right-8 text-yellow-300 text-lg">✨</div>
      
      {/* Main Star Badge */}
      <div className="relative z-10 flex items-center justify-center p-8">
        <div className="relative w-80 h-80">
          {/* Outer Circle with border */}
          <div className="absolute inset-0 rounded-full border-8 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100" />
          
          {/* Star Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-56 h-56">
              {/* Star Shape with Brain Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Yellow Star Background */}
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FDE047" />
                        <stop offset="100%" stopColor="#FACC15" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M100,20 L115,70 L170,70 L125,105 L140,155 L100,120 L60,155 L75,105 L30,70 L85,70 Z"
                      fill="url(#starGradient)"
                      stroke="#3B82F6"
                      strokeWidth="4"
                    />
                  </svg>
                  
                  {/* Brain Icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg 
                      width="80" 
                      height="80" 
                      viewBox="0 0 80 80" 
                      fill="none" 
                      className="text-white drop-shadow-lg"
                    >
                      <path 
                        d="M40 15C35 15 30 17 27 21C24 17 19 15 14 15C6 15 0 21 0 29C0 37 4 43 10 47C4 51 0 57 0 65C0 73 6 79 14 79C19 79 24 77 27 73C30 77 35 79 40 79C48 79 54 73 54 65C54 57 50 51 44 47C50 43 54 37 54 29C54 21 48 15 40 15Z" 
                        fill="currentColor"
                        transform="translate(13, 10)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}