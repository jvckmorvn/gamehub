import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  let heading = '';
  if (platform || gameQuery.genreId) {
    heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  }

  return (
    <Heading as='h1' marginY={4} fontSize='5xl'>{heading}</Heading>
  );
}

export default GameHeading;
