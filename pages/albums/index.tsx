import { GetServerSideProps } from "next";
import { api } from "../../utils/axios";
import { GridList } from "../../components/grid/grid-list";
import { AlbumListItem } from "../../components/album/albumListItem";
import { Album } from "../../components/album/albumDetails";

type AlbumsPageProps = {
  albums: Album[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/api/albums");

  return {
    props: {
      albums: response.data,
    },
  };
};

const AlbumsPage = ({ albums }: AlbumsPageProps) => (
  <GridList title="List of Albums">
    {albums.map(({ id, title, artist, cover }) => (
      <AlbumListItem
        key={id}
        data={{
          id,
          title,
          artist,
          cover,
        }}
      />
    ))}
  </GridList>
);

export default AlbumsPage;
