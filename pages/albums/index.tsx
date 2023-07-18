import { AlbumListItem } from "../../components/album";
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
    <div className="my-4 mx-auto flex flex-wrap items-center justify-center gap-4">
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
  );
};

export default AlbumsPage;
