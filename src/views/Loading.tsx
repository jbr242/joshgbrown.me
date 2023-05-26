type LoadingProps = {
  loaded: boolean;
};

export default function Loading({ loaded }: LoadingProps) {
  return (
    <div
      className="fixed inset-0 bg-white z-10 flex min-w-[100vw] min-h-screen justify-center items-center text-center
        data-[loaded=true]:opacity-0 data-[loaded=true]:-translate-y-20 transition-all duration-1000"
      data-loaded={loaded}
    >
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  );
}
