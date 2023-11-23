import React, { useState } from 'react'
import './MicroFour.css'
import { Button, Card } from 'react-bootstrap'
function MicroFour() {
    const [card, setcard] = useState([
    {
        image:"firsticon.svg",
        title:"Azure AI Studio",
        text:"Build, evaluate, and deploy generative AI solutions and custom copilots.",
        link:"Explore the product"
    },
    {
        image:"secondicon.svg",
        title:"Azure OpenAI Service",
        text:"Apply advanced coding and language models to a variety of use cases.",
        link:"Explore the product"
    },
    {
        image:"thirdicon.svg",
        title:"Microsoft Fabric",
        text:"Bring data and analytics services together on an AI-powered platform.",
        link:"Explore the product"
    },
    {
        image:"fourthicon.svg",
        title:"Azure Cosmos DB",
        text:"Build or modernize scalable, high-performance apps. ",
        link:"Explore the product"
    },
    {
        image:"fifthicon.svg",
        title:"Azure Machine Learning",
        text:"Build, train, and deploy machine learning models.",
        link:"Explore the product"
    },
    {
        image:"sixthicon.svg",
        title:"Azure Kubernetes Service (AKS)",
        text:"Build and scale apps with managed Kubernetes.",
        link:"Explore the product"
    },
    ])
  return (
    <div className='fourthRow'>

        {card.map((disp)=>
        <Card style={{ width: '18rem' }} className='my-4'>
            <Card.Img variant="top" src={disp.image} style={{width:"50px",height:"50px"}} className='mx-3 my-3'/>
            <Card.Body>
                <Card.Title>{disp.title}</Card.Title>
                <Card.Text>
                {disp.text}
                </Card.Text>
                <a href="">{disp.link}</a>
            </Card.Body>
        </Card>
        )}
    </div>
  )
}

export default MicroFour