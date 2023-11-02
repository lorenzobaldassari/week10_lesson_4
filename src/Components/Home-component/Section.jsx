import { Component, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useLocation, useNavigate } from "react-router-dom";

const Section = (props) => {
  // const [arrowDisable, setArrowDisable] = useState(true);

  const [hide, setHide] = useState(false);
  const [films, setFilms] = useState([]);
  const [msg, setMsg] = useState(false);

  const navigate = useNavigate();

  const getComment = () => {
    fetch(`http://www.omdbapi.com/?apikey=635744ab&s=${props.searchParameters}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`errore nel recuper informazioni`);
        }
      })
      .then((data) => {
        console.log(`dati recuperati`, data.Search);
        setHide(true);
        // data.search.map((elem) => setFilms(() => films.push(elem)));
        setFilms(data.Search);
      })
      .catch((error) => {
        console.log(`ERROR`, error);
        setMsg(true);
      });
  };


  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <h2 className="text-white fw-bold  mb-3 ms-2">{props.title}</h2>
      {msg === true && (
        <Alert className="bg-primary border-secondary text-white fw-bold w-60">
          Attenzione! la richiesta di dati NON e' andata a buon fine! errore
        </Alert>
      )}
      <Container fluid className="position-relative  my-3" id="container">
        {hide === false && (
          <Spinner
            animation="border"
            variant="danger"
            className="position-absolute top-50 startPos"
          />
        )}
        <Row
          className="  rowWidth d-flex position-relative"
          itemRef="mm"
          id="row"
        >
          {films.slice().map((film) => {
            return (
              <Col
                key={film.imdbID}
                className="rounded-4 p-0 mx-2 bg-secondary  hhh col-12 col-sm-6 col-md-3 col-lg-2  d-flex align-items-center flex-column"
              >
                <img
                  src={film.Poster}
                  width="100%"
                  height="300"
                  alt=""
                  className="m-0 p-0"
                />
                <Button className="my-2"
                  variant="info"
                  onClick={() =>
                    navigate(`/MovieDetail/${film.imdbID}`)
                  }
                >
                  DETAILS
                </Button>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Section;
