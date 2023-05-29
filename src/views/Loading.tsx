import { useEffect, useState } from "react";

type LoadingProps = {
  loaded: boolean;
};

export default function Loading({ loaded }: LoadingProps) {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    let timeout: number | null = null;
    if (loaded) {
      timeout = setTimeout(() => setIsTransitioning(false), 1000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [loaded]);

  return (
    <div
      className="fixed inset-0 bg-gray-200 z-10 flex min-w-[100vw] min-h-screen justify-center items-center text-center
       data-[loaded=true]:opacity-0 data-[loaded=true]:translate-y-40 data-[is-transitioning=false]:data-[loaded=true]:-z-50 transition-all duration-1000"
      data-loaded={loaded}
      data-is-transitioning={isTransitioning}
    >
      <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-400"></div>
    </div>
  );
}
