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
            <Col xs={12} sm={12} className='text-center'>
                <h2>A history of everything you copy</h2>
                <p className='py-3'>Clipboard allows you to track and organize everything you copy.Instantly <br /> access your Clipboard on all your devices</p>
                <Button className='gre'>Download for ios</Button> 
                
                 <Button className='blu ms-0 ms-md-3 mt-3 mt-sm-0'>Download for Mac</Button> <br /> <br /><br /><br /><br />
                <h3 className='py-2 py-md-3'>Keep track of your snippets</h3>
                <p className='pb-3 pb-md-5'>Clipboard instantly stores any item you copy in the cloud,meaning you can access <br /> your snippets immediately on all your devices. Our Mac and ios apps will help you <br /> organize everything.</p>

            </Col>
        </Row>
        <Row >
            <Col xs={12} md={6} className='ps-md-0 '>
                <Image className='w-100 ' fluid src={computer} />
            </Col>
            <Col xs={12} md={4} className='ms-md-5 '>
                <h2>Quick Search</h2>
                <p>Easily search your snippets by content, <br /> category,web adress,application and more</p>
                <br />
                <h2>icloud Syns</h2>
                <p>Instantly saves and syncs snippets across all  <br /> your devices.</p>
                <br />
                <h2>Complete History</h2>
                <p>Retrive any snippets from the first moment <br /> you started using the app</p>
                
            </Col>
        </Row>
        <Row>
            <Col xs={12} className='text-center mt-5 pt-5'>
                <h2 className='pb-2 pb-md-3'>Access clipboard anywhere</h2>
                <p className='mb-5 pb-3'>Whether you're on the go,or at your computer,you can access all your clipboard <br />
                snippets in a few simple clicks.</p>
            </Col>
        </Row>
        <Row className='text-center'>
            <Col xs={12}  ><Image fluid src={devices}  /></Col>
        </Row>
        <Row className='text-center'>
            <Col xs={12} className='mb-5'>
                <h2 className='py-2'>Super charge your workflow</h2>
                <p>We've got tools to boost your productivity</p>
            </Col>
        </Row>
        <Row className='mb-5 pb-md-3'>
            <Col xs={12} md={4}>
            <Card className='gap-4 text-center border-0'>
        <Card.Img className=' mx-auto tot' variant="top" fluid src={blacklist} />
        <Card.Body >
          <Card.Text>
          <h2>Create blacklists</h2>
          <p>Ensure sensitive information never makes its <br /> way to your clipboard by excluding certain <br /> sources </p>
          </Card.Text>
        </Card.Body>
       
      </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card className='gap-4 text-center border-0'>
        <Card.Img className=' mx-auto tot' variant="top" fluid src={text} />
        <Card.Body >
          <Card.Text>
            <h2>Plain text snippets</h2>
          Remove unwanted formatting from copied text <br /> for a consistent look.
          </Card.Text>
        </Card.Body>
       
      </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card className='gap-4 text-center border-0'>
        <Card.Img className=' mx-auto tot' variant="top" fluid src={preview} />
        <Card.Body >
          <Card.Text>
            <h2>Sneak preview</h2>
          Quick preview of all snippets on your Clipboard <br />
          for easy access
          </Card.Text>
        </Card.Body>
       
      </Card>
            </Col>
        </Row>
     
        <Row className='text-center d-flex align-items-middle mb-5 pb-md-3'>
            <Col xs={12} md={2} >
                <Image fluid src={google} />
            </Col>
            <Col xs={12} md={2} className=''>
            <Image fluid src={ibm} />
            </Col>
            <Col xs={12} md={2}>
            <Image fluid src={microsoft} />
            </Col>
            <Col xs={12} md={2}>
            <Image fluid src={hp} />
            </Col>
            <Col xs={12} md={2}>
            <Image fluid src={vector} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} className='text-center py-3'>
               <h2 className='py-2 p-md-3'>Clipboard for ios and Mac os</h2>
              <p className='mb-4'> Available for free on the App Store. Download for Mac or ios,sync with icloud and <br /> you're ready to start adding to your clipboard.</p>
              <br />
              <Button className='gre'>Download for ios</Button> <Button className='blu ms-0 ms-md-3 mt-3 mt-sm-0'>Download for Mac</Button>

            </Col>
        </Row>
        <Row className='text-center'>
            <Col xs={12} md={2}>
           <Image className='tot' src={logo} fluid />
            </Col>
            <Col xs={12} md={2}>FAQ's <br /> Contact Us</Col>
            <Col xs={12} md={2}>Privacy Policy <br /> Press Kit</Col>
            <Col xs={12} md={2}>install Guide</Col>
            <Col xs={12} md={2}><Image src={fb} /> <Image src={twitter} /> <Image src={ig} /></Col>
        </Row>
    </Container>
    
    </> );
}
 
export default Body;