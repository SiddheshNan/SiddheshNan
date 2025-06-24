import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  companyName?: string;
  companyLink?: string;
  isCompany?: boolean;
  cgpa?: string;
  isLast?: boolean;
  index?: number;
  children?: React.ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  companyName,
  companyLink,
  isCompany = false,
  cgpa,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {!cgpa && (
        <div className="flex flex-col items-center">
          <motion.div
            className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-purple-500/50 bg-background dark:bg-muted z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: index * 0.2 + 0.2,
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="h-[10px] w-[10px] rounded-full bg-purple-500 dark:bg-purple-400" />
          </motion.div>
          {!isLast && (
            <motion.div
              className="w-px grow bg-gradient-to-b from-purple-500/50 to-pink-500/30 dark:from-purple-500/30 dark:to-pink-500/10"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            />
          )}
        </div>
      )}

      <div className={cn("pb-8", isLast ? "pb-0" : "")}>
        <motion.div
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-lg font-medium">
            {isCompany ? (
              <>
                {title} @
                <a
                  href={companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 underline ml-1 inline-flex items-center underline-offset-5 gap-1"
                >
                  {companyName}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 inline-block transition-transform duration-100 group-hover:translate-x-1"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="48"
                        stroke-dashoffset="48"
                        d="M11 5h-6v14h14v-6"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="48;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="12"
                        stroke-dashoffset="12"
                        d="M13 11l7 -7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.6s"
                          dur="0.2s"
                          values="12;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="8"
                        stroke-dashoffset="8"
                        d="M21 3h-6M21 3v6"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.8s"
                          dur="0.2s"
                          values="8;0"
                        />
                      </path>
                    </g>
                  </svg>
                </a>
              </>
            ) : (
              <>{title}</>
            )}
          </h3>
          <p className="text-md ">{subtitle}</p>
          <p className="text-md text-muted-foreground">{date}</p>
          {cgpa && (
            <p className="text-md text-muted-foreground">
              📝 CGPA: <span className="font-semibold">{cgpa}</span>
            </p>
          )}
        </motion.div>
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
