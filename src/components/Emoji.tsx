import bullsEye from '../assets/emojis/bulls-eye.webp';
import thumbsUp from '../assets/emojis/thumbs-up.webp';
import meh from '../assets/emojis/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

function Emoji({rating}: Props) {
  if (rating < 3) {
    return null;
  }

  const emojiMap: {[key: number]: ImageProps} = {
    3: {src: meh, alt: 'meh', boxSize: '24px'},
    4: {src: thumbsUp, alt: 'thumbs up', boxSize: '24px'},
    5: {src: bullsEye, alt: 'bull\'s eye', boxSize: '34px'}
  }

  return (
    <Image {...emojiMap[rating]} marginTop={2}/>
  )
  
}

export default Emoji;
