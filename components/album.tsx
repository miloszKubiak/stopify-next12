import { Button, List, Panel } from "rsuite";
import Link from "next/link";
import Image from "next/image";

type Album = {
  id: string;
  title: string;
  artist: string;
  year: string;
  cover: string;
  songs: { title: string }[];
};
type AlbumListItem = Omit<Album, "year" | "songs">;
type AlbumDetails = Omit<Album, "id">;

type AlbumListItemProps = {
  data: AlbumListItem;
};

type AlbumDetailsProps = {
  data: AlbumDetails;
};

export const AlbumDetails = ({ data }: AlbumDetailsProps) => {
  return (
    <Panel bordered header={data.title} style={{ backgroundColor: "white" }}>
      <List style={{ padding: 20 }}>
        <Image
          src={data.cover}
          width={340}
          height={340}
          alt={`Cover of the ${data.title} album.`}
        />
        <List.Item>{data.artist}</List.Item>
        <List.Item>Year: {data.year}</List.Item>
        <List.Item className="flex gap-2">
          Songs:
          <div>
            {data.songs?.map((song) => (
              <div key={song.title}>{song.title}</div>
            ))}
          </div>
        </List.Item>
      </List>
    </Panel>
  );
};

export const AlbumListItem = ({ data }: AlbumListItemProps) => {
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", width: 300 }}
    >
      <Image
        src={data.cover}
        width={300}
        height={300}
        alt={`Cover of the ${data.title} album.`}
      />
      <div className="p-2 my-0 bg-zinc-200-200 flex justify-between items-center">
        <div>
          <h1 className="font-bold">{data.artist}</h1>
          <p>{data.title}</p>
        </div>
        <Link href={`/albums/${data.id}`}>
          <Button className="bg-green-400">Details</Button>
        </Link>
      </div>
    </Panel>
  );
};
