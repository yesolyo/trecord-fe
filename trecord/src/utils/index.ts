interface FeelSetProps {
  feel: string;
}

export const feelCategory = ({ feel }: FeelSetProps) => {
  switch (feel) {
    case 'emojiSad':
      return '불만족ㅠ';
    case 'emojiNormal':
      return '보통이에요';
    case 'emojiHappy':
      return '만족해요!';
  }
};
export const feelSet = ({ feel }: FeelSetProps) => {
  switch (feel) {
    case 'happy':
      return '행복해요';
    case 'sad':
      return '슬퍼요';
    case 'angry':
      return '화나요';
    case 'flutter':
      return '설레요';
  }
};
