import "./catProfile.css"
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";


// Functional component to represet a cat profile page
export default function CatProfilePage() {
    // Used to retreive data from location, sent from other component
    const location = useLocation();
    // Cat object sent from search comnponent
    const { cat } = location.state

    // Function to stylize attributes with an Icaon, gets the attribute value and the icon
    const stylizeAttribute = (number: number, attribute: string) => {
        let attributeString = ""
        for (let i = 0; i < number; i++) {
            attributeString += attribute
        }
        return <label>{attributeString}</label>
    }

    // Function to show cat attributes used in the page markup
    const showCatAttributes = () => {
        return (
            <Container className="catAttributes">
                <label>Adaptability:</label>
                <label>{stylizeAttribute(cat.breeds[0].adaptability, "🧶")}</label>
                <label>Affection:</label>
                <label>{stylizeAttribute(cat.breeds[0].affection_level, "😻")}</label>
                <label>Child friendly:</label>
                <label>{stylizeAttribute(cat.breeds[0].child_friendly, "👶")}</label>
                <label>Dog friendly:</label>
                <label>{stylizeAttribute(cat.breeds[0].dog_friendly, "🐶")}</label>
                <label>Energy level:</label>
                <label>{stylizeAttribute(cat.breeds[0].energy_level, "⚡")}</label>
                <label>Grooming:</label>
                <label>{stylizeAttribute(cat.breeds[0].grooming, "🪥")}</label>
                <label>Health issues:</label>
                <label>{stylizeAttribute(cat.breeds[0].health_issues, "🩺")}</label>
                <label>Intelligence:</label>
                <label>{stylizeAttribute(cat.breeds[0].intelligence, "💡")}</label>
                <label>Shedding level:</label>
                <label>{stylizeAttribute(cat.breeds[0].shedding_level, "🧹")}</label>
                <label>Social needs:</label>
                <label>{stylizeAttribute(cat.breeds[0].social_needs, "😹")}</label>
                <label>Stranger friendly:</label>
                <label>{stylizeAttribute(cat.breeds[0].stranger_friendly, "🙋")}</label>
            </Container>
        )
    }

    // Function to show additional information about the cat used in the page markup on the 
    // bottom left
    const showCatAdditionalInfo = () => {
        return (
            <Container className="d-flex gap-3">
                <div className="catStylizedAdditionalInfo">
                    <label>{cat.breeds[0].hairless ? "Hairless" : "Not Hairless"}</label>
                </div>
                <div className="catStylizedAdditionalInfo">
                    <label>{cat.breeds[0].hypoallergenic ? "Alergy safe" : "Not alergy safe"}</label>
                </div>
                <div className="catStylizedAdditionalInfo">
                    <label>{cat.breeds[0].weight.metric} kilograms</label>
                </div>
                <div className="catStylizedAdditionalInfo">
                    <label>{cat.breeds[0].life_span} years</label>
                </div>
            </Container>
        )
    }

    // Function to show tags used in the page markup on the bottom right
    const showCatTagInfo = () => {
        return (
            <Container className="d-flex gap-3 flex-column">
                <div className="d-flex gap-3 flex-wrap">
                    {cat.breeds[0].temperament.split(", ").map((tag: string) => {
                        return (
                            <div className="catStylizedTag">
                                <label>{tag}</label>
                            </div>
                        )
                    })}
                </div>
                <Container className="d-flex gap-1 flex-wrap flex-column">
                    <h4>Learn more:</h4>

                    <a href={cat.breeds[0].wikipedia_url}>Wikipedia</a>
                    {cat.breeds[0].vcahospitals_url ?
                        <a href={cat.breeds[0].vetstreet_url}>Vetstreet</a>
                        :
                        <></>
                    }

                </Container>
            </Container>
        )
    }

    // Page consists of cat profile information and additional information
    // laied out in a grid 
    return (
        <div className="mainContainer">
            <Container className=" catProfileContainer">
                <h1>{cat.breeds[0].name}</h1>
                <Container className="profileDetailsContainer">
                    <Container className="catInfoContainer">
                        <div className="d-flex flex-column">
                            <p className="catDescription">{cat.breeds[0].description}
                                <div>
                                    <h4>Origin: {cat.breeds[0].origin}</h4>
                                </div>
                            </p>

                            {showCatAttributes()}
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src={cat.url} alt="" />
                        </div>
                    </Container>
                    <Container className="catAdditionalInfo">
                        {showCatAdditionalInfo()}
                        {showCatTagInfo()}
                    </Container>
                </Container>
            </Container>
        </div>
    )
}
