import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { bannerleft, king } from "../assets";

const bannerData = [
  {
    title: "Is <span class='text-red-600' style= 'color: #FF3269'>Customer Truly King</span> in Digital Purchases?",
    description:
      "Capchek makes it happen—giving you pre-purchase insights, direct brand support, and 5% cashback—while your experience guides future buyers and helps brands improve.",
  },
  {
    title: "Buyers Deserves <span class='text-red-600'  style= 'color: #FF3269'> Clarity & Support </span>in Every Digital Purchase",
    description:
      "Capchek provides real customer insights before your digital purchase and ensures brands support you after—because every king deserves a seamless shopping experience.",
  },
  {
    title: "Buyers <span class='text-red-600'  style= 'color: #FF3269'> Experience Creates Impact </span> and Drives Better Choices.",
    description:
      "Capchek rewards you with 5% cashback for sharing your product behaviour and experience, helping others make informed choices, and enabling brands to improve with real insights.",
  },
];

const LeftBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FadeIn className="w-full flex flex-col gap-20">
      <img
        className="absolute left-[-5%] bottom-[-15%] w-[450px] h-[85%] lgl:w-[580px] lgl:h-[85%] z-5"
        src={bannerleft}
        alt="bannerleft"
      />
      <div className="flex flex-col gap-5">
        <h4 className="text-3xl sm:text-xl font-outfit font-normal lg:pb-10 sm:pt-10 "style={{ color: "#6F55D2" }}>
          Capchek beta version is getting ready!
        </h4>
        <motion.h1
  key={index}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black lg:leading-[1.5] sm:tracking-normal"
  dangerouslySetInnerHTML={{ __html: bannerData[index].title }}
/>

        <motion.p
          key={`desc-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="w-[95%] text-base font-bodyFont leading-6 sm:text-sm text-gray-500 tracking-wider"
        >
          <span className="font-bold text-black">Capchek makes it happen</span>— {bannerData[index].description}
        </motion.p>
        <div className="flex items-center gap-3">
  <img 
    src={king}  
    alt="Crown Icon"
    className="w-6 sm:w-8 lg:w-10 h-auto"
  />
  <h4 className="text-xl font-outfit font-normal text-red-600 lg:pb-10 sm:pt-10">
    A brand can build a great kingdom only when every customer is treated like a king.
  </h4>
</div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
