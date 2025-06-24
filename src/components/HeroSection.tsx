import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

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
    <section className="py-16 md:pt-24 md:pb-12 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}
              {/* {" "}
              <span className="inline-block animate-pulse">✨</span> */}
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-4"
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
                className="flex items-center text-md text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:hover:text-purple-500 transition-colors"
                variants={childVariants}
              >
                <MapPin className="h-4 w-4 mr-2" />
                📍 {personalInfo.location}
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-md text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:hover:text-purple-500 transition-colors"
                variants={childVariants}
              >
                <Mail className="h-4 w-4 mr-2" />
                ✉️ {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-md text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:hover:text-purple-500  transition-colors"
                variants={childVariants}
              >
                <Github className="h-4 w-4 mr-2" />
                🌟 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-md text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:hover:text-purple-500 transition-colors"
                variants={childVariants}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                🔗 LinkedIn
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
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://avatars.githubusercontent.com/u/37670217"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-purple-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <p className="text-muted-foreground pl-4 py-2 mb-0 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              🚀 <span dangerouslySetInnerHTML={{ __html: personalInfo.bio }} />
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
