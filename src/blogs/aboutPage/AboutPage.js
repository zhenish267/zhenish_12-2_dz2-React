import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";
import {Title} from "../../components/ orthodox/Orthodox";
import NewsPage from "../newsPage/NewsPage";

function AboutPage () {
    const servicesAbout = ["ux/ui", "front-end", "back-end","sql", "android","ios"]

    return (
        <div>
            <Title title="About Page"/>
            <Header/>
            <Services services={servicesAbout}/>
            <NewsPage/>
            <Footer/>
        </div>
    )
}
export default AboutPage;