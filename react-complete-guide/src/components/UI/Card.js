import './Card.css';
//사용자 컴포넌트 
//CSS 중복 제거 를 위해서 사용하는 편이다.
// MODAL창 등등 자주 사용되는 스타일을 구현한다.
function Card(props){
    const classes = 'card ' + props.className;
    //props로 넘어온 값중 태그의 클래스 네임을 넘겨와야한다.
    console.log(classes);
    console.log(props.children)
    //해당 사용자 정의 컴포넌트안에 선언된 자식 태그들을 가져오는 것을 말한다.
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Card;