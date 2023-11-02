import { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';    

class Title extends Component{

    state={

    }

    render(){


        return(
            <div
            className="ms-3 mt-4 mb-5 d-flex align-items-center justify-content-center justify-content-md-start"
          >
            <h1 className="me-3 text-white">TV Shows</h1>
          
            <DropdownButton id="dropdown-basic-button" title="Genres" variant="secondary" fontSize="" menuVariant="dark" className="fw-bold">
                <Dropdown.Item href="#/action-1" className="bg-secondary fw-bold text-white">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="bg-secondary fw-bold text-white ">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="bg-secondary fw-bold text-white ">Horror</Dropdown.Item>
            </DropdownButton>      
          </div>

        )



    }


}

export default Title