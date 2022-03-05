import faker from 'faker';
import * as U from './util';

// 다국어 지원
//faker.locale = 'ko';

export const randomId = (): string => faker.datatype.uuid();
export const randomName = (): string => faker.name.findName();
export const randomEmail = (): string => faker.internet.email();
export const randomAvatarUrl = (name?: string): string =>
  // ?? null 병합 연산자
  // 연산자 앞의 변수 값이 null 또는 undefined 이면 연산자 뒤의 값을 사용하라는 뜻

  /* ES5 자바스크립트로 변환
  name || randomName()
  이렇게 작성해도 됨 짧은 조건문
*/
  U.avatarUriByName(name ?? randomName());
export const randomDate = (): Date => faker.date.recent();
export const randomParagraphs = (count: number = 2): string =>
  U.makeArray(count).map(faker.lorem.paragraph).join('\n');
export const randomImage = (): string =>
  U.unsplashUrl(U.random(800, 1000), U.random(800, 1000));
