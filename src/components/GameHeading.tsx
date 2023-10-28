import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';

function GameHeading() {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);  
  const platform = usePlatform(platformId);

  let heading = '';
  if (platform || genre) {
    heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  }

  return (
    <Heading as='h1' marginY={4} fontSize='5xl'>{heading}</Heading>
  );
}

export default GameHeading;
