// import React from "react";
// import BiryaniImg1 from "../../assets/jobmatching.png";
// import BiryaniImg2 from "../../assets/messaging.png";
// import BiryaniImg3 from "../../assets/inapp.png";
// import Vector from "../../assets/bgimg.jpg";

// const ImageList = [
//   {
//     id: 1,
//     img: BiryaniImg1,
//   },
//   {
//     id: 2,
//     img: BiryaniImg2,
//   },
//   {
//     id: 3,
//     img: BiryaniImg3,
//   },
// ];
// const Hero = () => {
//   const [imageId, setImageId] = React.useState(BiryaniImg1);

//   const bgImage = {
//     backgroundImage: `url(${Vector})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%",
//   };

//   return (
//     <>
//     <span id="home"></span>
//       <div
//         className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
//         style={bgImage}
//       >
//         <div className="container pb-8 sm:pb-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2">
//             {/* text content section */}
//             <div
//               data-aos="zoom-out"
//               data-aos-duration="400"
//               data-aos-once="true"
//               className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
//             >
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
//                 Welcome{" "}
//                 <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
//                   QuickHireSL
//                 </span>{" "}
//               </h1>
//               <p className="text-lg ">
//               QuickHireSL – A smart job-matching platform designed to empower university students with flexible and short-term employment opportunities! 
//               </p>
//               <div>
//                 <a href="/#download">
//                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
//                     Download Now
//                   </button>
//                 </a>
//               </div>

//             </div>
//             {/* Image section */}
//             <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
//               <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
//                 {/* <img
//                   data-aos="zoom-in"
//                   data-aos-duration="300"
//                   data-aos-once="true"
//                   src={imageId}
//                   alt="biryani img"
//                   className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
//                 /> */}
//               </div>
//               <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
//                 {/* {ImageList.map((item) => (
//                   <img
//                     data-aos="zoom-in"
//                     data-aos-duration="400"
//                     data-aos-once="true"
//                     src={item.img}
//                     onClick={() => {
//                       setImageId(
//                         item.id === 1
//                           ? BiryaniImg1
//                           : item.id === 2
//                           ? BiryaniImg2
//                           : BiryaniImg3
//                       );
//                     }}
//                     alt="biryani img"
//                     className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
//                   />
//                 ))} */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;


import React, { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [showQuickHireSL, setShowQuickHireSL] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const textOptions = [
    "Find Jobs Quickly",
    "Connect with Employers",
    "Build Your Experience",
    "Earn While You Learn"
  ];

  useEffect(() => {
    setTimeout(() => setHeadingVisible(true), 300); // Show Welcome text
    setTimeout(() => setShowQuickHireSL(true), 1000); // Show QuickHireSL after Welcome text
    setTimeout(() => setShowDescription(true), 1600); // Show description after QuickHireSL
    setTimeout(() => setDescriptionVisible(true), 1900); // Enable typing animation after description is shown
  }, []);

  useEffect(() => {
    if (descriptionVisible && !typingStarted) {
      setTypingStarted(true); // Start typing after the description becomes visible
    }
  }, [descriptionVisible, typingStarted]);

  useEffect(() => {
    if (!typingStarted) return;

    const currentPhrase = textOptions[currentPhraseIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentPhrase.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingStarted]);

  // Enhanced job-themed particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create mouse interaction
    let mouse = {
      x: width / 2,
      y: height / 2,
      radius: 150,
      active: false
    };

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });

    window.addEventListener('mouseout', () => {
      mouse.active = false;
    });

    // Icon types for job-themed particles
    const iconTypes = ['briefcase', 'document', 'handshake', 'clock', 'checkmark', 'money', 'star'];
    
    // Particle class with enhanced visuals
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 18 + 10;
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.alpha = 0.1 + Math.random() * 0.2;
        this.baseAlpha = this.alpha;
        this.iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.pulseSpeed = 0.01 + Math.random() * 0.01;
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
        this.pulseAmount = 0;
        this.hue = Math.random() * 30 + 210; // Blue to purple range
        
        // Random color selection between blue and purple
        const colorOptions = [
          [66, 135, 245],  // Blue
          [104, 109, 224], // Indigo
          [156, 136, 255], // Purple
          [79, 195, 247],  // Light blue
          [49, 89, 171]    // Dark blue
        ];
        this.color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      }
      
      update() {
        // Base movement
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        // Pulsing effect
        this.pulseAmount += this.pulseSpeed * this.pulseDirection;
        if (Math.abs(this.pulseAmount) > 0.2) {
          this.pulseDirection *= -1;
        }
        
        // Mouse interaction
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            
            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
            
            // Increase alpha and size when near mouse
            this.alpha = Math.min(1, this.baseAlpha + force * 0.5);
            this.size = this.baseSize + force * 10;
          } else {
            this.alpha = this.baseAlpha;
            this.size = this.baseSize;
          }
        } else {
          this.alpha = this.baseAlpha;
          this.size = this.baseSize;
        }
        
        // Apply pulse to size
        const pulseSize = this.baseSize * (1 + this.pulseAmount);
        this.displaySize = mouse.active ? this.size : pulseSize;
        
        // Wrap around edges
        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        
        // Draw with glow effect
        const [r, g, b] = this.color;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha * 1.5})`;
        ctx.lineWidth = 1.5;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.2})`;
        
        // Add glow
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.7)`;
        ctx.shadowBlur = 8;
        
        switch(this.iconType) {
          case 'briefcase':
            this.drawBriefcase();
            break;
          case 'document':
            this.drawDocument();
            break;
          case 'handshake':
            this.drawHandshake();
            break;
          case 'clock':
            this.drawClock();
            break;
          case 'checkmark':
            this.drawCheckmark();
            break;
          case 'money':
            this.drawMoney();
            break;
          case 'star':
            this.drawStar();
            break;
          default:
            this.drawBriefcase();
        }
        
        ctx.restore();
      }
      
      drawBriefcase() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.rect(-s/2, -s/2, s, s * 0.7);
        ctx.moveTo(-s/4, -s/2);
        ctx.lineTo(-s/4, -s/4);
        ctx.lineTo(s/4, -s/4);
        ctx.lineTo(s/4, -s/2);
        ctx.fill();
        ctx.stroke();
      }
      
      drawDocument() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.rect(-s/2, -s/2, s, s * 0.8);
        ctx.moveTo(-s/3, -s/3);
        ctx.lineTo(s/3, -s/3);
        ctx.moveTo(-s/3, -s/6);
        ctx.lineTo(s/3, -s/6);
        ctx.moveTo(-s/3, 0);
        ctx.lineTo(s/3, 0);
        ctx.moveTo(-s/3, s/6);
        ctx.lineTo(s/3, s/6);
        ctx.fill();
        ctx.stroke();
      }
      
      drawHandshake() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.moveTo(-s/2, 0);
        ctx.lineTo(0, s/4);
        ctx.lineTo(s/2, 0);
        ctx.moveTo(0, s/4);
        ctx.lineTo(0, -s/4);
        ctx.stroke();
      }
      
      drawClock() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.arc(0, 0, s/2, 0, Math.PI * 2);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -s/4);
        ctx.moveTo(0, 0);
        ctx.lineTo(s/4, 0);
        ctx.fill();
        ctx.stroke();
      }
      
      drawCheckmark() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.moveTo(-s/3, 0);
        ctx.lineTo(-s/6, s/4);
        ctx.lineTo(s/3, -s/3);
        ctx.stroke();
      }
      
      drawMoney() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.rect(-s/2, -s/3, s, s * 0.6);
        ctx.moveTo(0, -s/4);
        ctx.lineTo(0, s/4);
        ctx.moveTo(-s/4, 0);
        ctx.lineTo(s/4, 0);
        ctx.fill();
        ctx.stroke();
      }
      
      drawStar() {
        const s = this.displaySize;
        const spikes = 5;
        const outerRadius = s/2;
        const innerRadius = s/4;
        
        ctx.beginPath();
        
        for(let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI * 2 * i) / (spikes * 2) - Math.PI / 2;
          
          if(i === 0) {
            ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
          } else {
            ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
          }
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    
    // Create particles
    const particleCount = Math.min(60, Math.floor(width * height / 18000));
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Create complex gradient background
      const gradient = ctx.createRadialGradient(
        width/2, height/2, 0,
        width/2, height/2, Math.max(width, height)
      );
      gradient.addColorStop(0, 'rgba(30, 60, 120, 1)');
      gradient.addColorStop(0.6, 'rgba(20, 40, 100, 1)');
      gradient.addColorStop(1, 'rgba(10, 20, 60, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Add light streaks effect
      ctx.save();
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 200 + 50;
        
        const streakGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        streakGradient.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
        streakGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = streakGradient;
        ctx.fillRect(0, 0, width, height);
      }
      ctx.restore();
      
      // Draw subtle grid lines
      ctx.save();
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.05)';
      ctx.lineWidth = 1;
      
      const gridSpacing = 50;
      
      // Vertical lines
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect nearby particles with lines
      ctx.save();
      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.strokeStyle = `rgba(180, 200, 255, ${opacity})`;
            ctx.lineWidth = (1 - distance / 150) * 0.8;
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      ctx.restore();
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', window.mousemoveHandler);
      window.removeEventListener('mouseout', window.mouseoutHandler);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      id="hero-section"
      className="min-h-[550px] sm:min-h-[650px] relative overflow-hidden flex justify-center items-center text-white duration-200"
    >
      {/* Enhanced Job-themed Particle Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="container flex justify-center items-center h-full relative z-10">
        {/* Content without background box */}
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-[-10px] text-glow">
            <span
              className={`inline-block transition-all duration-700 ${headingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
            >
              Welcome
            </span>
            {showQuickHireSL && (
              <span
                className={`inline-block transition-all duration-700 ml-2 ${showQuickHireSL ? 'opacity-100' : 'opacity-0'} ${showQuickHireSL ? 'scale-100' : 'scale-110'}`}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 glow-text">
                  QuickHireSL
                </span>
              </span>
            )}
          </h1>

          {/* <p
            className={`text-lg max-w-xl mx-auto mt-6 transition-all duration-1000 ease-out text-glow-soft ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            QuickHireSL – A smart job-matching platform designed to empower university students with flexible and short-term employment opportunities!
          </p> */}

          {/* Typing Animation Container */}
          {typingStarted && (
            <div className="h-16 flex justify-center items-center my-5">
              <div className="text-xl font-semibold text-glow-soft">
                {displayedText}
                <span className="blinking-cursor">|</span>
              </div>
            </div>
          )}

          <a href="/#download">
            <button
              className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-full text-lg font-medium mt-6 transition-all transform duration-200 ease-in-out ${descriptionVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-4'} hover:scale-105 hover:shadow-glow active:scale-95 shake-button`}
            >
              Download Now
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        /* Keyframe for up and down shake effect */
        @keyframes shake {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(5px);
          }
          75% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(5px);
          }
        }

        /* Apply shake animation to the button */
        .shake-button {
          animation: shake 2s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(104, 109, 224, 0.5);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 25px rgba(104, 109, 224, 0.8);
        }

        .active\\:scale-95:active {
          transform: scale(0.95);
        }

        .text-glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 
                       0 0 20px rgba(255, 255, 255, 0.5), 
                       0 0 30px rgba(104, 109, 224, 0.3);
        }
        
        .text-glow-soft {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 
                       0 0 15px rgba(104, 109, 224, 0.3);
        }
        
        .glow-text {
          filter: drop-shadow(0 0 8px rgba(104, 109, 224, 0.8));
        }
      `}</style>
    </div>
  );
};

export default Hero;





// import React, { useState, useEffect } from "react";
// import BiryaniImg1 from "../../assets/messaging.png";
// import BiryaniImg2 from "../../assets/messaging.png";
// import BiryaniImg3 from "../../assets/inapp.png";

// const features = [
//   {
//     id: 1,
//     img: BiryaniImg1,
//     alt: "Job Matching Feature",
//   },
//   {
//     id: 2,
//     img: BiryaniImg2,
//     alt: "Messaging Feature",
//   },
//   {
//     id: 3,
//     img: BiryaniImg3,
//     alt: "In-app Features",
//   },
// ];

// const Hero = () => {
//   const [activeFeature, setActiveFeature] = useState(features[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [position, setPosition] = useState(0);
  
//   // Auto-rotate features
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (activeIndex + 1) % features.length;
//       setActiveIndex(nextIndex);
//       setActiveFeature(features[nextIndex]);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   // Horizontal movement animation
//   useEffect(() => {
//     const animatePosition = () => {
//       // Move back and forth between -10 and 10
//       const time = Date.now() / 1000; // Convert to seconds for slower movement
//       const newPosition = Math.sin(time) * 10; // Use sine wave for smooth back-and-forth
//       setPosition(newPosition);
//     };
    
//     const animationFrame = requestAnimationFrame(function animate() {
//       animatePosition();
//       requestAnimationFrame(animate);
//     });
    
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <>
//       <span id="home"></span>
//       <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white min-h-[600px]">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Large gradient circle */}
//           <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          
//           {/* Small circles */}
//           <div className="absolute top-1/3 left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '7s'}}></div>
//           <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '8s'}}></div>
          
//           {/* Grid pattern */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//         </div>

//         {/* Main content */}
//         <div className="container mx-auto px-4 py-12 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side: Text Content */}
//             <div className="space-y-6">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//                 <span className="block">Welcome to</span>
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500">
//                   QuickHireSL
//                 </span>
//               </h1>
              
//               <p className="text-lg text-gray-300 max-w-lg">
//                 A smart job-matching platform designed to empower university students with flexible and short-term employment opportunities!
//               </p>
              
//               <div className="flex flex-wrap gap-4">
//                 <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
//                   Download App
//                 </button>
//                 <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-medium hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
//                   Learn More
//                 </button>
//               </div>
//             </div>
            
//             {/* Right Side: Image Content */}
//             <div className="relative">
//               {/* Decorative elements */}
//               <div className="absolute -z-10 inset-0">
//                 <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-blue-500/30 rounded-full"></div>
//                 <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-cyan-500/20 rounded-full"></div>
//               </div>
              
//               {/* Main image with glow */}
//               <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-1">
//                 <div className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 rounded-2xl p-6">
//                   <div className="relative">
//                     {/* Image glow */}
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl -z-10"></div>
                    
//                     {/* Feature image with horizontal movement */}
//                     <div 
//                       className="transition-transform duration-1000"
//                       style={{ 
//                         transform: `translateX(${position}%)`,
//                       }}
//                     >
//                       <img
//                         src={activeFeature.img}
//                         alt={activeFeature.alt}
//                         className="w-full h-auto object-contain mx-auto rounded-xl max-w-md"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;