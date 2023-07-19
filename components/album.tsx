import { Button, List, Panel, PanelGroup } from "rsuite";
import Link from "next/link";
import Image from "next/image";

export type Album = {
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
    <Panel
      bordered
      header={data.title}
      style={{
        backgroundColor: "white",
        margin: 20,
        fontWeight: "bold",
      }}
    >
      <List>
        <Image
          src={data.cover}
          width={340}
          height={340}
          alt={`Cover of the ${data.title} album.`}
        />
        <List.Item>{data.artist}</List.Item>
        <List.Item>Released: {data.year}</List.Item>
        <div className="flex gap-2 my-4">
          <PanelGroup accordion defaultActiveKey={1} bordered>
            <Panel header="Songs" style={{ width: 280 }}>
              <div>
                {data.songs?.map((song, index) => (
                  <p key={index}>
                    {index + 1}. {song.title}
                  </p>
                ))}
              </div>
            </Panel>
          </PanelGroup>
        </div>
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
      <div className="p-4 bg-zinc-100 flex justify-between items-center">
        <div>
          <h1 className="font-bold">{data.artist}</h1>
          <p>{data.title}</p>
        </div>
        <Link href={`/albums/${data.id}`}>
          <Button style={{ backgroundColor: "rgb(74 222 128)" }}>
            Details
          </Button>
        </Link>
      </div>
    </Panel>
  );
};
