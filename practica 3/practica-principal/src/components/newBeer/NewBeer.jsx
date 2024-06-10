
import PropTypes from "prop-types"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap";

const NewBeer = ({beers, setBeers}) =>{

    // estado para manejar el modal. falso (no se ve)

    const [show, setShow] = useState(false);
    const [beerName, setBeerName] = useState("");
    const [beerPrice, setBeerPrice] = useState("");
    const [beerStyle, setBeerStyle] = useState("");

    const beerNameHandler = (event)=>{
        setBeerName(event.target.value);
    }

    const beerPriceHandler = (event)=>{
        setBeerPrice(event.target.value);
    }

    const beerStyleHandler = (event)=>{
        setBeerStyle(event.target.value);
    }



    const newBeerHandler = () =>{

        setShow(true);
    }

    const handleClose = () =>{
        setShow(false);
        setBeers([...beers, {id: 5,
            beerStyle: beerStyle,
            beerName: beerName,
            price: beerPrice,
            available: false
        }])
    
    }
    // cierra modal., crea nueva cerveza



    return(
        <> 
        <Button variant="primary" onClick={newBeerHandler}>
        Add new beer
      </Button>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Which beer do you want to add?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Beer name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={beerNameHandler}
                value={beerName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Beer price</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                onChange={beerPriceHandler}
                value={beerPrice}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Beer style</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={beerStyleHandler}
                value={beerStyle}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Add new beer
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default NewBeer;

NewBeer.propTypes={
    beers: PropTypes.array,
    setBeers: PropTypes.func
}