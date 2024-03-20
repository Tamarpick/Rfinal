import { Container } from "react-bootstrap";
import gitIcon from "../../assets/github.png"
import likedInIcon from "../../assets/linkedIn.png"

// Footer functional component
export default function Footer() {

    // Style the hight of the image
    const imageStyle = {
        height: "2svh",
    }

    // Page consists of a container with a writing an a link to homepage
    return (
        <Container fluid className="bg-black d-flex align-items-center justify-content-center text-align-center">
            <div className="d-flex w-100 justify-content-between gap-5 p-1">
                <h5>©️ 2024 Sarah-Tamar Pick, All right reserved</h5>
                <div className="d-flex gap-3">
                    <a href="https://github.com/Tamarpick">
                        <img style={imageStyle} src={gitIcon} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/tamar-pick-034b602bb/">
                        <img style={imageStyle} src={likedInIcon} alt="" />
                    </a>
                </div>


            </div>
        </Container>
    )
}
