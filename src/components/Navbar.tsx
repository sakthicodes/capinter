import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../assets";
import { navLinksdata } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to adjust navbar height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Animated Background Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#FFF2F2] to-[#FFD3D2] backdrop-blur-2xl  transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      ></motion.div>

      {/* Navbar Container */}
      <motion.div
        className={`max-w-screen-xl fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center font-titleFont px-6 w-full transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={logo}
            alt="logo"
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "h-10" : "h-12"
            }`}
          />
        </motion.div>

         <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden mdl:flex items-center gap-8"
        >
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-outfit font-medium text-gray-700 tracking-wide cursor-pointer hover:text-[#6F55D2] transition-all duration-300"
              >
                {title}
              </Link>
            </li>
          ))}
        </motion.ul>

         <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className={`text-base text-white bg-violet-600 py-2 px-6 rounded-full shadow-md cursor-pointer hover:bg-violet-700 transition-all duration-300 ${
            isScrolled ? "text-sm py-1 px-4" : "text-base py-2 px-6"
          }`}
        >
          For Brands
        </motion.span>

        {/* Mobile Menu Button */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer hover:bg-gray-800 transition-all duration-300"
        >
          <FiMenu />
        </span>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-[80%] h-screen mdl:hidden fixed top-0 left-0 bg-white p-6"
            >
              <div className="flex flex-col gap-8 py-2 relative">
                {/* Logo */}
                <div>
                  <img className="w-32" src={logo} alt="logo" />
                  <p className="text-sm text-gray-400 mt-2">
                    
                  </p>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col gap-6">
                  {navLinksdata.map(({ _id, title, link }) => (
                    <motion.li
                      key={_id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + _id * 0.1 }}
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-lg font-medium text-gray-400 hover:text-[#6F55D2] transition-all duration-300"
                      >
                        {title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-lg uppercase text-gray-400 font-bold">
                    Follow Us
                  </h2>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href=" "
                      target="_blank"
                      className="text-gray-400 hover:text-red-500 transition-all duration-300"
                    >
                      <FaYoutube size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href=" "
                      target="_blank"
                      className="text-gray-400 hover:text-blue-600 transition-all duration-300"
                    >
                      <FaLinkedinIn size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href=""
                      target="_blank"
                      className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                    >
                      <FaFacebookF size={24} />
                    </motion.a>
                  </div>
                </div>

                 <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-[#FF3269] transition-all duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
