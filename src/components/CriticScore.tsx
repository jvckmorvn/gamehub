import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({score}: Props) {
  let color = score > 80 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={4}>{score}</Badge>
  );
}

export default CriticScore;
