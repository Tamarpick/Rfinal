import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Header functional component
export default function Header() {

    // Styling the navbar
    const containerClasss = `
    bg-black 
    height-100 
    d-flex  
    justify-content-start 
    text-align-center
    gap-5
    letter-spacing-2
    align-items-center
    py-2
    `

    // navbar consists of links to sections of the website
    return (
        <Container fluid className={containerClasss}>
            <Link to="/">
                <h3 className="text-light">Home</h3>
            </Link>
            <Link to="/about">
                <h3 className="text-light">About</h3>
            </Link>
            <Link to="/not-found">
                <h3 className="text-light">Not Found</h3>
            </Link>
        </Container>
    )
}
