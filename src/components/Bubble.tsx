import { useEffect, useState } from "react";

type BubbleProps = {
  position: string;
  tags: {
    label: string;
    colour: string;
    bg: string;
  }[];
  info: {
    description: string;
    title: string;
  };
  isOpen: boolean;
};

export function Bubble(props: BubbleProps) {
  const [delay, setDelay] = useState(Math.random() * 1000);

  useEffect(() => {
    setDelay(Math.random() * 1000);
  }, [props.isOpen]);
  return (
    <div
      className={`${props.position} rounded-full bg-white fixed scale-0
                data-[open=true]:scale-100 transition-all duration-1000 
                flex items-center justify-center data-[open=true]:delay-[attr(data-delay)] delay-500 ease-in-out shadow-lg flex-col gap-1 bg-white-500 
                hover:-translate-y-[calc(50%+1rem)] hover:scale-110 hover:bg-gray-200 hover:brightness-105 hover:duration-300`}
      data-open={props.isOpen}
      style={{
        transitionDelay: props.isOpen ? `${delay}ms` : undefined,
      }}
    >
      <h1 className="font-bold text-5xl">{props.info.title}</h1>
      <div className="flex flex-row w-full items-center justify-center flex-wrap text-center gap-1">
        {props.tags.map((each) => (
          <div
            key={each.label}
            className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${each.bg} ${each.colour} rounded-full`}
          >
            {each.label}
          </div>
        ))}
      </div>
      <div className="text-sm p-2 text-center">{props.info.description}</div>
    </div>
  );
}
