import Link from "next/link";
import { GridTile } from "../grid/grid-tile";
import { Artist } from "./artistDetails";
import { routes } from "../../utils/routes";

type ArtistListItem = Pick<Artist, "id" | "name" | "image">;

type ArtistListItemProps = {
  data: ArtistListItem;
};

export const ArtistListItem = ({ data }: ArtistListItemProps) => (
  <Link href={`${routes.artists}/${data.id}`}>
    <GridTile image={data.image} title={data.name} />
  </Link>
);
