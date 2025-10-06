// "use client";

// import { useEffect, useRef, useState } from "react";
// import Script from "next/script";
// import { Cairo_Play } from "next/font/google";

//   const cairo = Cairo_Play({
//   subsets: ["latin"],
//   variable: "--font-cario", // allows Tailwind integration
//   weight: ["600"], // pick weights you want
//   //display: "swap",
// });

// export default function HeroVanta() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [ready, setReady] = useState(false);

//   // init VANTA once scripts are ready
//   useEffect(() => {
//     if (!ready || !ref.current) return;
//     let vanta: any;

//     // @ts-ignore
//     const VANTA = (window as any).VANTA;
//     if (VANTA?.TRUNK) {
//       vanta = VANTA.TRUNK({
//         el: ref.current,
//         color: 0x98465f,           // from your screenshot
//         backgroundColor: 0x222426, // from your screenshot
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 2.0,
//         scaleMobile: 1.0,
//       });
//     }

//     return () => vanta?.destroy?.();
//   }, [ready]);

//   return (
//     <>
//       {/* Load in order: p5 first, then Vanta */}
//       <Script
//         src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.0/p5.min.js"
//         strategy="afterInteractive"
//       />
//       <Script
//         src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js"
//         strategy="afterInteractive"
//         onLoad={() => setReady(true)}
//       />
//       {/* Background container */}
//       <div className="h-full w-full ">
//         <div ref={ref} className="absolute inset-0 -z-10" />
//         {/* Your foreground content goes here */}
//           <div className="flex-row text-center w-16 h-16 bg-green-600 mb-14">
//             <h1 className={`${cairo.className} text-3xl text-white p-4 text-nowrap `}>Lorrell Winfield.</h1>

//                </div>
//                 {/* < AnimatedName/> */}
//       </div>
//     </>
//   );
// }
