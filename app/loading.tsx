"use client"
import { motion } from "framer-motion";


export default function Loading() {
  // Or a custom loading skeleton component
  return <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center h-screen bg-gray-900"
    >
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Cercle de chargement animé */}
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.div>

        {/* Texte animé */}
        <motion.p
          className="mt-5 text-white text-lg font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
         TITOMEET....
        </motion.p>
      </motion.div>
    </motion.div>
  </>
}