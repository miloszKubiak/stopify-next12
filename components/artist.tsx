import { Button, Panel } from "rsuite";
import Link from "next/link";

type ArtistProps = {
  id: string;
  name: string;
  albums: string[];
};

export const Artist = ({ id, name, albums }: ArtistProps) => {
  return (
    <Panel shaded bordered style={{ width: 300 }}>
      {/*<div className="flex-col">{albums}</div>*/}
      <div className="flex items-center justify-between">
        <h1>{name}</h1>
        <Link href={`/artists/${id}`}>
          <Button appearance="default" className="bg-green-400">
            Details
          </Button>
        </Link>
      </div>
    </Panel>
  );
};
