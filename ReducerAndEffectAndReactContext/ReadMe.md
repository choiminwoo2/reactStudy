# React HOOK

## React Hook의 규칙
 React Hook은 React Component Function에서만 사용하거나 유저 커스텀 훅만 사용 가능하다.
 또, 리액트 훅과 리액트 커스텀 훅은 함수의 최상위에서만 호출이 가능하다.
 중첩함수 및 block 문에서 호출하지 않는다. 

#### useEffect만의 규칙
참조하는 모든 항목을 의존성으로 useEffect안에 추가해야 한다.
예외의 경우가 있는데 useReducer나 useState로 생성된 변수는 최신 상태로 유지하며 변경되지 않도록 리액트가 보장하므로
예외해도 상관없다.

## useEffect(callback function, [dependencies])
첫 번째, 인자는 컴포넌트 평가 이후 실행되는 내용이 들어 있는 함수이다.
두 번째, 인자는 의존성으로 의존하는 값이 변경되면 첫 번째 함수가 다시 동작한다.
리액트 컴포넌트가 Mount 되었을 때 동작한다.

##  useState(initialState)와 useReducer(reducer, initialArg, init)
 useState()는 개별 state 및 데이터를 처리하는데 적합하다.
 state는 업데이트가 쉽고 몇 종류가 안되는 경우 사용한다.
 state의 객체가 있거나, 복잡한 state가 있다면 Reducer()를 고려할만하다.

 useReducer()는 state가 연관된 데이터를 가질 경우 사용하는 것을 고려할만하다. 
 input State와 같은 경우와 같이 복잡한 state 처리로 여러 state가 바뀌어야할 때 사용하는 것이 좋다.
 useReducer()로 처리할 수 있는 것은 useState로 처리할 수 있지만, useReducer()를 사용하면 복잡한 state를 
 하나의 묶음으로 간단하게 사용할 수 있다.

## useImperativeHandle React.forwordRef
부모 컴포넌트에서 사용되고 있는 ref 값을 사용자화 한다. 
useImperativeHandle를 통해서 ref로 접근할 수 있는 외부에 사용가능한 객체를 생성해주고 React.forwordRef를 통해 ref값을 전달 받을 수 있다.

 # REACT Context API

 리액트 앱의 트리 구조의 높이가 깊으면 깊을수록 props 전달을 위해 모든 컴포넌트를 양방향 통신을 거쳐 최상위 루트 노드까지 끌어올려 반대쪽 트리로 데이터를 보내야하는 경우가 존재한다. 
 이러한 props chain이 이어진다고 큰 문제는 일어나지 않지만, 큰 어플리케이션 규모일수록 개발자에게 큰 불편을 준다. 이것을 해결하기 위해서 컴포넌트 전체에서 사용가능한 내부적인 STATE 저장소가 등장하게 되고 이를 ReactContext라 한다.

 ## React.createContext({state})
 state만 존재할 수 있는  컴포넌트를 생성한다.

 ## JSX에서 생성한 Context를 공급하는법
 JSX문법에서 사용하기 위해서는 컴포넌트처럼 사용해서 공급해줘야한다
 <ComponetName.Provider value={객체}>
    자손 컴포넌트들.
 </ComponetName.Provider>

 ## JSX에서 공급받은 자손 컴포넌트에서 해당 CONTEXT 데이터를 사용하는 방법

 ### 컴포넌트로 사용하는 방법
<AuthContext.Consumer>
{(ctx) => { 
    return ( JSX코드 모두)
}}
</AuthContext.Consumer>

### import로 사용하는 방법
const ctx = useContext(AuthContext);

### Context의 적합한 사용법
 변경이 잦은 React Context는 사용에 적합하지 않다. 1초마다 바뀌는 state경우 context를 사용하는 것은 context에 최적화 되어 있지 않다고 react 팀의 일원이 말했고 자주 변하지 않는 state에 한해서 context를 사용하는 것이 좋다. 
 만약 자주 바뀌게 되는 props chain의 거리가 먼 컴포넌트의 경우 redux를 사용하는 것이 좋다.







