import { ReactNode } from "react";

type GridListProps = {
  children: ReactNode;
  title: string;
};

export const GridList = ({ children, title }: GridListProps) => (
  <div className="my-4">
    <h1 className="py-4 font-bold text-center text-3xl">{title}</h1>
    <div className="xl:max-w-[80vw] px-4 flex flex flex-wrap items-center justify-center gap-4">
      {children}
    </div>
  </div>
);
