import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <Card>
            <h1>About this Project</h1>
            <p>This is React App Project to collect and update Feedback along with ratings, which also includes example of routes, context API and hooks.</p>
            <p>Version: 1.0.0</p>
            <Link to="/">Back To App</Link>
            
        </Card>
    )
}

export default AboutPage
