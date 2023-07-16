import { NextApiRequest, NextApiResponse } from "next";
import { ARTISTS } from "../../../data/fake-db";

const getArtists = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(ARTISTS);
};

export default getArtists;
