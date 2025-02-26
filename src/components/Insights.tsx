import { useState, useRef, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { iphone1, iphone2, iphone3, iphoneback, king } from "../assets"; // Icons for each tab
import { motion, AnimatePresence } from "framer-motion";
const tabs = [
    {
      id: 0,
      title: "Analytics Dashboard",
      image: iphone1,
      points: [
        { text: "Get a quick snapshot with Capchek's Overall Rating.", position: "left" },
        { text: "Experience real emotions with Capchek—Love It, Like It, or Dislike It.", position: "left" },
        { text: "See how products perform over time. Compare current and previous month ratings.", position: "right" },
        { text: "Make better choices by seeing how customers truly feel.", position: "right" },
      ],
    },
    {
      id: 1,
      title: "Customer Experience",
      image: iphone2,
      points: [
        { text: "Track customer satisfaction with live feedback.", position: "left" },
        { text: "Analyze trends in real-time data.", position: "left" },
        { text: "Improve product features based on user insights.", position: "right" },
        { text: "Boost engagement through better UX.", position: "right" },
      ],
    },
    {
      id: 2,
      title: "Spot Light",
      image: iphone3,
      points: [
        { text: "Identify top-rated products instantly.", position: "left" },
        { text: "Showcase trending items based on customer love.", position: "left" },
        { text: "Understand what drives customer loyalty.", position: "right" },
        { text: "Gain insights into competitor analysis.", position: "right" },
      ],
    },
  ];
  

const SCROLL_THRESHOLD = 170; // Sensitivity for switching tabs
const NAVBAR_HEIGHT = 170; // Adjust based on your navbar height

const Insights = () => {
  const [activeTab, setActiveTab] = useState(0);
  const insightsRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDelta = useRef(0);
  const allowWindowScroll = useRef(false); // Flag to enable default scrolling

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
  
    const handleWheelScroll = (event: WheelEvent) => {
      if (!insightsRef.current || !tabsRef.current) return;
    
      const tabsTop = tabsRef.current.getBoundingClientRect().top;
      const isAtNavbar = tabsTop <= NAVBAR_HEIGHT + 10;
    
      if (!isAtNavbar) {
        allowWindowScroll.current = false;
        return;
      }
    
      if (!allowWindowScroll.current) {
        event.preventDefault();
      }
    
      if (isScrolling) return;
    
      scrollDelta.current += event.deltaY;
    
      if (Math.abs(scrollDelta.current) >= SCROLL_THRESHOLD) {
        if (scrollDelta.current > 0 && activeTab < tabs.length - 1) {
           setIsScrolling(true);
          setActiveTab((prev) => prev + 1);
          allowWindowScroll.current = false; // Disable window scroll
        } else if (scrollDelta.current < 0) {
          if (activeTab > 0) {
             setIsScrolling(true);
            setActiveTab((prev) => prev - 1);
            allowWindowScroll.current = false; // Disable window scroll
          } else {
             allowWindowScroll.current = true;
          }
        }
    
        scrollDelta.current = 0;
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };
    
  
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };
  
    const handleTouchMove = (event: TouchEvent) => {
      touchEndY = event.touches[0].clientY;
    };
  
    const handleTouchEnd = () => {
      const swipeDistance = touchStartY - touchEndY;
  
      if (Math.abs(swipeDistance) > SCROLL_THRESHOLD) {
        if (swipeDistance > 0 && activeTab < tabs.length - 1) {
          setIsScrolling(true);
          setActiveTab((prev) => prev + 1);
        } else if (swipeDistance < 0 && activeTab > 0) {
          setIsScrolling(true);
          setActiveTab((prev) => prev - 1);
        }
  
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };
  
    window.addEventListener("wheel", handleWheelScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  
    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeTab, isScrolling]);
  
  

  return (
    <section ref={insightsRef} id="Insights" className="w-full h-full py-20 sm:py-10 z-10 relative bg-white">
      <FadeIn>
        <div className="flex justify-center">
          <div className="w-screen xs:max-w-screen-xs sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl   text-black flex flex-col gap-5 ">
            <h1 className="xs:text-3xl xl:text-5xl lg:text-4xl w-[75%] xl:w-[75%] sm:w-full xs:w-full sm:text-3xl font-outfit font-semibold text-left xl:leading-[1.2]">
              Make Confident Purchase Decisions with Data-Driven Insights
            </h1>
            <h1 className="xl:text-4xl  sm:text-2xl xl:max-w-screen-xl sm:max-w-screen-sm font-outfit font-semibold" style={{ color: "#FF3269" }}>
              Directly on the brand’s website, powered by Capchek.
            </h1>
           <div className="flex items-start gap-3">
  <img 
    src={king}  
    alt="Crown Icon"
    className="w-6 sm:w-8 lg:w-10 h-auto"
  />
  <h1 className="text-2xl xs:text-xs sm:text-xl font-outfit font-medium leading-[1.2]">
    Like a king’s advisors 
    Capchek offers clear insights for smarter purchases and better brands.
  </h1>
</div>


            <div ref={tabsRef} className="flex gap-6 sm:gap-3 xs:gap-2 mt-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 xs:text-xs sm:text-sm lg:text-lg sm:text-xs xl:text-xl  font-medium rounded-full transition-all duration-300 ${
                    activeTab === tab.id ? "bg-[#6F55D2] text-white shadow-lg" : "bg-[#E5DEFF] text-black"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
<div className="flex justify-center">
            <div className="relative flex items-center justify-between w-[87%]">
        
            <div className="hidden md:flex flex-col gap-10 w-1/2">
  <AnimatePresence mode="wait">
    {tabs[activeTab].points
      .filter((point) => point.position === "left")
      .map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="relative text-lg xl:text-xl lg:text-lg sm:text-sm w-50 font-light text-gray-600"
        >
          {point.text}
        </motion.div>
      ))}
  </AnimatePresence>
</div>

<div className="relative w-full h-full flex items-center justify-center">
  <img
    src={iphoneback}
    alt="iPhone Background"
    className="absolute w-full h-full object-cover z-0"
  />
  
  <AnimatePresence mode="wait">
    <motion.img
      key={activeTab}
      src={tabs[activeTab].image}
      alt="Tab Image"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="relative xl:w-[280px] xl:h-[550px] lg:w-[280px] lg:h-[550px] md:w-[280px] md:h-[550px] sm:w-[320px] sm:h-[580px] transition-all duration-500 z-10"
    />
  </AnimatePresence>
</div>
 
<div className="hidden md:flex flex-col gap-10 w-1/2 text-right">
  <AnimatePresence mode="wait">
    {tabs[activeTab].points
      .filter((point) => point.position === "right")
      .map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="relative text-lg sm:text-sm xl:text-xl lg:text-lg  w-50 font-light text-gray-600"
        >
          {point.text}
        </motion.div>
      ))}
  </AnimatePresence>
</div>
          </div>
          </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Insights;
