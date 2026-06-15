// // src/app/components/HeroSection.tsx
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <Image
//           src="/hero.jpeg"
//           alt="Signature Project"
//           fill
//           priority
//           className="object-cover"
//         />
//         {/* Subtle gradient overlay for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-between h-full text-white px-6 lg:px-12 py-8 lg:py-12">
//         {/* Enhanced Header */}
//         <header className="w-full flex items-center justify-between">
//           {/* Logo Container */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/Logo.png"
//               alt="Company Logo"
//               width={48}
//               height={48}
//               className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
//             />
//           </div>

//           {/* Decorative Line with Better Styling */}
//           <div className="flex-grow mx-6 lg:mx-12 relative">
//             <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
//             <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
//           </div>

//           {/* Enhanced Right Text */}
//           <div className="flex-shrink-0">
//             <span className="text-xs lg:text-base tracking-widest uppercase font-light">
//               Signature Projects
//             </span>
//           </div>
//         </header>

//         {/* Center Content Area - Ready for Future Content */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="text-center max-w-4xl mx-auto">
//             {/* This space can be used for main title, subtitle, or other hero content */}
//             {/* Example placeholder - remove when adding actual content */}
//             <div className="opacity-0">
//               <h1 className="text-4xl lg:text-6xl font-light mb-6">
//                 Architectural Excellence
//               </h1>
//               <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
//                 Redefining spaces through innovative design and sustainable
//                 architecture
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Scroll Indicator */}
//         <div className="flex flex-col items-center space-y-3">
//           {/* Optional "Scroll" text */}
//           <span className="text-xs tracking-widest uppercase opacity-60 font-light">
//             Scroll
//           </span>

//           {/* Improved Scroll Icon */}
//           <div className="relative">
//             {/* Outer ring with glow effect */}
//             <div className="w-8 h-16 lg:w-10 lg:h-20 border border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
//               {/* Inner scroll dot */}
//               <div className="w-1 h-3 bg-white rounded-full animate-bounce opacity-80" />
//             </div>

//             {/* Subtle glow effect */}
//             <div className="absolute inset-0 w-8 h-16 lg:w-10 lg:h-20 border border-white/20 rounded-full blur-sm" />
//           </div>
//         </div>
//       </div>

//       {/* Optional: Floating Elements for Added Visual Interest */}
//       <div className="absolute bottom-20 left-6 lg:left-12 opacity-30">
//         <div className="w-px h-20 bg-gradient-to-b from-white/60 to-transparent" />
//       </div>

//       <div className="absolute bottom-20 right-6 lg:right-12 opacity-30">
//         <div className="w-px h-20 bg-gradient-to-b from-white/60 to-transparent" />
//       </div>
//     </section>
//   );
// }
// src/app/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full z-30 overflow-hidden">
      {/* Background Video */}
      <video
        src="/export-building.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      {/* Background Image */}
      {/* <Image
        src="/hero.jpeg"
        alt="Signature Project"
        fill
        priority
        className="object-cover"
      /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full text-white px-6 py-10">
        {/* Top Right Label */}
        <div className="w-full flex items-center justify-between gap-4">
          {/* Left Logo */}
          <img src="/Logo.png" className="h-12 w-12" alt="Logo" />

          {/* Middle Line */}
          <span className="flex-grow border-t border-1 border-white" />

          {/* Right Text */}
          <span className="text-xs md:text-xl tracking-wide uppercase">
            Signature Projects
          </span>
        </div>

        {/* Scroll Icon Bottom Center */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-16 border-2 border-white rounded-full flex items-center justify-center">
            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Scroll Icon Bottom Center */}
        {/* <div className="flex justify-center mb-6">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
