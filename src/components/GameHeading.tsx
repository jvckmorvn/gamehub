import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)
  let heading = '';
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(platform => platform.id === gameQuery.platformId)

  if (gameQuery.platformId || gameQuery.genreId) {
    heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  }

  return (
    <Heading as='h1' marginY={4} fontSize='5xl'>{heading}</Heading>
  );
}

export default GameHeading;
