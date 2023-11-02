import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../assets/netflix_logo.png"
import avatar from "../assets/avatar.png"
import {FaPiedPiperHat} from "react-icons/fa6";



function Login() {
  return (
    <div id="login">
        <div>
        <img
          src={logo}
          width="100"
          alt="netflix logo"
        />
      </div>
      <Container fluid className="container-fluid container1 mb-5 mb-lg-0">
        <Row>
          <Col  className="col-8 offset-2">
          <h1 className="display-2 fw-semibold">Edit Profile</h1>
            <hr className="hr2" />
          </Col>
        </Row>
        <Row>
          <Col className="col-8 offset-2 col-lg-4 offset-lg-0">
          <div
              className="d-flex justify-content-start my-2 justify-content-lg-end"
            >
              <div className="position-relative">
                <div className="position-absolute pencil d-flex justify-content-center align-items-center">
                  <span><FaPiedPiperHat/></span>
                </div>
                <img
                  src={avatar}
                  className="box-shadow1"
                  width="150"
                  alt=""
                />
              </div>
            </div>

          </Col>
          <Col className="col-8 offset-2 col-lg-6 offset-lg-0 d-flex flex-column justify-content-around right-column p-1">
          <div
              className="d-flex flex-column justify-content-between my-3 align-items-start flex-lg-grow-1"
            >
              <Button
                type="button"
                className="btn btn-info py-2 hr3 text-start text-white rounded-0 mt-2 box-shadow1 strive"
              >
                Strive student
              </Button>
              <div className="d-flex">
                <div
                  className="input-group d-flex flex-column justify-content-center mt-3"
                >
                  Language:
                  <Button
                    className="box-shadow1 btn btn-outline-secondary dropdown-toggle block border border-1 border-white text-white bg-black mt-1 rounded-0 py-0 px-2 text-start language w-20"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </Button>
                </div>
              </div>
              <hr className="mb-0 hr" />
            </div>
            <div className="my-2 flex-lg-grow-0">
              <p>Maturity settings</p>
              <Button
                type="button "
                className="box-shadow1 btn btn-dark py-1 px-3 fw-bold fs-9 rounded-0 mb-2"
              >
                ALL MATURITY RATINGS
              </Button>
              <p>Show title of all maturity ratings for the profile</p>
              <Button
              variant="outline"
                type="button"
                className="box-shadow1 btn btn-outline-info fs-7 py-1 px-4 rounded-0"
              >
                EDIT
              </Button>
              <hr className="hr" />
            </div>
            <div className="flex-lg-grow-1 flex-grow-1">
              <h6 className="fs-5 fw-semibold">Autoplay controls</h6>
              <div className="form-check">
                <input
                  className="form-check-input check text-bg-balck"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                
                />
                <label className="fs-7 form-check-label" for="flexCheckDefault">
                  Autoplay next episode in aseries on all devices
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input check"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="fs-7 form-check-label" for="flexCheckDefault">
                  Autoplay previeus while browsing on all devices
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gx-3 gy-2 finalButtons">
          <Col className="col-9 col-lg-9 offset-2">
          <hr className="hr2"  />
          </Col>
          <Col className="col-7 offset-2 col-md-2">
          <Button
          variant="outline"
              type="button"
              // onclick="window.location.href=`home-page.html`"
              className="btn btn-outline-info box-shadow1 w-100 rounded-0"
            >
              SAVE
            </Button>
          </Col>
          <Col className="col-7 offset-2 col-md-3 offset-md-0">
          <Button
          variant="outline"
              type="button"
              className="box-shadow1 btn btn-outline-info rounded-0 w-100"
            >
              CANCEL
            </Button>
          </Col>
          <Col className="col-7 offset-2 col-md-3 offset-md-0">
          <Button
          variant="outline"
              type=" box-shadow1 button"
              className="btn btn-outline-info rounded-0 w-100"
            >
              DELETE PROFILE
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;