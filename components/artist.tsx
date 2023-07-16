import { Button, List, Panel } from "rsuite";
import Link from "next/link";

type Artist = {
  id: string;
  name: string;
  bio: string;
  year: string;
  members: string[];
  image: string;
  albums: { title: string }[];
};

type ArtistDetailsProps = Omit<Artist, "id">;

type ArtistListItemProps = Pick<Artist, "id" | "name">;

export const ArtistDetails = ({
  name,
  bio,
  year,
  members,
  image,
  albums,
}: ArtistDetailsProps) => {
  return (
    <List bordered style={{ padding: 20 }}>
      <img src={image} alt={`Members of the ${name} band.`} />
      <List.Item>{name}</List.Item>
      <List.Item>Bio: {bio}</List.Item>
      <List.Item>Year: {year}</List.Item>
      <List.Item className="flex items-center gap-2">
        Members:
        {members?.map((member, index) => (
          <div key={index}>{member}</div>
        ))}
      </List.Item>
      <List.Item className="flex items-center gap-2">
        Albums:
        {albums?.map((album) => (
          <div key={album.title}>{album.title}</div>
        ))}
      </List.Item>
    </List>
  );
};

export const ArtistListItem = ({ id, name }: ArtistListItemProps) => {
  return (
    <Panel shaded bordered style={{ width: 300 }}>
      <div className="flex items-center justify-between">
        <h1>{name}</h1>
        <Link href={`/artists/${id}`}>
          <Button appearance="default" className="bg-green-400">
            Details
          </Button>
        </Link>
      </div>
    </Panel>
  );
};
