import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const sectionRef = useRef(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Add animation timing effects
  useEffect(() => {
    setTimeout(() => setSectionVisible(true), 300); // Show Footer content
    setTimeout(() => setLinksVisible(true), 800); // Show links
  }, []);

  // Add scroll detection to trigger animations when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setTimeout(() => setLinksVisible(true), 500);
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

  // Canvas background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = document.getElementById('footer-section').offsetHeight;
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
    const particleCount = Math.min(40, Math.floor(width * height / 25000));
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
    <>
      <span id="footer"></span>
      <div 
        id="footer-section" 
        ref={sectionRef}
        className="relative overflow-hidden text-white duration-200"
      >
        {/* Background Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0"
        />
        
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className={`grid md:grid-cols-3 py-8 transition-all duration-700 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-glow">
                <img src={footerLogo} alt="Logo" className="max-w-22 transform transition-all duration-300 hover:scale-110" />
              </h1>
              <p className="text-glow-soft mb-4">
                To revolutionize the industry with innovative solutions that
                deliver top-quality services and enhance user experiences.
              </p>
              
              <div className="flex items-center gap-3 mt-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-4 border border-blue-400/20 transition-all duration-300 hover:shadow-glow">
                <FaLocationArrow className="text-blue-500 blue-glow" />
                <p className="text-glow-soft">Colombo, Sri Lanka</p>
              </div>
              
              <div className="flex items-center gap-3 mt-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-4 border border-blue-400/20 transition-all duration-300 hover:shadow-glow">
                <FaMobileAlt className="text-blue-500 blue-glow" />
                <p className="text-glow-soft">+94 70 331 1371</p>
              </div>
              
              {/* Social Handles */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/quickhire_sl?igsh=b2MwOHYzbnV1YjA1&utm_source=qr" 
                   className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-full p-3 border border-blue-400/20 transform transition-all duration-300 hover:scale-110 hover:shadow-glow">
                  <FaInstagram className="text-2xl text-blue-500 blue-glow" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573150813619&mibextid=wwXIfr&mibextid=wwXIfr" 
                   className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-full p-3 border border-blue-400/20 transform transition-all duration-300 hover:scale-110 hover:shadow-glow">
                  <FaFacebook className="text-2xl text-blue-500 blue-glow" />
                </a>
                <a href="https://www.linkedin.com/company/quickhiresl/about/?viewAsMember=true" 
                   className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-full p-3 border border-blue-400/20 transform transition-all duration-300 hover:scale-110 hover:shadow-glow">
                  <FaLinkedin className="text-2xl text-blue-500 blue-glow" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className={`py-8 px-6 transition-all duration-700 ${linksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <h1 className="text-2xl font-bold mb-6 blue-glow">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-4">
                  {['home', 'services', 'download', 'about Us'].map((section, index) => (
                    <li
                      key={section}
                      className="cursor-pointer bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-3 border border-blue-400/20 transform transition-all duration-300 hover:scale-105 hover:shadow-glow text-center"
                      onClick={() => scrollToSection(section)}
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={`text-center py-6 border-t-2 border-blue-400/20 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
            <p className="text-glow-soft">© 2025 All rights reserved QuickHireSL</p>
          </div>
        </div>

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
        `}</style>
      </div>
    </>
  );
};

export default Footer;








// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
//   FaTwitter,
//   FaGithub,
//   FaArrowRight
// } from "react-icons/fa";
// import footerLogo from "../../assets/logo.png";

// const Footer = () => {
//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="relative bg-gradient-to-b from-blue-900 to-black pt-20 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large gradient circle */}
//         <div className="absolute bottom-0 left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        
//         {/* Grid pattern */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-300">
//           {/* Logo and mission */}
//           <div className="col-span-1 lg:col-span-1">
//             <div className="mb-6">
//               <img 
//                 src={footerLogo} 
//                 alt="QuickHireSL Logo" 
//                 className="h-12 w-auto"
//               />
//             </div>
            
//             <p className="mb-6 leading-relaxed">
//               To revolutionize the industry with innovative solutions that
//               deliver top-quality services and enhance user experiences.
//             </p>
            
//             {/* Location */}
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400">
//                 <FaLocationArrow />
//               </div>
//               <span>Colombo, Sri Lanka</span>
//             </div>
            
//             {/* Phone */}
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400">
//                 <FaMobileAlt />
//               </div>
//               <span>+94 70 331 1371</span>
//             </div>
//           </div>
          
//           {/* Navigation Links */}
//           <div className="col-span-1">
//             <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Links</h3>
//             <ul className="space-y-3">
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">Home</span>
//                 </button>
//               </li>
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("services")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">Services</span>
//                 </button>
//               </li>
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("download")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">Download</span>
//                 </button>
//               </li>
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("about Us")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">About Us</span>
//                 </button>
//               </li>
//             </ul>
//           </div>
          
//           {/* Newsletter */}
//           <div className="col-span-1 lg:col-span-2">
//             <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Join Our Newsletter</h3>
//             <p className="mb-4">Stay updated with our latest features and job opportunities</p>
            
//             <div className="flex flex-col sm:flex-row gap-2">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="px-4 py-3 bg-blue-900/40 rounded-lg border border-blue-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 flex-1"
//               />
//               <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-white whitespace-nowrap">
//                 Subscribe
//               </button>
//             </div>
            
//             {/* Social links */}
//             <div className="mt-8">
//               <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-400">Follow Us</h4>
//               <div className="flex gap-4">
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaFacebook />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-8"></div>
        
//         {/* Copyright */}
//         <div className="text-center pb-8 text-gray-400">
//           © 2025 All rights reserved QuickHireSL
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;