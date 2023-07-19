import { api } from "../../utils/axios";
import { GetServerSidePropsContext } from "next";
import { Album, AlbumDetails } from "../../components/album/albumDetails";

type AlbumParamsContext = {
  albumId: string;
};

type AlbumPageProps = Album;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<AlbumParamsContext>) => {
  try {
    const response = await api.get(`/api/albums/${params?.albumId}`);
    return {
      props: response.data,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const AlbumPage = ({ title, artist, year, cover, songs }: AlbumPageProps) => (
  <AlbumDetails
    data={{
      title,
      artist,
      year,
      cover,
      songs,
    }}
  />
);

export default AlbumPage;
