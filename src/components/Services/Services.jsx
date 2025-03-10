import React, { useEffect, useRef, useState } from "react";
import Img from "../../assets/jobmatching.png";
import Img2 from "../../assets/inapp.png";
import Img3 from "../../assets/messaging.png";
import Img4 from "../../assets/notify.png";
import Img5 from "../../assets/review.png";
import Img6 from "../../assets/Nationwide.png";
import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Smart Job Matching",
    description:
      "Get jobs based on your skills, availability, and location.",
  },
  {
    id: 2,
    img: Img4,
    name: "Real Time Notification",
    description:
      "Never miss a job opportunity with instant alerts.",
  },
  {
    id: 3,
    img: Img3,
    name: "In-App Messaging",
    description:
      "Chat with employers directly through the app.",
  },
  {
    id: 4,
    img: Img2,
    name: "Location-Based Jobs",
    description:
      "Find part-time jobs near your university or home.",
  },
  {
    id: 5,
    img: Img5,
    name: "User review",
    description:
      "Share and read reviews from real job seekers.",
  },
  {
    id: 6,
    img: Img6,
    name: "Nationwide Jobs",
    description:
      "Explore job opportunities across the country.",
  },
];

const Services = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const sectionRef = useRef(null);

  // Add animation timing effects like in Hero
  useEffect(() => {
    setTimeout(() => setSectionVisible(true), 300); // Show Services heading
    setTimeout(() => setServicesVisible(true), 800); // Show services cards
  }, []);

  // Add scroll detection to trigger animations when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setTimeout(() => setServicesVisible(true), 500);
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

  // Enhanced job-themed particle animation (keeping the same as in Hero)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = document.getElementById('services-section').offsetHeight;
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
    
    // Create particles - matching the hero style
    const particleCount = Math.min(60, Math.floor(width * height / 18000));
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop - upgraded to match hero's visual style
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Create complex gradient background - matching hero style
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
      <span id="services"></span>
      <div 
        id="services-section" 
        ref={sectionRef}
        className="min-h-[650px] sm:min-h-[700px] relative overflow-hidden py-16 text-white duration-200"
      >
        {/* Enhanced Background Canvas - now matches Hero style */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0"
        />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className={`text-center mb-12 max-w-xl mx-auto transition-all duration-700 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow py-12">
              Our <span className="text-blue-500 blue-glow">Services</span>
            </h2>
            <p className="text-xl text-glow-soft mb-8">
              Find Flexible Jobs That Fit Your Schedule
            </p>
            <p className="text-lg opacity-80 text-glow-soft">
              QuickHireSL connects university students with part-time jobs effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {ServicesData.map((service, index) => (
              <div
                key={service.id}
                className={`bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-blue-400/20 transform transition-all duration-700 hover:scale-105 hover:shadow-glow group max-w-[300px] ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-glow">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="h-10 w-10 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold mb-2 blue-glow">
                  {service.name}
                </h3>
                <p className="text-center text-gray-300 transition duration-300 group-hover:text-white">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Styled button matching hero's button */}
        <div className="flex justify-center mt-12">
          <a href="/#download">
            {/* <button
              className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-all transform duration-200 ease-in-out ${servicesVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-4'} hover:scale-105 hover:shadow-glow active:scale-95 shake-button`}
            >
              Explore All Features
            </button> */}
          </a>
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

export default Services;


// import React from "react";
// import Img from "../../assets/jobmatching.png";
// import Img2 from "../../assets/inapp.png";
// import Img3 from "../../assets/messaging.png";

// const ServicesData = [
//   {
//     id: 1,
//     img: Img,
//     name: "Smart Job Matching",
//     description:
//       "Get jobs based on your skills, availability, and location.",
//     bgColor: "from-blue-500 to-cyan-500"
//   },
//   {
//     id: 2,
//     img: Img3,
//     name: "In-App Messaging",
//     description:
//       "Never miss a job opportunity with instant alerts.",
//     bgColor: "from-cyan-500 to-blue-600"
//   },
//   {
//     id: 3,
//     img: Img2,
//     name: "Location-Based Jobs",
//     description:
//       "Chat with employers directly through the app.",
//     bgColor: "from-blue-600 to-cyan-400"
//   },
// ];

// const Services = () => {
//   return (
//     <>
//       <span id="services"></span>
//       <div className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden">
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
//           <div className="text-center mb-20 max-w-[600px] mx-auto">
//             <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">
//               Why Choose QuickHireSL
//             </p>
//             <h1 className="text-3xl md:text-4xl font-bold py-3 text-white">Our Services</h1>
//             <p className="text-gray-300">
//               Find Flexible Jobs That Fit Your Schedule.
//               QuickHireSL connects university students with part-time jobs effortlessly.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//             {ServicesData.map((service) => (
//               <div
//                 key={service.id}
//                 data-aos="zoom-in"
//                 data-aos-duration="300"
//                 className="group w-full max-w-[350px] h-full"
//               >
//                 <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 h-full">
//                   {/* Card top with image */}
//                   <div className="h-[130px] bg-gradient-to-r bg-opacity-70 relative overflow-hidden rounded-t-2xl p-6">
//                     {/* Background gradient */}
//                     <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} opacity-20`}></div>
                    
//                     {/* Animated circles */}
//                     <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-white/20 rounded-full animate-pulse opacity-70"></div>
//                     <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse opacity-50" style={{animationDuration: '7s'}}></div>
                    
//                     {/* Image */}
//                     <img
//                       src={service.img}
//                       alt={service.name}
//                       className="max-w-[100px] h-[100px] object-contain block mx-auto transform -translate-y-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
//                     />
//                   </div>
                  
//                   {/* Card content */}
//                   <div className="p-6 text-center">
//                     <h1 className="text-xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
//                       {service.name}
//                     </h1>
//                     <p className="text-gray-300 text-sm">
//                       {service.description}
//                     </p>
                    
//                     {/* Animated button */}
//                     <div className="mt-6">
//                       <button className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-gray-300 hover:bg-blue-500/30 transition-all duration-300 backdrop-blur-sm">
//                         Learn More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* CTA button */}
//           <div className="text-center mt-16">
//             <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-white">
//               Explore All Services
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Services;