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
    <div className="p-6 flex flex-wrap items-center justify-center gap-3">
      {albums.map((album) => (
        <AlbumListItem
          id={album.id}
          title={album.title}
          artist={album.artist}
          cover={album.cover}
        />
      ))}
    </div>
  );
};

export default AlbumsPage;
