import { Alert, Button } from "react-bootstrap";
import Section from "./Home-component/Section";
import Title from "./Home-component/Title";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const array = "harry potter e la pietra";
  const a = array.split(` `);
  // for (let i = 0; i < a.length; i++) {
  //   a[i]=a[i]+`20%`
  const navigate = useNavigate();
  //   // a[i].push(b);
  // }
  const [value, setValue] = useState();

  console.log(`questo e a`, a);
  let b = a.join(`%20`);
  console.log(`questo e a2`, b);
  const [alert, setAlert] = useState(false);
  const Submit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/SearchPage/${value}`);
    } else {
      setAlert(true);
    }
  };

  return (
    <div id="home">
      {/* <CustomNavbar /> */}
      <Title />
      <Form className=" mb-3 d-flex justify-content-center w-100 align-items-center position-relative">
        <Form.Group className="" controlId="exampleForm.ControlInput1">
          <Form.Control
            required
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="w-100"
            type="text"
            placeholder="Search..."
          />
        </Form.Group>

        <button type="submit" onClick={Submit} className="text-primary bg-primary rounded-2 button1">
          Search
        </button>
      {alert && (
        <div className="d-flex justify-content-center  position">
          <Alert className="text-center w-100">
            ATTENZIONE! Compila il campo prima!
          </Alert>
        </div>
      )}
      </Form>
      <Section title="Pokemon" searchParameters="pokemon" />
      <Section title="Alien" searchParameters="alien" />
      <Section title="Resident Evil" searchParameters="resident%20evil" />
      <Section title="Digimon" searchParameters="digimon" />
      <Section title="Harry Potter" searchParameters="Harry%20Potter" />
      {/* <Section title="Harry Potter" searchParameters="h" /> */}
      <Section
        title="lord of the rings"
        searchParameters="lord%20Of%20the%20rings"
      />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
