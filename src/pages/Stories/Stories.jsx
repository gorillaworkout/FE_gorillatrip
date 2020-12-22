import React,{Component} from 'react';
import Header from '../../components/Header'
import './Stories.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/Button';
import Stories1 from '../../assets/apartment-1.jpeg'
class Stories extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div>
                <Header/>
                <div className="div-atas">
                    <div className="div-atas-kiri">
                        <p className="online-exp">ONLINE EXPERIENCES</p>
                        <p>Find unique activities led by one-of-a-kind hosts — all without leaving home.</p>
                    </div>
                    <div className="div-atas-kanan">
                        <div className="foto-1">
                            <img src={Stories1} className="stories" alt="testing"/>
                        </div>
                        <div className="foto-2">
                            <img src={Stories1} className="stories" alt="testing"/>
                            <img src={Stories1} className="stories" alt="testing"/>
                        </div>
                        <div className="foto-1">
                            <img src={Stories1} className="stories" alt="testing"/>
                            <img src={Stories1} className="stories" alt="testing"/>
                        </div>
                        <div className="foto-2">
                            <img src={Stories1} className="stories" alt="testing"/>
                            <img src={Stories1} className="stories" alt="testing"/>
                        </div>
                        <div className="foto-1">
                            <img src={Stories1} className="stories" alt="testing"/>
                            <img src={Stories1} className="stories" alt="testing"/>
                        </div>
                       
                    </div>
                </div>

                <div className="option">
                    <div className="names-opt">
                        <p>Dates</p>
                    </div>
                    <div className="names-opt">
                        <p>Time of day</p>
                    </div>
                    <div className="names-opt">
                        <p>Price</p>
                    </div>
                    <div className="names-opt">
                        <p>Language Offered</p>
                    </div>
                    <div className="names-opt">
                        <p>Great for Groups</p>
                    </div>
                    <div className="names-opt">
                        <p>Family Friendly</p>
                    </div>
                    <div className="names-opt">
                        <p>Animals</p>
                    </div>
                    <div className="names-opt">
                        <p>Arts & Writing</p>
                    </div>
                    <div className="names-opt">
                        <p>Baking</p>
                    </div>
                </div>

                <div className="option-card">
                    <div className="opt-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Stories1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="opt-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Stories1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="opt-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Stories1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="opt-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Stories1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            </>
         );
    }
}
 
export default Stories ;