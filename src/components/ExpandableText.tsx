import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({children}: Props) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) {
    return null;
  }

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? `${children} ` : `${children.substring(0, limit).trim()}... `;

  return (
    <Text>
      {summary}<Button size='xs' colorScheme='yellow' onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Show more'}</Button>
    </Text>
  );
}

export default ExpandableText;