import { Component } from "react"
import Button from 'react-bootstrap/Button';
import { FaInstagram,FaSquareFacebook,FaTwitter,FaYoutube } from "react-icons/fa6";

class Footer extends Component{

    state={

    }

    render(){

        return(
           

                    <div id="footer" className="mt-5 mb-2 text-info  d-flex justify-content-center w-100">
                    <div className="container-fluid  footer w-70">
                        <div className="d-flex justify-content-start align-items-center">
                          <span className="me-2"><FaSquareFacebook/></span>  
                          <span className="mx-2"><FaInstagram/></span>  
                          <span className="mx-2"><FaTwitter/></span>  
                          <span className="mx-2"><FaYoutube/></span>  
                          
                            <i className="fab mx-3 mb-2 mt-5 fa-twitter"></i>
                            <i className="fab mx-3 mb-2 mt-5 fa-youtube"></i>
                        </div>
                        <div className="row">
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Audio and subtitles</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Audiodescription</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Help center</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Gift Cards</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Media center</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Investro Relations</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Jobs</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Term Of Use</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Privacy</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Legal notcies</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">oocki preferences</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Corporate information</div>
                        <div className="col-6 col-md-4 col-lg-3 fs-7">Contact us</div>
                    </div>
                    <div className="d-flex justify-content-start flex-column align-items-start">
                            
                        <Button
                            variant=""
                            className="box-shadow1 btn btn-outline-info rounded-0 mt-3 mb-2"
                        >
                            Service code
                        </Button>
                        <div id="footerAncor"
                            className="text-center pb-3"
                            // style="background-color: rgba(0, 0, 0, 0.2)"
                        >
                            © 2020 Copyright:
                            <a  className="text-info" href="https://mdbootstrap.com/"
                            >MDBootstrap.com</a>
                         </div>
                     </div>
                     </div>
            </div>

              
          
              )
   
   
            }

    
}

export default Footer