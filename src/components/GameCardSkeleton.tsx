import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

interface Props {
  bgColour: string;
}

function GameCardSkeleton({bgColour}: Props) {
  return (
    <Card>
      <Skeleton height={200}/>
      <CardBody bg={bgColour}>
        <SkeletonText/>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
