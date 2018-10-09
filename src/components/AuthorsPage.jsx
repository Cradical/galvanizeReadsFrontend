import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const AuthorsPage = (props) => {
  return (
    <div>

    <section>
        <h2 className="m-3">Author's Page</h2>
            <Card className="m-4">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Conrad Wright</CardTitle>
                <CardSubtitle>The Philosopher</CardSubtitle>
                <CardText>know thyself and a bunch of other Latin blah.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
      </section>

      
    </div>
  );
};

export default AuthorsPage;