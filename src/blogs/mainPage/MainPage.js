import {Header} from "../../components/header/Header";
import {Services} from "../../components/services/Services";
import {Title} from "../../components/ orthodox/Orthodox";

function MainPage () {
    const servicesMain = ["ux/ui", "front-end", "back-end"]
    return (
        <div>
            <Title title="Main Page"/>
            <Header/>
            <Services services={servicesMain}/>
        </div>
    )
}

export default MainPage;