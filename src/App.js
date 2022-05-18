import './App.css';
import MainPage from "./blogs/mainPage/MainPage";
import AboutPage from "./blogs/aboutPage/AboutPage";
import ContactsPage from "./blogs/contactsPage/ContactsPage";

function App() {
  return (
      <div>
        <MainPage/>
        <AboutPage/>
        {/*<ContactsPage/>*/}
      </div>
  );
}

export default App;