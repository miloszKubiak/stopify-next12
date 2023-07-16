import { api } from "../../api/axios";
import { GetStaticPropsContext } from "next";

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
  if (!album) return <div>Not found</div>;

  return (
    <div>
      <h1>{album.artist}</h1>
      <h2>{album.title}</h2>
      <div>
        {album.songs.map((song) => (
          <p key={song.title}>{song.title}</p>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
