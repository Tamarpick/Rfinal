import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BackgroundImg from "../../assets/home_background.jpg";

export default function Home() {

    const navigate = useNavigate()

    const mainContainerClasses = `
        h-100
        d-flex
        flex-column
        justify-content-center
        align-items-center
    `

    const buttonClasses = `
        text-dark
        fw-bold
    `

    const mainContainerStyle = {
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const headlineClasses = `
        bg-color-dark
    `
    const headlineStyle = {
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: "3rem",
        borderRadius: "5rem"
    }

    const buttonStyle = {
        padding: "2rem",
        fontSize: "2rem",
        borderRadius: "5rem"

    }

    const handleClick = () => {
        navigate("/cat-search")
    }

    return (
        <div style={mainContainerStyle} className={mainContainerClasses}>
            <Container style={headlineStyle} className="d-flex flex-column justify-content-center text-center align-items-center">
                <h1 className={headlineClasses}>Welcome to the wonderful world of cats</h1>
                <Button style={buttonStyle} onClick={handleClick} className={buttonClasses}>Search Cats</Button>
            </Container>
        </div>
    )
}
