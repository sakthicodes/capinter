import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { ficon1, ficon2, ficon3, ficon4 } from "../assets";

// Data for Cards & Paragraphs
const cardsData = [
  {
    icons: ficon1,
    title: "Authentic Product Experiences",
    shortDesc: "Read genuine feedback from verified customers who bought directly from the brand.",
    detailDesc:
      "Capchek ensures that every product experience shared is from real buyers who have made a verified purchase directly from the brand. This eliminates fake or misleading reviews that often manipulate customer perception. With Capchek, buyers can confidently rely on honest experiences that reflect actual product performance.",
  },
  {
    icons: ficon2,
    title: "Earn Rewards and Cashback",
    shortDesc: "Collect points and cashback by sharing product experiences and high-quality videos, redeemable for rewards.",
    detailDesc:
      "Capchek encourages customers to share their product experiences through WhatsApp, allowing them to earn a 5% cashback reward.  Whether your experience is positive or negative, your feedback helps improve future products and benefits both you and future shoppers. By simply sharing their thoughts, buyers get rewarded while helping others make informed decisions.",
  },
  {
    icons: ficon3,
    title: "Personalized Suggestions",
    shortDesc: "Get recommendations for better-suited products if expectations aren’t met.",
    detailDesc:
      "Every customer has unique needs, and sometimes a product might not fully meet their expectations. Capchek analyzes customer preferences and expectations, then recommends better-suited alternatives. Instead of feeling stuck with an unsatisfactory product, buyers can explore options that better match their needs, leading to greater satisfaction.",
  },
  {
    icons: ficon4,
    title: "Post Purchase Support:",
    shortDesc: "Track the status of issues and communicate directly with brands for quick resolutions..",
    detailDesc:
      "If a customer encounters an issue with a product, Capchek makes it easy to report the problem and track its resolution. Instead of struggling with customer service delays, buyers can see real-time updates on their issue’s progress and directly communicate with brands. This ensures a faster, smoother resolution process, leading to a better post-purchase experience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Feature = () => {
  const [index, setIndex] = useState(0);

  // Handle scrolling up and down
  const handleScroll = (direction: "up" | "down") => {
    setIndex((prevIndex) =>
      direction === "up"
        ? (prevIndex - 1 + cardsData.length) % cardsData.length
        : (prevIndex + 1) % cardsData.length
    );
  };
  
  const getVisibleCards = () => {
    const extendedData = [...cardsData, ...cardsData]; // Ensure seamless looping
    return extendedData.slice(index, index + 3);
  };
  
  const activeCard = getVisibleCards()[1]; // The middle card (i === 1) should be active
  
  
  

  return (
    <section id="features" className="w-full py-20 xs:py-10 z-10 relative bg-white">
      <FadeIn>
        <div className="w-full px-20 xs:px-1 flex justify-center">
          <div className="w-screen xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl text-black flex flex-col gap-10 sm:gap-0">
                <h1 className="lg:text-5xl w-1/2 xs:text-2xl xs:w-full  sm:w-full sm:text-3xl lg:w-1/2 xs:font-semibold  sm:font-semibold lg:font-semibold text-left xl:leading-[1.2]  xl:max-w-screen-xl md:max-w-screen-md md:w-[100%]">
                Features for Buyers of{" "}
                <span className="" style={{color: "#FF3269" }}>Capchek Powered Brands</span>
              </h1>
              <div className="w-screen  text-black flex flex-col lg:flex-row items-start justify-between">
                        <div className="w-full lg:w-[100%] xs:max-w-screen-xs sm:max-w-screen-sm flex flex-col justify-center">
                        
                           <motion.p 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="mt-6 xs:mt-1 text-xl sm:text-sm xs:text-sm lg:text-lg xl:text-xl xs:leading-[1.8] sm:text-lg sm:text-black-400 leading-[1.8] text-black-800"
                          >
                             {activeCard?.detailDesc}
                             </motion.p>
                        </div>

                        <div className="w-full flex flex-col items-center justify-start">
                          <div className="relative lg:w-1/2 flex flex-col gap-4">
                            <AnimatePresence mode="popLayout">
                            {getVisibleCards().map((card, i) => (
                            <motion.div
                            key={`${card.title}-${i}`} 
                            className={`w-full p-6 text-left flex flex-row items-center gap-10 transition-all duration-300 rounded-lg ${
                              i === 1
                                ? "bg-gray-100 border border-gray-300 scale-105"
                                : "bg-gray-50 opacity-50"
                            }`}
                            style={
                              i === 1
                                ? { boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)" }
                                : { boxShadow: "inset 0px 80px 90px 0px rgba(255, 255, 255, 1)" }
                            }
                            variants={cardVariants}
                            initial="hidden"
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                            animate="visible"
                            exit="exit"
                          >
                             <div
                              className={`flex flex-row gap-10 sm:gap-2 xs:gap-2 ${
                                i === 0 ? "justify-start opacity-50" : i === 2 ? "justify-end opacity-50" : "justify-center"
                              }`}
                            >
                               <img src={card.icons} alt="" className="w-[70px] h-[70px] sm:w-[40px] sm:h-[40px] xs:w-[40px] xs:h-[40px]" />
                              <div>
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                                <p className="text-gray-500 mt-1 sm:text-sm xs:text-xs">{card.shortDesc}</p>
                              </div>
                            </div>
                          </motion.div>
                          
                              ))}
                            </AnimatePresence>
                          </div>

                           <div className="absolute right-[3%] top-[60%] transform -translate-y-1/2 flex flex-col gap-4">
                            <button
                              onClick={() => handleScroll("up")}
                              className="p-5 bg-white text-black rounded-s disabled:opacity-50"
                              style={{boxShadow: "0px 4px 40px 0px #00000040"}}
                            >
                              <FaChevronUp />
                            </button>
                            <button
                              onClick={() => handleScroll("down")}
                              className="p-5 bg-white text-black rounded-s disabled:opacity-50"
                              style={{boxShadow: "0px 4px 40px 0px #00000040"}}
                            
                            >
                              <FaChevronDown />
                            </button>
                          </div>
                        </div>
            </div>


          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
