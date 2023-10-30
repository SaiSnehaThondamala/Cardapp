import React, { useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Conter.css"

const Conter = () => {
   const[users,setUsers]=useState([]) 
  const getData=async()=>{
  const res=await fetch("https://www.reddit.com/r/reactjs.json");
  const actualData=await res.json();
  console.log(actualData);
  setUsers(actualData.data.children);
  }  
  useEffect(()=>{
   getData()
  },[])
  return (
    <div className='container'>
      {users.map((cvalue,index,arr)=>{
        return(
          <Card style={{margin:"20px",padding:"20px"}}>
          <Card.Body>
            <Card.Title style={{textDecoration:"Underline"}}>{cvalue.data.title}</Card.Title>
            <Card.Text>{cvalue.data.selftext_html}</Card.Text>
          </Card.Body>
          <Row>
            <Col>
            <Card.Text style={{color:"green",fontWeight:"bold",paddingLeft:"10px"}}>SCORE:{cvalue.data.score}</Card.Text>
            </Col>
            <Col>
            <Card.Link>
            <a href={cvalue.data.url} target='_blank' rel='noopener noreferrer'>{cvalue.data.url}</a>
            </Card.Link>
            <Card.Link>
            </Card.Link>
            </Col>
          </Row>
          </Card>
        )
      })}
    
    </div>
  )
}

export default Conter