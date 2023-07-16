import { NextApiRequest, NextApiResponse } from "next";
import { ALBUMS } from "../../../data/fake-db";

const getAlbums = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(ALBUMS);
};

export default getAlbums;
