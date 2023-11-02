import Footer from "./Home-component/Footer";
import CustomNavbar from "./Home-component/Navbar";
import Section from "./Home-component/Section";
import Title from "./Home-component/Title";

function Home() {
  return (
    <div id="home">
      {/* <CustomNavbar /> */}
      <Title />
      <Section title="Harry Potter" searchParameters="Harry%20Potter" />
      <Section title="Pokemon" searchParameters="pokemon" />
      <Section title="Alien" searchParameters="alien" />
      <Section title="Resident Evil" searchParameters="resident%20evil" />
      <Section title="Digimon" searchParameters="digimon" />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;