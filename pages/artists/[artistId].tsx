import { GetServerSidePropsContext } from "next";
import { api } from "../../utils/axios";
import { Artist, ArtistDetails } from "../../components/artist/artistDetails";

type ArtistParamsContext = {
  artistId: string;
};

type ArtistPageProps = Artist;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<ArtistParamsContext>) => {
  try {
    const response = await api.get(`/api/artists/${params?.artistId}`);
    return {
      props: response.data,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const ArtistPage = ({ name, bio, image, albums, year, members }: Artist) => (
  <ArtistDetails
    data={{
      name,
      bio,
      year,
      members,
      image,
      albums,
    }}
  />
);

export default ArtistPage;
