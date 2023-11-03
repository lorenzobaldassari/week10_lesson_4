import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";

const SectionExtended = (props) => {
  // const [arrowDisable, setArrowDisable] = useState(true);
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [films, setFilms] = useState([]);
  const [msg, setMsg] = useState(false);

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
      <Container
        fluid
        className="position-relative  my-3 mx-0 px-0"
        id="container"
      >
        {hide === false && (
          <Spinner
            animation="border"
            variant="danger"
            className="position-absolute top-50 startPos"
          />
        )}
        <Row
          className=" g-2  d-flex position-relative mx-0 px-0"
          itemRef="mm"
          id="row"
        >
          {films !== undefined &&
            films.map((film) => {
              return (
                <Col
                  key={film.imdbID}
                  className=" p-0 mx-  rounded-4 hhh col-12 col-sm-6 col-md-3 col-lg-2  d-flex align-items-center bg-none justify-content-center"
                >
                  <Link
                    to={`/MovieDetail/${film.imdbID}`}
                    className="d-flex align-items-center w-100 rounded-4 justify-content-center"
                  >
                    <img
                      src={film.Poster}
                      width="95%"
                      height=""
                      alt=""
                      className="m-0 p-0 rounded-4"
                    />
                    {/* <Button
                  className="my-2 fw-bold"
                  variant="info"
                  onClick={() => navigate(`/MovieDetail/${film.imdbID}`)}
                >
                  DETAILS
                </Button> */}
                  </Link>
                </Col>
              );
            })}
          {films === undefined && (
            <div>
              <Alert>
                Attenzione! ricerca non andata a buon fine! Torna alla home
              </Alert>
              <Button
                onClick={() => {
                  navigate(`/`);
                }}
              >
                Home
              </Button>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default SectionExtended;
