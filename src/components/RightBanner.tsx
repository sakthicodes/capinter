import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { backdots, bannerimg1, bannerimg2, bannerimg3, rightarrow } from "../assets";

const floatingAnimation = {
  y: [0, -10, 0],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

const issuesData = [
  {
    image: bannerimg1,
    floatingTexts: [
      { text: "Unproven Promises", bgColor: "#FFE4CE" },
      { text: "Trust Issues", bgColor: "#DDE8FF" },
      { text: "Less Accountability", bgColor: "#F6CCFF" },
    ],
  },
  {
    image: bannerimg2, // Replace with another image if needed
    floatingTexts: [
      { text: "Hidden Fees", bgColor: "#FFC4E1" },
      { text: "Delayed Support", bgColor: "#C4E1FF" },
      { text: "Limited Return Options", bgColor: "#D4F7C5" },
    ],
  },
  {
    image: bannerimg3, // Replace with another image if needed
    floatingTexts: [
      { text: "Confusing Policies", bgColor: "#F5D3A1" },
      { text: "Unverified Reviews", bgColor: "#A1D3F5" },
      { text: "Low Transparency", bgColor: "#E5C5FF" },
    ],
  },
];

const RightBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % issuesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FadeIn className="w-full flex justify-end items-center relative">
       <div className="absolute bottom-[-12%] right-[-15%] w-[450px] h-[85%] lgl:w-[580px] lgl:h-[85%] bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 rounded-full z-0"></div>
      <motion.img
        key={index}
        src={issuesData[index].image}
        alt="bannerImg"
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="ms-20 w-[350px] -mb-10 h-[400px] lgl:w-[580px] lgl:h-[650px] z-10 relative rounded-lg"
      />

<motion.img
        className="absolute top-[28%] left-[3%] w-22 h-10 z-10 sm:w-18 sm:h-8 xs:w-18 xs:h-7 sm:rotate-90"
        src={rightarrow}
        alt="rightarrow"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

{issuesData[index].floatingTexts.map((item, idx) => (
  <motion.div
    key={idx}
    className="absolute z-10 text-black px-4 py-2 
               text-center font-semibold shadow-md
               xs:text-xs
               sm:w-35 sm:text-sm 
               md:w-41 md:text-base 
               lg:w-48 lg:text-lg"
    style={{
      backgroundColor: item.bgColor,
      borderRadius: "5px 50px 5px 50px",

      
      top: idx === 0 ? "40%" : idx === 1 ? "50%" : "60%",
      left: idx === 0 
        ? "5%" 
        : idx === 1 
          ? "75%" 
          : "10%",

       ...(window.innerWidth < 640 && {
        top: idx === 0 ? "20%" : idx === 1 ? "55%" : "65%",
        left: idx === 0 ? "5%" : idx === 1 ? "50%" : "15%",
      }),

       ...(window.innerWidth >= 640 && window.innerWidth < 1024 && {
        top: idx === 0 ? "35%" : idx === 1 ? "52%" : "62%",
        left: idx === 0 ? "7%" : idx === 1 ? "65%" : "12%",
      }),
    }}
    animate={floatingAnimation}
    transition={{ delay: idx * 0.3 }}
  >
    {item.text}
  </motion.div>
))}

      <img
        className="absolute bottom-[1%] right-[-10%] w-13 h-13 z-5"
        src={backdots}
        alt="backdots"
      />
    </FadeIn>
  );
};

export default RightBanner;
