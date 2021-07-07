import './Header.css'
import Nav from './Nav'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Header = () => {
    return (


        <div className="header">

            <Nav />

            {/* <div className="cover_image"> */}
            <Carousel autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1598515213345-d710d121c709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1605721303594-231664fc03cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1663&q=80" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1598515213381-80d77efcdf32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" alt="" />
                </div>
            </Carousel>



            {/* </div> */}
        </div>


    )
}

export default Header
