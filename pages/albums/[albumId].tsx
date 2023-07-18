import { api } from "../../utils/axios";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { Album, AlbumDetails } from "../../components/album";

type AlbumParamsContext = {
  albumId: string;
};

// export const getStaticPaths = async () => {
//   const response = await api.get("/api/albums/");
//
//   return {
//     paths: response.data.map((album: Album) => {
//       return {
//         params: {
//           albumId: album.id,
//         },
//       };
//     }),
//     fallback: false,
//   };
// };
//
// export const getStaticProps = async ({
//   params,
// }: GetStaticPropsContext<AlbumParamsContext>) => {
//   if (!params?.albumId) {
//     return {
//       props: {},
//       notFound: true,
//     };
//   }
//   const response = await api.get(`/api/albums/${params?.albumId}`);
//
//   return {
//     props: {
//       album: response.data,
//     },
//   };
// };

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<AlbumParamsContext>) => {
  try {
    const response = await api.get(`/api/artists/${params?.albumId}`);
    return {
      props: {
        artist: response.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const AlbumPage = ({ album }: { album: Album }) => {
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
