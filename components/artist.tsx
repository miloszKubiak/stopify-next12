import { Button, Panel } from "rsuite";
import Link from "next/link";

type Artist = {
  id: string;
  name: string;
  bio: string;
  year: string;
  members: string[];
  albums: { title: string }[];
};

type ArtistDetailsProps = Omit<Artist, "id">;

type ArtistListItemProps = Pick<Artist, "id" | "name">;

export const ArtistDetails = ({
  name,
  bio,
  year,
  members,
  albums,
}: ArtistDetailsProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <p>{year}</p>
      <div>
        {members?.map((member, index) => (
          <p key={index}>{member}</p>
        ))}
      </div>
      <div>
        {albums?.map((album) => (
          <p key={album.title}>{album.title}</p>
        ))}
      </div>
    </div>
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
