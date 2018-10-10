import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from '@reach/router'

const Home = (props) => {
  return (
    <div>
      <Card className="m-4">
        <CardImg top width="100%" src="https://bit.ly/2C5QNkh" alt="Card image cap" />
        <CardBody>
          <CardTitle>Authors</CardTitle>
          <CardSubtitle>The G.Reads Community</CardSubtitle>
          <CardText>Click below to browser the recommended authors we have in the library.</CardText>
          <Button><Link to="/authors" className="text-white">Button</Link></Button>
        </CardBody>
      </Card>
      <br>

      </br>
      <Card className="m-4">
        <CardImg top width="100%" src="https://bit.ly/2Cz56Po" alt="Card image cap" />
        <CardBody>
          <CardTitle>Books</CardTitle>
          <CardSubtitle>The G.Reads Library</CardSubtitle>
          <CardText>Check out the books on our digital shelves. Great for gaining new skills.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;