import { Button, List, Panel } from "rsuite";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export type Artist = {
  id: string;
  name: string;
  bio: string;
  year: string;
  members: string[];
  image: string;
  albums: { id: string; title: string }[];
};
type ArtistDetails = Omit<Artist, "id">;
type ArtistListItem = Pick<Artist, "id" | "name">;

type ArtistDetailsProps = {
  data: ArtistDetails;
};
type ArtistListItemProps = {
  data: ArtistListItem;
};

export const ArtistDetails = ({ data }: ArtistDetailsProps) => {
  return (
    <div className="py-4 px-2">
      <List bordered style={{ backgroundColor: "white" }}>
        <Image
          width={340}
          height={340}
          src={data.image}
          alt={`Members of the ${data.name} band.`}
        />
        <List.Item>{data.name}</List.Item>
        <List.Item>Bio: {data.bio}</List.Item>
        <List.Item>Year: {data.year}</List.Item>
        <List.Item className="flex gap-2">
          Members:
          <div>
            {data.members?.map((member, index) => (
              <div key={index}>{member}</div>
            ))}
          </div>
        </List.Item>
        <List.Item className="flex gap-2">
          Albums:
          <div className="flex flex-col">
            {data.albums?.map((album) => (
              <Link key={album.id} href={`/albums/${album.id}`}>
                {album.title}
              </Link>
            ))}
          </div>
        </List.Item>
      </List>
    </div>
  );
};

export const ArtistListItem = ({ data }: ArtistListItemProps) => {
  return (
    <Panel shaded bordered style={{ width: 300 }}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg">{data.name}</h1>
        <Link href={`/artists/${data.id}`}>
          <Button className={styles.button}>Details</Button>
        </Link>
      </div>
    </Panel>
  );
};
