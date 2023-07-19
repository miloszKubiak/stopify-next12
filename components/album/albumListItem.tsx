import Link from "next/link";
import { GridTile } from "../grid/grid-tile";
import { Album } from "./albumDetails";
import { routes } from "../../utils/routes";

type AlbumListItem = Omit<Album, "year" | "songs">;
type AlbumListItemProps = {
  data: AlbumListItem;
};

export const AlbumListItem = ({ data }: AlbumListItemProps) => (
  <Link href={`${routes.albums}/${data.id}`}>
    <GridTile image={data.cover} title={data.artist} description={data.title} />
  </Link>
);
