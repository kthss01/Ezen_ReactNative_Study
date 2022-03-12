import {useState, useEffect} from 'react';

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  // useState 훅 : 갱신한 시간데이터를 화면에 반영 (reRendering)
  // useEffect 훅 : setInterval() 이 한번만 실행되게 할 때 씀
  // deq (의존성 항목) -> 빈값이면 한번만 실행시키게됨
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date()); // 시간 상태 갱신
    }, 1000); // 1000 ms => 1초

    // setInterval() 함수 실행 종료시에는 반드시 메모리 누수 방지 처리
    return () => clearInterval(id);
  }, []);

  return time;
};
