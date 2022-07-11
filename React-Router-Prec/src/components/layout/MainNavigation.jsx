import styled from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'
const MainNavigation = () => {
    return <header className={styled.header}>
        <div className={styled.logo}>good</div>
        <nav className={styled.nav}>
            <ul>
                <li><NavLink to='/quotes' activeClassName={styled.active}>All Quotes</NavLink></li>
                <li><NavLink to='/new-quote' activeClassName={styled.active}>new Quotes</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation