import { List } from "rsuite";
import Link from "next/link";
import Image from "next/image";
import { GridTile } from "./grid-tile";

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
type ArtistListItem = Pick<Artist, "id" | "name" | "image">;

type ArtistDetailsProps = {
  data: ArtistDetails;
};
type ArtistListItemProps = {
  data: ArtistListItem;
};

export const ArtistDetails = ({ data }: ArtistDetailsProps) => {
  return (
    <div className="py-4 px-2 max-w-[70vw]">
      <List>
        <div className="flex justify-center my-4">
          <Image
            width={640}
            height={340}
            src={data.image}
            alt={`Members of the ${data.name} band.`}
          />
        </div>
        <List.Item className="font-bold">{data.name}</List.Item>
        <List.Item>
          <span className="font-bold">Bio:</span> {data.bio}
        </List.Item>
        <List.Item>
          <span className="font-bold">Year:</span> {data.year}
        </List.Item>
        <List.Item className="flex flex-col gap-2">
          <span className="font-bold">Members:</span>
          <div>
            {data.members?.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </div>
        </List.Item>
        <List.Item className="flex gap-2">
          <span className="font-bold">Albums:</span>
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
    <Link href={`/artists/${data.id}`}>
      <GridTile image={data.image} title={data.name} />
    </Link>
  );
};
