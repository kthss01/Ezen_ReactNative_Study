// Interface Person의 줄임말
// 가짜 데이터 생성
// 모바일 앱 보통 JSON 데이터를 원격지 API 서버에서 받아와서
// 화면에 출력하는 방식
export type IPerson = {
  id: string;
  createdDate: Date;
  modifiedDate: Date;
  name: string;
  email: string;
  avatar: string;
  image: string;
  comments: string;
  counts: {
    comment: number;
    retweet: number;
    heart: number;
  };
};
