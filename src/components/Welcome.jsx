import testImg from "../assets/images/small-profile.jpg";
import "../css/main.css";
import { SectionWrapper } from "../hoc";
import Button from "react-bootstrap/esm/Button";

const Welcome = () => {
    return (
    <>
    <div className="wrapper">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={testImg} alt="Test image" width={200} height={200}/>
        <Button variant="success">Success</Button>
    </div>
    </>
    );
}

export default SectionWrapper(Welcome, "welcome")