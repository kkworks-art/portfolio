import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-start lg:pl-[350px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 text-center lg:text-left"
      >
        <h1 className="text-5xl lg:text-7xl mb-6 bg-gradient-to-br from-green-800 to-emerald-700 bg-clip-text text-transparent font-bold">
          KAORI KOBAYASHI
        </h1>
        <p className="text-xl lg:text-2xl text-gray-700 mb-12 tracking-wide">
          Portfolio & Works
        </p>
        
        <Link to="/works">
          <motion.button
            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto lg:mx-0 hover:shadow-lg hover:shadow-green-500/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Works</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}