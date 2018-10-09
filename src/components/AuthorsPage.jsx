import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const AuthorsPage = (props) => {
  return (
    <div>

    <section>
        <h2>Author's Page</h2>
        <ul>
          {/* {data.map(element => { */}
            {/* return ( */}
              <li>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Conrad Wright</CardTitle>
                    <CardSubtitle>The Philosopher</CardSubtitle>
                    <CardText>know thyself and a bunch of other Latin blah.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                </Card>
              </li>
            {/* ); */}
          {/* })} */}
        </ul>
      </section>

      
    </div>
  );
};

export default AuthorsPage;