import { GetServerSidePropsContext } from "next";
import { api } from "../../api/axios";

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
    <div>
      <h1>{artist.name}</h1>
      <div>
        {artist.albums?.map((album) => (
          <p key={album.title}>{album.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
