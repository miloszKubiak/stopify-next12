import { NextApiRequest, NextApiResponse } from "next";
import { ALBUMS } from "../../../data/fake-db";

const getAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const album = ALBUMS.find((album) => album.id === id);

  res.status(200).json(album);
};

export default getAlbum;
