interface FeelSetProps {
  feel: string;
}

interface WeatherSetProps {
  weather: string;
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

export const weatherCategory = ({ weather }: WeatherSetProps) => {
  switch (weather) {
    case 'sun':
      return '해가 쨍쨍';
    case 'cloudSunny':
      return '해 + 구름';
    case 'cloud':
      return '구름 많이';
    case 'cloudDrizzle':
      return '비가 주륵';
    case 'flash':
      return '천둥 번개';
    case 'wind':
      return '바람 많이';
    case 'snow':
      return '눈이 펑펑';
  }
};
