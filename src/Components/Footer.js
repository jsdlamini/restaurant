import './Footer.css'
import SimpleReactFooter from "simple-react-footer";
const Footer = () => {

    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde iste ut, incidunt enim qui quaerat facilis ipsam error quisquam molestias similique doloremque nisi alias distinctio autem numquam beatae quas. Deleniti optio sunt magni reiciendis dolorum rerum blanditiis, corrupti tenetur similique aspernatur soluta architecto ea dolore recusandae eligendi"


    const title = "RestChilla";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
            ]
        }
    ];


    return (


        <footer className='footer'>


            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="RestChilla"
                facebook="RestChilla"
                twitter="RestChilla"
                instagram="RestChilla"
                youtube="RestChilla"
                pinterest="RestChilla"
                copyright="2021"
                iconColor="black"
                backgroundColor="darkbrown"
                fontColor="black"
                copyrightColor="white"
            />
        </footer>



    )
}

export default Footer
