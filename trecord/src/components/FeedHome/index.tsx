import * as S from './style';
export const FeedHome = () => {
  const feedData = [
    {
      id: 1,
      name: '제주도 1달 살기',
      imageUrl:
        'https://trecordbucket.s3.ap-northeast-2.amazonaws.com/upload/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+10.03.06.png',
      place: '제주도 한바퀴',
      startAt: '2023-08-01',
      endAt: '2023-08-05',
    },
    {
      id: 2,
      name: '걸어서 세계 일주',
      imageUrl:
        'https://trecordbucket.s3.ap-northeast-2.amazonaws.com/upload/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.29.31.png',
      place: '스페인, 독일',
      startAt: '2023-08-10',
      endAt: '2023-08-15',
    },
    {
      id: 3,
      name: '걸어서 세계 일주',
      imageUrl:
        'https://trecordbucket.s3.ap-northeast-2.amazonaws.com/upload/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.29.31.png',
      place: '스페인, 독일',
      startAt: '2023-08-10',
      endAt: '2023-08-15',
    },
    {
      id: 4,
      name: '걸어서 세계 일주',
      imageUrl:
        'https://trecordbucket.s3.ap-northeast-2.amazonaws.com/upload/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.29.31.png',
      place: '스페인, 독일',
      startAt: '2023-08-10',
      endAt: '2023-08-15',
    },
    {
      id: 5,
      name: '걸어서 세계 일주',
      imageUrl:
        'https://trecordbucket.s3.ap-northeast-2.amazonaws.com/upload/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+1.29.31.png',
      place: '스페인, 독일',
      startAt: '2023-08-10',
      endAt: '2023-08-15',
    },
  ];

  return (
    <S.Layout>
      <S.TopBox />
      {feedData.map((feed) => (
        <S.ImgBox key={feed.id}>
          <img src={feed.imageUrl} width={342} height={180} />
          <div className="img_oppacity"></div>
          <S.TextBox>
            <div className="feed_name">{feed.name}</div>
            <div className="feed_sub">
              {feed.place}|{feed.startAt}~{feed.endAt}
            </div>
          </S.TextBox>
        </S.ImgBox>
      ))}
    </S.Layout>
  );
};
