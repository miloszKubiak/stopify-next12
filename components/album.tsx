import { Button, Panel } from "rsuite";
import Link from "next/link";

type AlbumProps = {
  id: string;
  title: string;
  artist: string;
  songs: string[];
};

export const Album = ({ id, title, artist }: AlbumProps) => {
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", width: 240 }}
    >
      <img
        src="https://via.placeholder.com/240x240"
        height="240"
        alt="album image"
      />
      <Panel header={title}>
        <h1>{artist}</h1>
        <Link href={`/albums/${id}`}>
          <Button className="bg-green-400">Details</Button>
        </Link>
      </Panel>
    </Panel>
  );
};
