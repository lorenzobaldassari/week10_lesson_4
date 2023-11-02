import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const MoviesDetail = () => {
  const params = useParams();
  const location = useLocation();

  const navigate = useNavigate();
  const [obj, setObj] = useState({});
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [params]);

  return (
    <>
      {/* <h1>siamo in movie details</h1># */}
      <Container>
        <Row className="justify-content-center">
          <Col sm={4} className="offset-">
            <Card className="bg-secondary rounded-3">
              <Card.Img variant="top" src={obj.Poster} />
              <Card.Body className="">
                <Card.Title className="fs-1 fw-bold text-white">{obj.Title}</Card.Title>
                <Card.Text className="fs-5 text-white">{obj.Plot}</Card.Text>
                <Button variant="primary" onClick={() => navigate(`/`)}>
                  HOME
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
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
                <Form.Group className="mb-2">
                  <Form.Label className="text-white">Valutazione</Form.Label>
                  <Form.Control
                  className="fw-bold fs-4 bg-info w-10 text-center"
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
                <Button variant="primary" type="submit">
                  Invia
                </Button>
              </Form>
            </div>
            <div>
              <h2 className="text-white">Recensioni</h2>
              <ListGroup className="mb-3">
                {reservation.map((comment) => {
                  return (
                    <ListGroup.Item variant="primary" key={comment._id}>
                      {comment.comment}*--*{comment.rate}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MoviesDetail;
