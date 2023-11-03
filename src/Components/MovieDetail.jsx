import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Section from "./Home-component/Section";

const MoviesDetail = () => {
  const params = useParams();
  const location = useLocation();
  const [c, setC] = useState([]);
  const navigate = useNavigate();
  const [obj, setObj] = useState({});
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState();

  const [commentObj, setCommentObj] = useState({
    comment: ``,
    rate: `3`,
    elementId: params.id,
  });

  const getComment = () => {
    fetch(`http://www.omdbapi.com/?apikey=635744ab&s&i=${params.id}
    `)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`errore nel recuper informazioni`);
        }
      })
      .then((data) => {
        console.log(`dati recuperati`, data);

        const a = data.Title.split(` `);

        let b = a.slice(0, 1);

        setC(b);

        // setC(b);
        setObj(data);
      })
      .catch((error) => {
        console.log(`ERROR`, error);
      });
  };

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(commentObj),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhOWM5ZmY2ZTNkZDAwMTQ5NWU1ZGYiLCJpYXQiOjE2OTgzMzk5OTksImV4cCI6MTY5OTU0OTU5OX0.gwIIoGT9mPP0rY1ydq5GzBjs_5BJTceiMVSoCpr8NlM",
          },
        }
      );
      if (response.ok) {
        alert("Recensione inviata!");
        setCommentObj({
          comment: "",
          rate: 1,
          elementId: params.id,
        });
        getStuff()
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };
  const getStuff = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmNhZWY2ZTNkZDAwMTQ5NWU0NzMiLCJpYXQiOjE2OTgzMjc3MjYsImV4cCI6MTY5OTUzNzMyNn0.tiIIVH3G0CZxJMnN5wdW_wBXmeiHiRSF4i4GjMz16jA",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`errore nel recuper informazioni`);
        }
      })
      .then((data) => {
        console.log(`commenti`,data);
        setReservation(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`ERROR`, error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getComment();
    getStuff();

  }, [params.id]);

  return (
    <>
      {/* <h1>siamo in movie details</h1># */}
      <Container fluid className="mb-5">
        <Row className="justify-content-cente w-100 ">
          <Col sm={12} className="">
            <Card className=" rounded-3 bg-none">
              <Row>
                <Col sm={7} className="ms-5">
                  <Card.Body className="d-flex flex-column justify-content-around hj align-items-center">
                    <Card.Title className="fs-1 fw-bold text-white ">
                      {obj.Title}
                    </Card.Title>
                    <Card.Text className="fs-5 text-center text-white">
                      {obj.Plot}
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="w-20"
                      onClick={() => navigate(`/`)}
                    >
                      HOME
                    </Button>
                  </Card.Body>
                </Col>
                <Col sm={4} className="offset- ms-5 bg-sqecondary p-0 d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="w-80 rounded-5"
                    src={obj.Poster}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={10} className="offset-1">
            <div className="my-3">
              <Form onSubmit={sendComment}>
                <Form.Group className="mb-2">
                  <Form.Label className="text-white">Recensione</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    type="textArea"
                    className="bb bg-info"
                    value={commentObj.comment}
                    onChange={(e) =>
                      setCommentObj({
                        ...commentObj,
                        comment: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <div className="d-flex w-100 justify-content-around align-items-center">
                  <Form.Group className="mb-2">
                    <Form.Label className="text-white">Valutazione</Form.Label>
                    <Form.Control
                      className="fw-bold fs-4 bg-info w-50 text-center"
                      as="select"
                      value={commentObj.rate}
                      onChange={(e) =>
                        setCommentObj({
                          ...commentObj,
                          rate: e.target.value,
                        })
                      }
                    >
                      <option className="fw-bold">1</option>
                      <option className="fw-bold">2</option>
                      <option className="fw-bold">3</option>
                      <option className="fw-bold">4</option>
                      <option className="fw-bold">5</option>
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-20 mt-4">
                    Invia
                  </Button>
                </div>
              </Form>
            </div>
            <div>
              <h2 className="text-white">Recensioni</h2>
              <ListGroup className="mb-3">
                {reservation.map((comment) => {
                  return (
                    <ListGroup.Item
                      className="fw-bold fs-4 bg-info"
                      key={comment._id}
                    >
                      {comment.comment}*--*{comment.rate}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
      {obj.Title && (
        <Section title={`Altro come ${obj.Title}`} searchParameters={c} />
      )}
    </>
  );
};

export default MoviesDetail;
