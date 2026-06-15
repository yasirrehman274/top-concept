export default function Overview() {
  return (
    <>
      <section className="py-16 px-6 max-w-5xl mx-auto relative">
        {/* Center Vertical Line (sirf desktop pe show) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 dark:bg-gray-600 -translate-x-1/2" />

        {/* Logo Box */}
        <div className="flex justify-center mb-10 relative z-10">
          <div className="bg-white dark:bg-black px-4">
            {/* Light aur dark dono logo handle karna chaho to alag alag img rakh sakte ho */}
            <img
              src="/Logo-dark.png"
              alt="Logo"
              className="h-10 w-10 mx-auto dark:hidden"
            />
            <img
              src="/Logo-light.png"
              alt="Logo"
              className="h-10 w-10 mx-auto hidden dark:block"
            />
          </div>
        </div>

        {/* Quote + Stats */}
        <div className="flex justify-between flex-col md:flex-row md:gap-52">
          {/* Quote */}
          <p className="text-lg text-gray-600 opacity-75 dark:text-gray-300 items-start mb-8 md:mb-0">
            “Designing Spaces, <br /> Shaping Experiences <br /> & Building
            Trust Across the{" "}
            <span className="font-semibold italic">UAE & Beyond.</span>”
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:w-[440px] sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold">2018</p>
            </div>
            <div>
              <p className="inline-block border-dashed border-b border-gray-400 dark:border-gray-500 mb-1">
                Branches
              </p>
              <p className="font-semibold">Dubai · Bangalore · London</p>
            </div>
            <div>
              <p className="inline-block border-dashed border-b border-gray-400 dark:border-gray-500 mb-1">
                Team
              </p>
              <p className="font-semibold">120+</p>
            </div>
            <div>
              <p className="inline-block border-dashed border-b border-gray-400 dark:border-gray-500 mb-1">
                Projects Completed
              </p>
              <p className="font-semibold">200+</p>
            </div>
            <div>
              <p className="inline-block border-dashed border-b border-gray-400 dark:border-gray-500 mb-1">
                Active Clients
              </p>
              <p className="font-semibold">15+</p>
            </div>
            <div>
              <p className="inline-block border-dashed border-b border-gray-400 dark:border-gray-500 mb-1">
                Active Projects
              </p>
              <p className="font-semibold">20+</p>
            </div>
          </div>
        </div>

        {/* Interior vs Architecture */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-4 md:gap-6 relative font-bold text-lg md:text-2xl z-10">
          <button className="px-6 py-2 border border-gray-400 dark:border-gray-600 rounded-full bg-white dark:bg-black dark:text-white w-full md:w-auto">
            INTERIOR DESIGN
          </button>

          {/* Horizontal Divider (sirf md and up pe dikhayen) */}
          <span className="hidden md:block flex-grow max-w-[220px] border-t border-gray-300 dark:border-gray-600" />

          <button className="px-6 py-2 border border-gray-400 dark:border-gray-600 rounded-full bg-white dark:bg-black dark:text-white font-semibold w-full md:w-auto">
            ARCHITECTURE DESIGN
          </button>
        </div>
      </section>
    </>
  );
}

// // src/app/components/Overview.tsx
// export default function Overview() {
//   return (
//     <section className="py-16 px-6 max-w-5xl mx-auto text-center relative">
//       {/* Center Vertical Line (sirf desktop pe show) */}
//       <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2" />

//       {/* Logo Box */}
//       <div className="flex justify-center mb-10 relative z-10">
//         <div className="bg-white px-4">
//           <img src="/Logo-dark.png" alt="Logo" className="h-10 w-10 mx-auto" />
//         </div>
//       </div>

//       {/* Quote + Stats */}
//       <div className="flex flex-col md:flex-row justify-center md:gap-20 lg:gap-[250px] items-start text-left md:text-left">
//         {/* Quote */}
//         <p className="text-lg text-gray-400 max-w-xl mb-8 md:mb-0">
//           “Designing Spaces, <br /> Shaping Experiences <br /> & Building Trust
//           Across the <span className="font-semibold italic">UAE & Beyond.</span>
//           ”
//         </p>

//         {/* Stats */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
//           <div>
//             <p className="font-semibold">2018</p>
//           </div>
//           <div>
//             <p className="inline-block border-dashed border-b border-gray-400 mb-1">
//               Branches
//             </p>
//             <p className="font-semibold">Dubai · Bangalore · London</p>
//           </div>
//           <div>
//             <p className="inline-block border-dashed border-b border-gray-400 mb-1">
//               Team
//             </p>
//             <p className="font-semibold">120+</p>
//           </div>
//           <div>
//             <p className="inline-block border-dashed border-b border-gray-400 mb-1">
//               Projects Completed
//             </p>
//             <p className="font-semibold">200+</p>
//           </div>
//           <div>
//             <p className="inline-block border-dashed border-b border-gray-400 mb-1">
//               Active Clients
//             </p>
//             <p className="font-semibold">15+</p>
//           </div>
//           <div>
//             <p className="inline-block border-dashed border-b border-gray-400 mb-1">
//               Active Projects
//             </p>
//             <p className="font-semibold">20+</p>
//           </div>
//         </div>
//       </div>

//       {/* Interior vs Architecture */}
//       <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-4 md:gap-6 relative font-bold text-lg md:text-2xl z-10">
//         <button className="px-6 py-2 border border-gray-400 rounded-full bg-white w-full md:w-auto">
//           INTERIOR DESIGN
//         </button>

//         {/* Horizontal Divider (sirf md and up pe dikhayen) */}
//         <span className="hidden md:block flex-grow max-w-[400px] border-t border-gray-300" />

//         <button className="px-6 py-2 border border-gray-400 rounded-full bg-white font-semibold w-full md:w-auto">
//           ARCHITECTURE DESIGN
//         </button>
//       </div>
//     </section>
//   );
// }
