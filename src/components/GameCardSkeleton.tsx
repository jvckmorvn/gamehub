import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card width={300} borderRadius={8} overflow='hidden'>
      <Skeleton height={200}/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton;
