import { Album } from "../../components/album";
import { GetServerSideProps } from "next";
import { api } from "../../api/axios";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/api/albums");

  return {
    props: {
      albums: response.data,
    },
  };
};

const AlbumsPage = ({ albums }) => {
  return (
    <div className="p-6 flex flex-wrap items-center justify-center gap-3">
      {albums.map((album) => (
        <Album
          id={album.id}
          key={album.id}
          title={album.title}
          artist={album.artist}
          songs={album.songs.map((song) => (
            <p className="text-xs" key={song.title}>
              {song.title}
            </p>
          ))}
        />
      ))}
    </div>
  );
};

export default AlbumsPage;
