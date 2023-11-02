import { Component } from "react";
import {Col, Container, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


 class TvShows extends Component{
    // const [arrowDisable, setArrowDisable] = useState(true);
    state=({
        films:[],    
        hide:false, 
        msg: false
    })
    
    getComment=()=>{
        
       
        fetch(`http://www.omdbapi.com/?apikey=635744ab&s=tv%20show`
       )
        .then((response)=>{
            if(response.ok){
                return  response.json()
            }else{
                throw new Error(`errore nel recuper informazioni`)
            }
        })
        .then((data)=>{
            console.log(`dati recuperati`, data.Search)
            this.setState({
                
                hide:true,
                films:data.Search,
                    
            })
           
            
        })
        .catch(error=>{
            console.log(`ERROR`,error)
            this.setState({
                msg:true,
                // error:error
            })
           
        })}
        componentDidMount(){
        
            this.getComment()
        }

 
        
    render(){


        return(<>
        
                <h2 className="text-white fw-bold  mb-3 ms-2">{this.props.title}</h2>
               { this.state.msg === true &&
                (<Alert className="bg-primary border-secondary text-white fw-bold w-60">
                   Attenzione! la richiesta di dati NON e' andata a buon fine!
                   errore{this.state.error}
                </Alert>)
               }
            <Container fluid className="position-relative  my-3" id="container">
                {
                    this.state.hide===false &&
                    (<Spinner animation="border" variant="danger" className="position-absolute top-50 startPos" />)
                }
            <Row className="g-3 rowWidth d-flex position-relative" itemRef="mm" id="row">
                
                {
                    
                    this.state.films.slice().map(film=>{
                    return(
                     <Col key={film.imdbID}   
                      className="colWidth col-12 col-sm-6 col-md-3 col-lg-2 CarImg d-flex align-items-center">
                        <img 
                            src={film.Poster}
                            width="100%"
                            // height="100%"
                            alt=""
                        />
                    </Col>
                   )
                    })
                }
            </Row>            
            </Container>
                </>

        )



    }


}

export default TvShows