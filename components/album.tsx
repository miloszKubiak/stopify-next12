import { Button, List, Panel } from "rsuite";
import Link from "next/link";

type Album = {
  id: string;
  title: string;
  artist: string;
  year: string;
  cover: string;
  songs: { title: string }[];
};

type AlbumListItemProps = Omit<Album, "year" | "songs">;

type AlbumDetailsProps = Omit<Album, "id">;

export const AlbumDetails = ({
  title,
  artist,
  year,
  cover,
  songs,
}: AlbumDetailsProps) => {
  return (
    <Panel header={title}>
      <List style={{ padding: 20 }}>
        <img
          className="w-full"
          src={cover}
          alt={`Cover of the ${title} album.`}
        />
        <List.Item>{artist}</List.Item>
        <List.Item>Year: {year}</List.Item>
        <List.Item className="flex gap-2">
          Songs:
          <div className="">
            {songs?.map((song) => (
              <div key={song.title}>{song.title}</div>
            ))}
          </div>
        </List.Item>
      </List>
    </Panel>
  );
};

export const AlbumListItem = ({
  id,
  title,
  artist,
  cover,
}: AlbumListItemProps) => {
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", width: 240 }}
    >
      <img src={cover} height="240" alt="album image" />
      <Panel header={title}>
        <h1>{artist}</h1>
        <Link href={`/albums/${id}`}>
          <Button className="bg-green-400">Details</Button>
        </Link>
      </Panel>
    </Panel>
  );
};
