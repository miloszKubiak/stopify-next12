import { Artist, ArtistListItem } from "../../components/artist";
import { GetServerSideProps } from "next";
import { api } from "../../utils/axios";

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
    <div className="flex flex-col justify-between items-center w-3/4 mx-auto">
      <h1 className="py-4 font-bold text-3xl">List of Artists</h1>
      <div className="p-6 flex flex-wrap items-center justify-center gap-3">
        {artists.map((artist) => (
          <ArtistListItem
            key={artist.id}
            data={{
              id: artist.id,
              name: artist.name,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
