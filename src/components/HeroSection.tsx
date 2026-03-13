import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import FloatingShapes, { HERO_SHAPES } from "./FloatingShapes";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 md:pt-28 md:pb-16 relative overflow-hidden cara-section">
      {/* Cara-style floating geometric shapes */}
      <FloatingShapes shapes={HERO_SHAPES} />

      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-3 text-transparent dark:text-white  bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500"
              variants={childVariants}
            >
              {personalInfo.name}
              {/* {" "}
              <span className="inline-block animate-pulse">✨</span> */}
            </motion.h1>

            <motion.p
              className="text-xl  dark:text-gray-100 mb-4 font-medium tracking-wide"
              variants={childVariants}
            >
              Software Engineer 👨‍💻
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.a
                href={personalInfo.locationLink}
                target="_blank"
                className="flex items-center text-md text-gray-800 dark:text-gray-200 hover:text-indigo-400 transition-colors"
                variants={childVariants}
              >
                <MapPin className="h-4 w-4 mr-3" />
                {personalInfo.location}
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-md text-gray-800 dark:text-gray-200 hover:text-indigo-400 transition-colors"
                variants={childVariants}
              >
                <Mail className="h-4 w-4 mr-3" />
                 {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-md text-gray-800 dark:text-gray-200 hover:text-indigo-400  transition-colors"
                variants={childVariants}
              >
                <Github className="h-4 w-4 mr-3" />
                 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-md text-gray-800 dark:text-gray-200 hover:text-indigo-400 transition-colors"
                variants={childVariants}
              >
                <Linkedin className="h-4 w-4 mr-3" />
                 LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://avatars.githubusercontent.com/u/37670217"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-indigo-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-indigo-500/20 dark:border-indigo-500/10 shadow-sm">
            <p className=" pl-4 py-2 mb-0 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full"></span>
              🚀 <span dangerouslySetInnerHTML={{ __html: personalInfo.bio }} />
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
