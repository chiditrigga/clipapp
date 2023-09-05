import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Button from 'react-bootstrap/esm/Button';




import computer from './images/image-computer.png'
import devices from './images/image-devices.png'
import blacklist from './images/icon-blacklist.svg'
import text from './images/icon-text.svg'
import preview from './images/icon-preview.svg'
import google from './images/logo-google.png'
import hp from './images/logo-hp.png'
import ibm from './images/logo-ibm.png'
import microsoft from './images/logo-microsoft.png'
import vector from './images/logo-vector-graphics.png'
import Card from 'react-bootstrap/Card';
import logo from './images/logo.svg'
import fb from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import ig from './images/icon-instagram.svg'

const Body = () => {
    return ( <>
    <Container fluid>
        <Row className='text-center'>
            <Col  xs={12}  >
                   <div className='desk-head d-none d-sm-block '>
                    <Image src={logo} className=' ' />
                   </div>
                   <div className='d-block d-sm-none small-head'>
                   <Image src={logo} className='' />
                   </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} className='text-center '>
                <div className="mw mx-auto">
                     <h2>A history of everything you copy</h2>
                <p className='py-3 '>Clipboard allows you to track and organize everything you copy.Instantly access your Clipboard on all your devices</p>
                <Button  className='gre border-0 ww'>Download for ios</Button> 
                
                 <Button className='blu border-0 ms-0 ms-md-3 mt-3 ww mt-sm-0'>Download for Mac</Button> <br /> <br /><br /><br /><br />
                <h3 className='py-2 py-md-3'>Keep track of your snippets</h3>
                <p className='pb-3 pb-md-5'>Clipboard instantly stores any item you copy in the cloud,meaning you can access  your snippets immediately on all your devices. Our Mac and ios apps will help you organize everything.</p>
                </div>
               

            </Col>
        </Row>
        <Row >
            <Col xs={12} md={6} className='ps-md-0 pe-md-5'>
                <Image className='w-100 ' fluid src={computer} />
            </Col>
            <Col xs={12} md={4} className='ms-md-5 text-md-start p-4 text-center pt-md-5 mt-md-3'>
                <div className="mw">
                    <h2>Quick Search</h2>
                <p>Easily search your snippets by content, category,web adress,application and more</p>
                <br />
                <h2>icloud Syns</h2>
                <p>Instantly saves and syncs snippets across all your devices.</p>
                <br />
                <h2>Complete History</h2>
                <p>Retrive any snippets from the first moment you started using the app</p>
                
                </div>
                
            </Col>
        </Row>
        <Row>
            <Col xs={12} className='text-center mt-5 pt-5 px-4'>
                <div className="mw mx-auto">
                     <h2 className='pb-2 pb-md-3 px-4'>Access clipboard anywhere</h2>
                <p className='mb-5 pb-3'>Whether you're on the go,or at your computer,you can access all your clipboard
                snippets in a few simple clicks.</p>
                </div>
               
            </Col>
        </Row>
        <Row className='text-center'>
            <Col xs={12}  ><Image fluid src={devices}  /></Col>
        </Row>
        <Row className='text-center'>
            <Col xs={12} className='mb-5'>
                <h2 className='py-2 px-3'>Super charge your workflow</h2>
                <p className='px-2'>We've got tools to boost your productivity</p>
            </Col>
        </Row>
        <Row className='mb-5 pb-md-3'>
            <Col xs={12} md={4} className='pt-4'>
            <Card className='gap-4 text-center border-0'>
        <Card.Img className=' mx-auto tot' variant="top" fluid src={blacklist} />
        <Card.Body >
          <Card.Text>
          <h2>Create blacklists</h2>
          <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources </p>
          </Card.Text>
        </Card.Body>
       
      </Card>
            </Col>
            <Col xs={12} md={4} className='pt-4'>
            <Card className='gap-4 text-center border-0'>
        <Card.Img className=' mx-auto tot' variant="top" fluid src={text} />
        <Card.Body >
          <Card.Text>
            <h2>Plain text snippets</h2>
          Remove unwanted formatting from copied text for a consistent look.
          </Card.Text>
        </Card.Body>
       
      </Card>
            </Col>
            <Col xs={12} md={4} className='pt-4'>
            <Card className='gap-4 text-center border-0'>
        <Card.Img className=' mx-auto tot' variant="top" fluid src={preview} />
        <Card.Body >
          <Card.Text>
            <h2>Sneak preview</h2>
          Quick preview of all snippets on your Clipboard
          for easy access
          </Card.Text>
        </Card.Body>
       
      </Card>
            </Col>
        </Row>
     
        <Row className='text-center d-flex justify-content-center  mb-5 pb-3'>
            <Col xs={12} md={2}  className='p-4'>
                <Image fluid src={google} />
            </Col>
            <Col xs={12} md={2} className='p-4'>
            <Image fluid src={ibm} />
            </Col>
            <Col xs={12} md={2}  className='p-4'>
            <Image fluid src={microsoft} />
            </Col>
            <Col xs={12} md={2}  className='p-4'>
            <Image fluid src={hp} />
            </Col>
            <Col xs={12} md={2}  className='p-4'>
            <Image fluid src={vector} />
            </Col>
        </Row>
        <Row className='pb-5'>
            <Col xs={12} className='text-center py-3 px-4'>
               <h2 className='py-2 p-md-3 px-3'>Clipboard for ios and Mac OS</h2>
               <div className="mw mx-auto">
                 <p className='mb-4'> Available for free on the App Store. Download for Mac or ios,sync with icloud and you're ready to start adding to your clipboard.</p>
               </div>
             
              <br />
              <Button className='gre border-0 ww'>Download for ios</Button> <Button className='blu border-0 ms-0 ms-md-3 mt-3 mt-sm-0 ww'>Download for Mac</Button>

            </Col>
        </Row>
        <Row className='text-center pt-5 footer'>
            <Col xs={12} md={2}>
           <Image className='tot py-3' src={logo} fluid />
            </Col>
            <Col className='' xs={12} md={2}>FAQ's <div className="py-3">
                Contact Us 
                </div></Col>
            <Col xs={12} md={2}>Privacy Policy <div className="py-3">
                Press Kit 
                </div></Col>
            <Col className='pb-3' xs={12} md={2}>install Guide</Col>
            <Col xs={12} md={2} ><Image src={fb} className='p-3'/> <Image src={twitter}  className='p-3' /> <Image src={ig}  className='p-3'/></Col>
        </Row>
    </Container>
    
    </> );
}
 
export default Body;