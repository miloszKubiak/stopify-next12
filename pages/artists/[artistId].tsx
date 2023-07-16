import { GetServerSidePropsContext } from "next";
import { api } from "../../api/axios";
import { ArtistDetails } from "../../components/artist";

type ArtistParamsContext = {
  artistId: string;
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<ArtistParamsContext>) => {
  try {
    const response = await api.get(`/api/artists/${params?.artistId}`);
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

const ArtistPage = ({ artist }) => {
  return (
    <ArtistDetails
      name={artist.name}
      bio={artist.bio}
      year={artist.year}
      members={artist.members}
      albums={artist.albums}
    />
  );
};

export default ArtistPage;
