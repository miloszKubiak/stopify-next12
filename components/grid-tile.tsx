import Image from "next/image";
import { Panel } from "rsuite";
import styles from "../styles/Home.module.css";

type GritTileProps = {
  image: string;
  title: string;
  description?: string;
};

export const GridTile = ({ image, title, description }: GritTileProps) => {
  return (
    <Panel
      className={styles.tile}
      bordered
      bodyFill
      style={{
        display: "inline-block",
        width: 300,
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={`Image of the ${title}.`}
          width={300}
          height={300}
        />
      </div>

      <div className="p-4 bg-zinc-100 flex justify-between items-center">
        <div>
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </Panel>
  );
};
