import { Album, AlbumListItem } from "../../components/album";
import { GetServerSideProps } from "next";
import { api } from "../../utils/axios";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/api/albums");

  return {
    props: {
      albums: response.data,
    },
  };
};

const AlbumsPage = ({ albums }: { albums: Album[] }) => {
  return (
    <div className="my-4">
      <h1 className="py-4 font-bold text-center text-3xl">List of Albums</h1>
      <div className="xl:max-w-[80vw] px-4 flex flex flex-wrap items-center justify-center gap-4">
        {albums.map((album) => (
          <AlbumListItem
            key={album.id}
            data={{
              id: album.id,
              title: album.title,
              artist: album.artist,
              cover: album.cover,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsPage;
