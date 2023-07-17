import { api } from "../../api/axios";
import { GetStaticPropsContext } from "next";
import { AlbumDetails } from "../../components/album";

type AlbumParamsContext = {
  albumId: string;
};

export const getStaticPaths = async () => {
  const response = await api.get("/api/albums/");

  return {
    paths: response.data.map((album) => {
      return {
        params: {
          albumId: album.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<AlbumParamsContext>) => {
  if (!params?.albumId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const response = await api.get(`/api/albums/${params?.albumId}`);

  return {
    props: {
      album: response.data,
    },
  };
};

const AlbumPage = ({ album }) => {
  return (
    <AlbumDetails
      data={{
        title: album.title,
        artist: album.artist,
        year: album.year,
        cover: album.cover,
        songs: album.songs,
      }}
    />
  );
};

export default AlbumPage;
