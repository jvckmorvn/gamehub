import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import GameCardContainer from './GameCardContainer';

function GameCardSkeleton() {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height={200}/>
        <CardBody>
          <SkeletonText/>
        </CardBody>
      </Card>
    </GameCardContainer>
  )
}

export default GameCardSkeleton;
