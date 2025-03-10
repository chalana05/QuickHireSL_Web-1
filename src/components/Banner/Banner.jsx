import React, { useEffect, useRef, useState } from "react";
import BiryaniImg from "../../assets/work.png";
import Vector from "../../assets/vector3.png";
import { FaUserPlus } from "react-icons/fa6"; // Account Creation
import { FaSearch } from "react-icons/fa"; // Job Searching
import { MdWork } from "react-icons/md"; // Start Working

const Banner = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const sectionRef = useRef(null);

  // Animation timing effects like in Services
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

  // Particle animation similar to Services
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = document.getElementById('banner-section').offsetHeight;
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
    
    // Icon types for work-themed particles
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
    
    // Create particles - matching the services style
    const particleCount = Math.min(60, Math.floor(width * height / 18000));
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop - upgraded to match services's visual style
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Create complex gradient background - matching services style
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

  return (
    <>
      <div 
        id="banner-section" 
        ref={sectionRef}
        className="min-h-[550px] sm:min-h-[600px] relative overflow-hidden py-12 text-white"
      >
        {/* Background Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0"
        />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image section with animation */}
            <div className={`transition-all duration-700 transform ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <img
                src={BiryaniImg}
                alt="work process"
                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text content section with animations */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 
                className={`text-3xl sm:text-4xl font-bold text-glow transition-all duration-700 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              >
                How It <span className="text-blue-500 blue-glow">Works</span>
              </h1>
              <p 
                className={`text-sm text-gray-300 tracking-wide leading-5 transition-all duration-700 delay-300 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                Create an account and personalize your profile with skills and availability.
                Tell us your skills, location, and available hours to find the best job matches.
                <br />
                <br />
                Browse through available opportunities and apply for the ones you like.
                Connect with employers, start working, and earn while managing your studies.
              </p>

              {/* Steps with new icons and animations */}
              <div 
                className={`flex gap-6 transition-all duration-700 delay-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {/* Step 1: Account Creation */}
                <div className="flex flex-col items-center text-center group">
                  <div className="text-4xl h-20 w-20 shadow-glow p-5 rounded-full bg-gradient-to-r from-violet-600/80 to-violet-800/80 backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                    <FaUserPlus className="text-white" />
                  </div>
                  <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Create Account</p>
                </div>

                {/* Step 2: Job Searching */}
                <div className="flex flex-col items-center text-center group">
                  <div className="text-4xl h-20 w-20 shadow-glow p-5 rounded-full bg-gradient-to-r from-orange-500/80 to-orange-700/80 backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                    <FaSearch className="text-white" />
                  </div>
                  <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Find Jobs</p>
                </div>

                {/* Step 3: Start Working */}
                <div className="flex flex-col items-center text-center group">
                  <div className="text-4xl h-20 w-20 shadow-glow p-5 rounded-full bg-gradient-to-r from-green-500/80 to-green-700/80 backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                    <MdWork className="text-white" />
                  </div>
                  <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Start Working</p>
                </div>
              </div>

              {/* Contact Button with animation */}
              <div 
                className={`transition-all duration-700 delay-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {/* <button
                  onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-all transform duration-200 ease-in-out hover:scale-105 hover:shadow-glow active:scale-95 shake-button"
                >
                  Contact Us
                </button> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* CSS Styles similar to Services component */}
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
          
          .shadow-glow {
            box-shadow: 0 0 15px rgba(104, 109, 224, 0.5);
          }
          
          .hover\\:shadow-glow:hover {
            box-shadow: 0 0 25px rgba(104, 109, 224, 0.8);
          }
          
          /* Keyframe for shake effect */
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
        `}</style>
      </div>
    </>
  );
};

export default Banner;





// import React from "react";
// import BiryaniImg from "../../assets/work.png";
// import { FaUserPlus } from "react-icons/fa6"; // Account Creation
// import { FaSearch } from "react-icons/fa"; // Job Searching
// import { MdWork } from "react-icons/md"; // Start Working

// const Banner = () => {
//   return (
//     <>
//       <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white min-h-[550px]">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Large gradient circle */}
//           <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          
//           {/* Small circles */}
//           <div className="absolute top-1/4 right-10 w-32 h-32 bg-sky-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '7s'}}></div>
//           <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '8s'}}></div>
          
//           {/* Grid pattern */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//         </div>

//         <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 relative z-10">
//           <div data-aos="slide-up" data-aos-duration="300" className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Image section */}
//               <div className="relative">
//                 {/* Decorative elements */}
//                 <div className="absolute -z-10 inset-0">
//                   <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-blue-500/30 rounded-full"></div>
//                   <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-cyan-500/20 rounded-full"></div>
//                 </div>
                
//                 {/* Main image with glow */}
//                 <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-1">
//                   <div className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 rounded-2xl p-6">
//                     <div className="relative">
//                       {/* Image glow */}
//                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl -z-10"></div>
                      
//                       {/* Animated image */}
//                       <img
//                         src={BiryaniImg}
//                         alt="work process"
//                         className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Text content section */}
//               <div className="flex flex-col justify-center gap-6 sm:pt-0 text-white">
//                 <h1 className="text-3xl sm:text-4xl font-bold">
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500">
//                     How It Works
//                   </span>
//                 </h1>
//                 <p className="text-gray-300 tracking-wide leading-5">
//                   Create an account and personalize your profile with skills and availability.
//                   Tell us your skills, location, and available hours to find the best job matches.
//                   <br />
//                   <br />
//                   Browse through available opportunities and apply for the ones you like.
//                   Connect with employers, start working, and earn while managing your studies.
//                 </p>

//                 {/* Steps with icons and animations */}
//                 <div className="flex gap-6">
//                   {/* Step 1: Account Creation */}
//                   <div className="flex flex-col items-center text-center group">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                       <div className="relative">
//                         <FaUserPlus className="text-4xl h-20 w-20 p-5 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/10 text-white group-hover:-translate-y-1 transition-all duration-300" />
//                       </div>
//                     </div>
//                     <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Create Account</p>
//                   </div>

//                   {/* Step 2: Job Searching */}
//                   <div className="flex flex-col items-center text-center group">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                       <div className="relative">
//                         <FaSearch className="text-4xl h-20 w-20 p-5 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/10 text-white group-hover:-translate-y-1 transition-all duration-300" />
//                       </div>
//                     </div>
//                     <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Find Jobs</p>
//                   </div>

//                   {/* Step 3: Start Working */}
//                   <div className="flex flex-col items-center text-center group">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                       <div className="relative">
//                         <MdWork className="text-4xl h-20 w-20 p-5 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/10 text-white group-hover:-translate-y-1 transition-all duration-300" />
//                       </div>
//                     </div>
//                     <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Start Working</p>
//                   </div>
//                 </div>

//                 {/* Contact Button with animation */}
//                 <div className="mt-4">
//                   <button
//                     onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
//                     className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
//                     Contact Us
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Add CSS for animations */}
//         <style jsx>{`
//           @keyframes float {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-10px); }
//             100% { transform: translateY(0px); }
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default Banner;
