import { ReactNode } from "react";

export const GridList = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-4">
      <h1 className="py-4 font-bold text-center text-3xl">List of Artists</h1>
      <div className="xl:max-w-[80vw] px-4 flex flex flex-wrap items-center justify-center gap-4">
        {children}
      </div>
    </div>
  );
};
