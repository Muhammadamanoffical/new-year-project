'use client'

import { motion } from 'framer-motion'

export const CelebrationScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.h1
          className="text-6xl font-bold text-white mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
        >
          Happy New Year!
        </motion.h1>
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        >
          <span role="img" aria-label="cupcake" className="text-9xl">🧁</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

