import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
  bgColour: string;
}

function GameCard({game, bgColour}: Props) {
  return (
    <Card height='100%'>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody bg={bgColour}>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
