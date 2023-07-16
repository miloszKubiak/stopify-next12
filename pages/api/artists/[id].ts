import { NextApiRequest, NextApiResponse } from "next";
import { ARTISTS } from "../../../data/fake-db";

const getArtist = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const artist = ARTISTS.find((artist) => artist.id === id);

  if (!artist) {
    return res.status(404).json({ msg: "Artist not found." });
  }

  res.status(200).json(artist);
};

export default getArtist;
