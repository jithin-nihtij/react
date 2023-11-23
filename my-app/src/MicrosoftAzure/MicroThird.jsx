import React from 'react'
import './MicroThird.css'
import { Button, Container, Dropdown, DropdownButton, Image, Table } from 'react-bootstrap'

function MicroThird() {

  return (
    <div className='thirdRowBg'>
        <Container className='my-5'>
            <p>SOLUTIONS</p>
            <h3>Find solutions for putting your ideas into action</h3>
            
        <Table responsive="md" >
        <thead >
          <tr >
            <td><Button style={{borderRadius:"20px"}}>Featured Solutions</Button></td>
            <td><Button className='mx-3' style={{borderRadius:"20px"}}> AI </Button></td>
            <td><Button className='mx-3' style={{borderRadius:"20px"}}>Cloud Migration</Button></td>
            <td><Button className='mx-3' style={{borderRadius:"20px"}}>Data Analytics</Button></td>
            <td><Button className='mx-3' style={{borderRadius:"20px"}}>App Development</Button></td>
          </tr>
        </thead>
      </Table>

    <div className='scrollAndImg'>
      <div className='scrollBar my-5'>

            <p className='drpdwns'>Ai</p>
            <p className='drpdwns'>Migration and modernization</p>
            <p className='drpdwns'>Windows server on Azure</p>
            <p className='drpdwns'>SQL server migration</p>
            <p className='drpdwns'>Cloud Analytics</p>
      </div>
      <div className='thirdRowImg'>
      <Image src={require('./tablet.avif')}  style={{borderRadius:"20px",objectFit:"cover",width:"100%"}}/>
      </div>
    </div>
        </Container>
    </div>
  )
}

export default MicroThird