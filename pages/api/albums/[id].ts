import { NextApiRequest, NextApiResponse } from "next";
import { ALBUMS } from "../../../data/fake-db";

const getAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const album = await ALBUMS.find((album) => album.id === id);

  if (!album) {
    return res.status(404).json({ msg: "Album not found." });
  }

  res.status(200).json(album);
};

export default getAlbum;
