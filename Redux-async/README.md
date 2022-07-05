# 리덕스의 비동기 사용 가능한 방법
1. 컴포넌트
+ 컴포넌트 내부에 state를 변환하지 않는 다른 매개변수에 state를 저장하고 새 객체를 만들어 state를 갱신하는 방법
2. action creator(작업 크리에이터)
+ dispatch() 이전에 부수 코드나 작업을 처리하여 redux가 갱신되기 이전에 처리하는 방법

## Thunk
다른 작업이 완료되기전까지 작업을 지연 시키는 함수를 말한다.
작업을 반환하는 다른 함수를 말한다.
dispatch() 하기 이전에 작업 및 부가 코드를 작성할 수 있다.

## redux
+ 전체 어플리케이션의 상태 관리를 위한 모듈
+ react Context는 개발자가 자주 변하는 상태에 대하여 좋은 성능을 발휘하지 못한다고 한다.
+ 그래서 규모가 큰 엔터프라이즈 프로젝트일수록 성능적인 문제를 처리하기 위해 redux를 사용하는 것이다.
#### state, action, payload
+ state
    + state는 데이터를 담고 있는 상태를 뜻한다.
    + 리덕스는 불변성 보존을 위해 데이터가 변경되면 state를 직접 변경하지 않고 새로운 객체를 state에 할당한다.
+ action
    + 리덕스에서 dispath()하여 전달 받은 데이터를 처리함. 
    + { type: 'types', payload : {data1: '', data2: ''}}의 방식으로 처리하여 state에 할당함.
+ payload
    + dispatch()를 통하여 전달받은 객체. 

## reduxjs/toolkit
state 상태에 직접 관여하여 작업하게 되면 원래 있던 state에 직접 관여하게 되어 문제가 발생하는데
state의 불변성을 보존해주는 역할을 함.
createSlice() 함수로 여러 리듀서를 생성가능하고
configureStore() 함수로 store를 생성하고
여러 리듀서를 하나로 통합하여 관리 가능하다.

## react-redux
react component와 redux를 상호작용하도록 만들어 줌. 
제공을 위한 <Provider> JSX 컴포넌트, 소비를 위한 useSelector(), 전송을 위한 useDispatch() 등등 여러 기능을 제공한다.
