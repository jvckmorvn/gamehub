import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
  let heading = '';

  if (gameQuery.platform || gameQuery.genre) {
    heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  }

  return (
    <Heading as='h1' marginY={4} fontSize='5xl'>{heading}</Heading>
  );
}

export default GameHeading;
