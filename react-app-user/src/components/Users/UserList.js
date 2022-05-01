import Card from "../UI/Card";
import classes from './UserList.module.css'

const UserList = props => {
    return <Card className={classes.users}>
        <ul>
        {props.userDatas.map(user =>(
            <li key={user.id}>{user.username} ({user.age} 살)</li>
        ))}</ul>
    </Card>
}

export default UserList;