import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';
import { Link } from '@reach/router'

const Home = (props) => {

  return (
    <div>
    <CardDeck className="mx-2 mt-2">
      <Card className="display-card">
        <CardImg top width="100%" src="https://bit.ly/2C5QNkh" alt="Card image cap" />
        <CardBody>
          <CardTitle>Authors</CardTitle>
          <CardSubtitle>The G.Reads Community</CardSubtitle>
          <CardText>Click below to browser the recommended authors we have in the library.</CardText>
          <Button><Link to="/authors" className="text-white">The Authors</Link></Button>
        </CardBody>
      </Card>
  
      <Card className="display-card">
        <CardImg top width="100%" src="https://bit.ly/2Cz56Po" alt="Card image cap" />
        <CardBody>
          <CardTitle>Books</CardTitle>
          <CardSubtitle>The G.Reads Library</CardSubtitle>
          <CardText>Check out the books on our digital shelves. Great for gaining new skills.</CardText>
          <Button><Link to="/books" className="text-white">The Books</Link></Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default Home;