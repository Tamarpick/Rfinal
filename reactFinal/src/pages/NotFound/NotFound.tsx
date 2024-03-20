import { Link } from "react-router-dom";
import notFoundImg from "../../assets/notFound.jpg";

export default function NotFound() {
    const mainContainer = {
        backgroundImage: `url('${notFoundImg}')`,
        backgoundRepeat: "no-repeat",
        backgoundPosition: "center",
        backgroundSize: "cover",
    }

    const contentContainer = {
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: "3rem",
        borderRadius: "5rem",

    }

    return (
        <div style={mainContainer} className="text-center d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            <div style={contentContainer} className="color-white d-flex flex-column justify-content-center align-items-center">
                <h1>404 - Your cats are not here</h1>
                <button className=" bg-dark opacity-75 p-3 fw-bold text-dark">
                    <h2>
                        <Link to="/">Go Home</Link>
                    </h2>

                </button>
            </div>
        </div>

    )
}
