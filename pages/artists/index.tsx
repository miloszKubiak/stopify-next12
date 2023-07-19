import { Artist, ArtistListItem } from "../../components/artist";
import { GetServerSideProps } from "next";
import { api } from "../../utils/axios";
import { GridList } from "../../components/grid-list";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/api/artists");

  return {
    props: {
      artists: response.data,
    },
  };
};

const ArtistsPage = ({ artists }: { artists: Artist[] }) => {
  return (
    <GridList>
      {artists.map((artist) => (
        <ArtistListItem
          key={artist.id}
          data={{
            id: artist.id,
            name: artist.name,
            image: artist.image,
          }}
        />
      ))}
    </GridList>
  );
};

export default ArtistsPage;
