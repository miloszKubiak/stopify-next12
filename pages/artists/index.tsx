import { GetServerSideProps } from "next";
import { api } from "../../utils/axios";
import { GridList } from "../../components/grid/grid-list";
import { ArtistListItem } from "../../components/artist/artistListItem";
import { Artist } from "../../components/artist/artistDetails";

type ArtistsPageProps = {
  artists: Artist[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/api/artists");

  return {
    props: {
      artists: response.data,
    },
  };
};

const ArtistsPage = ({ artists }: ArtistsPageProps) => (
  <GridList title="List of Artists">
    {artists.map(({ id, name, image }) => (
      <ArtistListItem
        key={id}
        data={{
          id,
          name,
          image,
        }}
      />
    ))}
  </GridList>
);

export default ArtistsPage;
