import './Nav.css'

const Nav = () => {

    return (
        <div className="hamnav">
            <h1 className="logo_main">RestyChilla</h1>
            <label for="hamburger">&#9776; <span>RestyChilla</span></label>
            <input type="checkbox" className="hamburger" id="hamburger" />



            <div className="hamitems" id="hamitems">
                <a href="/">  LOCATION & HOURS</a>
                <a href="/">MENU</a>
                <a href="/">OUR STORY</a>
                <a href="/">PIVATE DINING</a>
                <a href="/">BUZZ</a>
                <a href="/">GIFT CARDS</a>
            </div> 

        </div>

    )
}

export default Nav
