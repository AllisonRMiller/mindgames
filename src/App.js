import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Table,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faRedo } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

  const [page, setPage] = useState(0)
  // const [char0, setchar0] = useState("")


  var char = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"];
  var header = ["I can read your mind.",
    "Pick a number from 01 - 99",
    "Add both digits together to get a new number",
    "Subtract the new number from the original number",
    " ",
    " "];
  var p = [[""],
    ["when you have your number click next"],
   ["Ex: 14 is 1 + 4 = 5", "click next to proceed"],
    ["Ex: 14 - 5 = 9", "click next to proceed"],
    ["Find your new number","Note the symbol beside your number"],
    ["Your symbol is"]];

  

  function shuffle() {
    var char0 = "";
    for (let i = char.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = char[i];
      char[i] = char[j];
      char[j] = temp;
    };
    
    char0=char[0];
    localStorage.setItem("char0",char0)

  }



  const tableHead = (props) => {


      let num = [];
      
      for (var i = 0; i < 100; i++) {
        num.push(<tr key={i}><td>
        {i}
      </td><td>
          {char[i % 9]}
        </td></tr>)


  }
    return (
      num
    )
  }



  function count() {
    // 
    shuffle();
    // 
    // console.log(char0);
    // 
    return (
      <Table>
        <thead>
          {tableHead()}
        </thead>
      </Table>
    )
  }
  

  const showSymbol = (props) => {
    return(
      <h5>{localStorage.getItem("char0")}</h5>
    )
  }


  return (
<Container>
  <Row className="justify-content-center">
    <Col className="col-md-5">
      <Card className="text-center mt-5 mx-auto h-100">
        <CardTitle className="mt-1" id="cardTitle"><h4>{header[page]}</h4>
        </CardTitle>
        <CardBody id="mainCard">
        <Container id="symbolTable">
            {page == 4 && count()}
        </Container>
          <CardText className="mt-1">
            <div>{p[page].map(function(x){return(<p>{x}</p>)})}</div>
            <div>{page==5 && showSymbol()}</div>
          </CardText>
        </CardBody>
        <CardFooter>
          {page !== 0 && (<Button className="float-left" onClick={() => setPage(0)}><FontAwesomeIcon icon={faRedo}/></Button>)}
          {page < 5 && (<Button className="float-right" onClick={() => setPage(page + 1)}><FontAwesomeIcon icon={faArrowCircleRight}/></Button>)}

        </CardFooter>

      </Card>
    </Col>
  </Row>
</Container>
  );
}

export default App;
