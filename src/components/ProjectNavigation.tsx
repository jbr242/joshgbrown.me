import { motion } from "framer-motion";
import { ProjectItem } from "./ProjectItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2];
export const ProjectNavigation = () => (
  <motion.ul variants={variants} className="p-[25px] ml-[10vw] w-[230px]">
    {itemIds.map((i) => (
      <ProjectItem index={i} key={i} text={"FilmFlix"} iconPath={"a"} />
    ))}
  </motion.ul>
);
