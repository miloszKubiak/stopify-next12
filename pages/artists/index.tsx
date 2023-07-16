import { Artist } from "../../components/artist";
import { GetServerSideProps } from "next";
import { api } from "../../api/axios";

type Artist = {
  id: number;
  name: string;
  albums: Object[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/api/artists");

  return {
    props: {
      artists: response.data,
    },
  };
};

const ArtistsPage = ({ artists }) => {
  return (
    <div className="flex flex-col justify-around gap-3">
      {artists.map((artist) => (
        <Artist
          id={artist.id}
          key={artist.id}
          name={artist.name}
          albums={artist.albums?.map((album) => (
            <p key={album.title}>{album.title}</p>
          ))}
        />
      ))}
    </div>
  );
};

export default ArtistsPage;
