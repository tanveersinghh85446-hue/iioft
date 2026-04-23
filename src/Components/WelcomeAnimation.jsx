import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeAnimation() {
  const [show, setShow] = useState(true); // ✅ Har refresh pe true
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 3000);
    setTimeout(() => setShow(false), 3800);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 bg-blue-800 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing ring */}
          <motion.div
            className="absolute w-72 h-72 rounded-full border-4 border-blue-400 opacity-20"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full border-4 border-blue-500 opacity-20"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.6,
            }}
          />

          {/* Welcome Text */}
          <motion.p
            className="text-blue-400 uppercase tracking-[0.3em] text-2xl font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Welcome to
          </motion.p>

          <motion.h1
            className="text-white text-4xl sm:text-6xl font-extrabold tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
          >
            <img src="/Logo.png" alt="IIoFT Logo" />
          </motion.h1>

          <motion.p
            className="text-blue-100 text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 tracking-wide sm:tracking-widest uppercase text-center px-3 sm:px-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            International Institute of Futuristic Technology
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="mt-4 text-2xl sm:text-base text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <span className="text-red-500 font-bold">Think Smart</span> |{" "}
            <span className="text-yellow-400 font-bold">Learn Smart</span>
          </motion.p>

          {/* Sub Tagline */}
          <motion.p
            className="mt-2 text-xl font-bold sm:text-sm text-yellow-400 text-center tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            Skill Up with{" "}
            <span className="font-semibold text-blue-400">IIOFT</span>
          </motion.p>

          {/* Bottom loading bar */}
          <motion.div className="absolute bottom-10 w-48 h-1 bg-blue-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
