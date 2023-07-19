import { List, Panel, PanelGroup } from "rsuite";
import Image from "next/image";

export type Album = {
  id: string;
  title: string;
  artist: string;
  year: string;
  cover: string;
  songs: { title: string }[];
};

type AlbumDetails = Omit<Album, "id">;
type AlbumDetailsProps = {
  data: AlbumDetails;
};

export const AlbumDetails = ({ data }: AlbumDetailsProps) => (
  <Panel
    shaded
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
              {data.songs?.map(({ title }, index) => (
                <p key={index}>
                  {index + 1}. {title}
                </p>
              ))}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </List>
  </Panel>
);
