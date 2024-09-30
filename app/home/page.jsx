"use client"

import { useState, useEffect } from 'react'
import Image from "next/image";
// import { motion, AnimatePresence } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Cake, Gift } from 'lucide-react'
import image from './image.png'

export default function page() {
    const [showConfetti, setShowConfetti] = useState(false)
    const [showGift, setShowGift] = useState(false)
    const [balloons, setBalloons] = useState([])

    useEffect(() => {
        if (showConfetti) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })
        }
    }, [showConfetti])

    const handleCakeClick = () => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
    }

    const handleGiftClick = () => {
        setShowGift(true)
        setTimeout(() => setShowGift(false), 3000)
    }

    const addBalloon = () => {
        const newBalloon = {
            id: Date.now(),
            x: Math.random() * 100,
            y: 110 + Math.random() * 10,
        }
        setBalloons(prev => [...prev, newBalloon])
        setTimeout(() => {
            setBalloons(prev => prev.filter(b => b.id !== newBalloon.id))
        }, 5000)
    }

    useEffect(() => {
        const interval = setInterval(addBalloon, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden">
            <motion.div
                className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative p-6">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-pink-50 opacity-50">
                        {[...Array(100)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-pink-200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.01, duration: 0.5 }}
                                style={{
                                    top: Math.random() * 100 + '%',
                                    left: Math.random() * 100 + '%',
                                    fontSize: '8px',
                                }}
                            >
                                ♥
                            </motion.div>

                        ))}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex mb-4">
                            <div className="w-1/2 pr-4">
                                <motion.div
                                    className="bg-white p-2 rounded-lg shadow-md transform rotate-[-4deg] w-25 h-50" // set width and height here
                                    initial={{ rotate: -8, scale: 0.9 }}
                                    animate={{ rotate: -4, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.05, rotate: 0 }}
                                >
                                    <div className="relative w-full h-full"> {/* Set full height/width for containing the image */}
                                        <Image
                                            src={image}
                                            alt="Birthday girl"
                                            className="rounded object-cover" // object-cover ensures the image covers the entire container and stays square
                                            width={500} 
                                            height={300}
                                            layout="responsive" 
                                        />
                                    </div>
                                </motion.div>
                            </div>
                            <div className="w-1/2 pl-4 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">HEY GIRL!</h2>
                                    <h1 className="text-4xl font-bold text-pink-500 mb-2">HAPPY BIRTHDAY</h1>
                                    <h1 className="text-5xl font-bold text-pink-600">Aashritha</h1>
                                </motion.div>
                                <motion.div
                                    className="flex space-x-2 mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleGiftClick}
                                    >
                                        <Gift className="text-pink-500 cursor-pointer" size={32} />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleCakeClick}
                                    >
                                        <Cake className="text-pink-500 cursor-pointer" size={32} />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        <motion.p
                            className="text-center text-gray-700 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            IN ALL THE ALTERNATE UNIVERSES, I'D STILL PICK YOU TO BE MY BEST PAL.
                        </motion.p>
                        <motion.p
                            className="text-center text-pink-600 font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            I'M ALWAYS HERE FOR YOU
                        </motion.p>
                    </div>


                    {/* Bunting */}
                    <div className="absolute top-0 left-0 w-full overflow-hidden">
                        <svg width="100%" height="48" viewBox="0 0 100 48" preserveAspectRatio="none">
                            {[...Array(7)].map((_, i) => (
                                <motion.path
                                    key={i}
                                    d={`M${i * 16.67} 0 L${(i + 0.5) * 16.67} 48 L${(i + 1) * 16.67} 0`} // Corrected template literal
                                    fill={i % 2 === 0 ? '#FED7D7' : '#FFF5F5'}
                                    initial={{ y: -48 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                />
                            ))}
                        </svg>

                    </div>

                    {/* Gift animation */}
                    <AnimatePresence>
                        {showGift && (
                            <motion.div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                transition={{ duration: 0.5 }}
                            >
                                🎁
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating balloons */}
                    {balloons.map(balloon => (
                        <motion.div
                            key={balloon.id}
                            className="absolute text-4xl"
                            initial={{ bottom: '-10%', left: balloon.x + '%' }} // Corrected initial style
                            animate={{ bottom: '110%' }}
                            transition={{ duration: 5, ease: 'easeOut' }}
                            style={{ left: balloon.x + '%' }} // Corrected inline style
                        >
                            🎈
                        </motion.div>
                    ))}

                </div>

            </motion.div>
        </div>
    )
}