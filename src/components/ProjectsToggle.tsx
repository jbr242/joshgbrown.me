type ProjectToggleProps = {
  toggle: () => void;
};

export const ProjectsToggle = ({ toggle }: ProjectToggleProps) => (
  <button onClick={toggle} className="text-l font-semibold sm:text-l">
    University Projects
  </button>
);
