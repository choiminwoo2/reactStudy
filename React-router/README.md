## `react router`
SPA(Single Page Application) 에서 하나의 페이지를 사용하여 랜더링 하는데 
라우터를 이용해서 리액트가 주소를 사용하여 조건별로 컴포넌트를 재렌더링하여 마치 페이지를 
이동한 것처럼 보이게 만들어 준다.

# `react-router-dom  version 5`
####  ```<Swith>``` 를 통해 경로가 중복된 라우터가 모두 동작하는 것을 방지한다.
    1. 리액트 라우터에서 경로가 같다는건 /product /product/:id 시작경로만 같다면 같은 주소라고 생각한다.
    2. ex) 이때 해결을 위해서 Swith를 사용하면 하나의 경로만 활성화 할 수 있도록 Swith를 사용한다.
#### ```<Route path='' exact>Child Componenet </Route>```
특정 주소를 진입하면 속한 컴포넌트를 모두 렌더링한다.
+ exact
    + exact는 하나의 경로만 활성화하는 Swith에서 상세페이지 /product/:id가 /product보다 뒤에 있어 product를 가진 라우트가 먼저 렌더링 된다. 
    + 이 때, exact를 사용하면 주소가 정확히 일치하는 경우 렌더링을 하게 되어 상세 페이지가 렌더링된다.

#### ```<Link to="">```
+ a 태그를 사용하면 새페이지가 다시 만들어지는데 이 결함을 방지하고 SPA를 유지하기 위해서 LINK 컴포넌트를 지원한다. 
+ to는 href와 같은 역할을 한다.
+ 중복 처리를 위해서는 version 5에서는 상위 주소까지 모두 적어야하지만, version 6에서는 생략 가능하다.

#### `useParams()`

+ ath에서 /:paramName' 형식으로 보내주고
+ const params = useParams()로 사용할 컴포넌트에서 선언하고
+ params.paramName 형식으로 해당 데이터에 접근하여 사용한다.

#### ```<NavLink activeClassName={'해당 페이지가 활성화일 때 작동하는 css코드'}>```
<Link>와 같은 역할을 하지만 해당 페이지가 활성화 상태일 때 적용할 css 클래스 및 코드가 필요하다면 사용한다. 

