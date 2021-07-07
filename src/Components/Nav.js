import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>

            <div className="nav_brand">
                <h3>RestyChilla</h3>
            </div>


            <ul>
                <li> <a href="/">  Location & Hours</a> </li>
                <li><a href="/">Menu</a> </li>
                <li><a href="/">OU STORY</a> </li>
                <li><a href="/">PIVATE DINING</a> </li>
                <li><a href="/">BUZZ</a> </li>
                <li><a href="/">GIFT CARDS</a> </li>
            </ul>


        </div>
    )
}

export default Nav
