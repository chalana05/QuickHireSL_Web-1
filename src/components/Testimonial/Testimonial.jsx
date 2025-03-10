import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import kovida from "../../assets/kovida.jpg";
import chalana from "../../assets/chalana.jpg";
import nandun from "../../assets/nandun.jpg";
import devinda from "../../assets/devvinda.jpg";
import pasan from "../../assets/pasana.png";
import rasali from "../../assets/rasali.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Kovida Opatha",
    text: "Founder and Team lead of QuickHireSL",
    img: kovida,
  },
  {
    id: 2,
    name: "Chalana Sayuranga",
    text: "Frontend-dev & Content Creator",
    img: chalana,
  },
  {
    id: 3,
    name: "Nandun Disanayake",
    text: "Backend-dev",
    img: nandun,
  },
  {
    id: 4,
    name: "Devinda Bandara",
    text: "Frontend-dev",
    img: devinda,
  },
  {
    id: 5,
    name: "Damindu Pasan",
    text: "Frontend-dev",
    img: pasan,
  },
  {
    id: 6,
    name: "Rasali Oshadi",
    text: "Frontend-dev",
    img: rasali,
  },
];

const Testimonial = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const sectionRef = useRef(null);

  // Animation timing effects
  useEffect(() => {
    setTimeout(() => setSectionVisible(true), 300); // Show heading
    setTimeout(() => setContentVisible(true), 800); // Show content
  }, []);

  // Add scroll detection to trigger animations when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setTimeout(() => setContentVisible(true), 500);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = document.getElementById('testimonial-section').offsetHeight;
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
    
    // Icon types for team-themed particles
    const iconTypes = ['user', 'code', 'star', 'heart', 'gear', 'chat', 'check'];
    
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
          case 'user':
            this.drawUser();
            break;
          case 'code':
            this.drawCode();
            break;
          case 'star':
            this.drawStar();
            break;
          case 'heart':
            this.drawHeart();
            break;
          case 'gear':
            this.drawGear();
            break;
          case 'chat':
            this.drawChat();
            break;
          case 'check':
            this.drawCheck();
            break;
          default:
            this.drawUser();
        }
        
        ctx.restore();
      }
      
      drawUser() {
        const s = this.displaySize;
        // Head
        ctx.beginPath();
        ctx.arc(0, -s/6, s/3, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Body
        ctx.beginPath();
        ctx.moveTo(0, s/6);
        ctx.lineTo(0, s/2);
        ctx.stroke();
        
        // Arms
        ctx.beginPath();
        ctx.moveTo(-s/3, 0);
        ctx.lineTo(s/3, 0);
        ctx.stroke();
      }
      
      drawCode() {
        const s = this.displaySize;
        ctx.beginPath();
        
        // Left bracket
        ctx.moveTo(-s/3, -s/3);
        ctx.lineTo(-s/2, 0);
        ctx.lineTo(-s/3, s/3);
        
        // Right bracket
        ctx.moveTo(s/3, -s/3);
        ctx.lineTo(s/2, 0);
        ctx.lineTo(s/3, s/3);
        
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
      
      drawHeart() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.moveTo(0, s/4);
        
        // Left curve
        ctx.bezierCurveTo(-s/4, 0, -s/4, -s/2, 0, -s/4);
        
        // Right curve
        ctx.bezierCurveTo(s/4, -s/2, s/4, 0, 0, s/4);
        
        ctx.fill();
        ctx.stroke();
      }
      
      drawGear() {
        const s = this.displaySize;
        ctx.beginPath();
        const teeth = 8;
        const outerRadius = s/2;
        const innerRadius = s/3;
        
        for(let i = 0; i < teeth * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI * 2 * i) / (teeth * 2);
          
          if(i === 0) {
            ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
          } else {
            ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
          }
        }
        
        ctx.closePath();
        ctx.arc(0, 0, s/6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
      
      drawChat() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.moveTo(-s/2, -s/3);
        ctx.lineTo(s/2, -s/3);
        ctx.lineTo(s/2, s/3);
        ctx.lineTo(0, s/3);
        ctx.lineTo(-s/6, s/2);
        ctx.lineTo(-s/6, s/3);
        ctx.lineTo(-s/2, s/3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      
      drawCheck() {
        const s = this.displaySize;
        ctx.beginPath();
        ctx.moveTo(-s/3, 0);
        ctx.lineTo(-s/6, s/3);
        ctx.lineTo(s/2, -s/3);
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
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <span id="about-us"></span>
      <div 
        id="testimonial-section"
        ref={sectionRef}
        className="relative overflow-hidden py-12 min-h-[500px] text-white"
      >
        {/* Background Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0"
        />
        
        <div className="container relative z-10 mx-auto px-4">
          <div 
            className={`text-center mb-10 max-w-[600px] mx-auto transition-all duration-700 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          >
            <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 py-12">
              About Us
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold py-3 text-glow">Meet Our Team</h1>
            <p className="text-lg text-slate-300 text-glow-soft">
              We're a passionate team of innovators dedicated to revolutionizing skill sharing and learning.
            </p>
          </div>
          
          <div
            className={`grid grid-cols-1 max-w-[600px] mx-auto gap-6 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div key={data.id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-glow p-6 mx-4 rounded-xl bg-gradient-to-b from-blue-900/30 to-purple-900/30 backdrop-blur-sm relative transform hover:scale-105 transition-all duration-300">
                      <div className="relative">
                        <img
                          className="rounded-full block mx-auto w-32 h-32 object-cover border-2 border-blue-500 blue-glow-border"
                          src={data.img}
                          alt={data.name}
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-pulse"></div>
                      </div>
                      <p className="text-slate-300 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold blue-glow">{data.name}</h1>
                      <p className="text-white/10 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        
        {/* CSS Styles */}
        <style jsx>{`
          .text-glow {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 
                         0 0 20px rgba(255, 255, 255, 0.5), 
                         0 0 30px rgba(104, 109, 224, 0.3);
          }
          
          .text-glow-soft {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 
                         0 0 15px rgba(104, 109, 224, 0.3);
          }
          
          .blue-glow {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 
                         0 0 20px rgba(59, 130, 246, 0.5), 
                         0 0 30px rgba(59, 130, 246, 0.3);
          }
          
          .blue-glow-border {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
          }
          
          .shadow-glow {
            box-shadow: 0 0 15px rgba(104, 109, 224, 0.5);
          }
          
          @keyframes pulse {
            0% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            100% {
              opacity: 0.6;
              transform: scale(1);
            }
          }
          
          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default Testimonial;









// import React from "react";
// import Slider from "react-slick";
// import kovida from "../../assets/kovida.jpg";
// import chalana from "../../assets/chalana.jpg";
// import nandun from "../../assets/nandun.jpg";
// import devinda from "../../assets/devvinda.jpg";
// import pasan from "../../assets/pasana.png";
// import rasali from "../../assets/rasali.jpg";

// const testimonialData = [
//   {
//     id: 1,
//     name: "Kovida Opatha",
//     text: "Founder and Team lead of QuickHireSL",
//     img: kovida,
//     bgColor: "from-blue-600 to-cyan-500"
//   },
//   {
//     id: 2,
//     name: "Chalana Sayuranga",
//     text: "Frontend-dev & Content Creator",
//     img: chalana,
//     bgColor: "from-cyan-500 to-blue-500"
//   },
//   {
//     id: 3,
//     name: "Nandun Disanayake",
//     text: "Backend-dev",
//     img: nandun,
//     bgColor: "from-blue-500 to-cyan-400"
//   },
//   {
//     id: 4,
//     name: "Devinda Bandara",
//     text: "Frontend-dev",
//     img: devinda,
//     bgColor: "from-cyan-400 to-blue-600"
//   },
//   {
//     id: 5,
//     name: "Damindu Pasan",
//     text: "Frontend-dev",
//     img: pasan,
//     bgColor: "from-blue-600 to-cyan-500"
//   },
//   {
//     id: 6,
//     name: "Rasali Oshadi",
//     text: "Frontend-dev",
//     img: rasali,
//     bgColor: "from-cyan-500 to-blue-500"
//   },
// ];

// const Testimonial = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       },
//     ]
//   };

//   return (
//     <>
//       <div className="py-20 bg-gradient-to-b from-blue-800 to-blue-900 relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Large gradient circle */}
//           <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
//           {/* Small circles */}
//           <div className="absolute top-1/3 right-10 w-24 h-24 bg-sky-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '9s'}}></div>
//           <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '6s'}}></div>
          
//           {/* Grid pattern */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16 max-w-[600px] mx-auto">
//             <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">
//               About Us
//             </p>
//             <h1 className="text-3xl md:text-4xl font-bold py-3 text-white">Meet Our Team</h1>
//             <p className="text-gray-300">
//               We're a passionate team of innovators dedicated to revolutionizing skill sharing and learning.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <Slider {...settings} className="team-slider">
//               {testimonialData.map((data) => (
//                 <div key={data.id} className="px-4">
//                   <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden transition-all duration-300 p-8">
//                     <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
//                       {/* Image container with gradient border */}
//                       <div className="relative w-40 h-40 mx-auto md:mx-0">
//                         <div className={`absolute inset-0 bg-gradient-to-r ${data.bgColor} rounded-full opacity-30 blur-sm`}></div>
//                         <div className="absolute inset-1 bg-blue-900 rounded-full"></div>
//                         <img 
//                           src={data.img} 
//                           alt={data.name} 
//                           className="rounded-full w-full h-full object-cover relative p-1"
//                         />
//                         {/* Animated orbital circle */}
//                         <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-pulse"></div>
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-300 mb-4 italic">{data.text}</p>
//                         <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
//                           {data.name}
//                         </h3>
                        
//                         {/* Social icons */}
//                         <div className="flex justify-center md:justify-start gap-4 mt-4">
//                           <button className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                               <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
//                             </svg>
//                           </button>
//                           <button className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                               <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
//                             </svg>
//                           </button>
//                           <button className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                               <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
          
//           {/* Custom styling for slider dots */}
//           <style jsx>{`
//             /* Custom styling for Slick slider */
//             :global(.team-slider .slick-dots) {
//               bottom: -40px;
//             }
//             :global(.team-slider .slick-dots li button:before) {
//               color: #60a5fa;
//               opacity: 0.3;
//               font-size: 10px;
//             }
//             :global(.team-slider .slick-dots li.slick-active button:before) {
//               color: #60a5fa;
//               opacity: 1;
//             }
//             @keyframes float {
//               0% { transform: translateY(0px); }
//               50% { transform: translateY(-10px); }
//               100% { transform: translateY(0px); }
//             }
//           `}</style>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;