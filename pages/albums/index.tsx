import { Album, AlbumListItem } from "../../components/album";
import { GetServerSideProps } from "next";
import { api } from "../../utils/axios";
import { GridList } from "../../components/grid-list";

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
    <GridList>
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
    </GridList>
  );
};

export default AlbumsPage;
