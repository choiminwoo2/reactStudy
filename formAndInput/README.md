## useRef와 useState

즉각적인 유효성 검사는 useState가 좋고 그리고 필드 값의 초기화를 사용할 땐 useState가 좋다.
한번 사용할 것은 ref를 사용하는 것이 좋다. ref를 이용하여 값을 초기화 하는 것은 DOM 조작이므로 REACT에서 변경내용을 알지 못하여
사용하지 않는 것이 좋다.
