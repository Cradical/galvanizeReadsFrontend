import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardColumns, Button } from 'reactstrap';
import { Link } from '@reach/router'

const AuthorsPage = (props) => {

    const authorData = (authors) => {
        return authors.map(element => {
            return (
                <Card>
                    <CardImg top width="100%" src={element.portrait_url} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Author</CardTitle>
                    <CardSubtitle>{element.first_name} {element.last_name}</CardSubtitle>
                    <CardText>{element.author_bio}</CardText>
                    <Button onClick={() => props.setAuthorId(element.id)}><Link to="/authorProfile" className="text-white">See More</Link></Button>
                    </CardBody>
                </Card>
            );
        })
    }

  return (
    <div>
        <section>
            <h2 className="m-3">The Authors</h2>
            <div className="m-2"> 
                <h6 className="ml-4"><Link to="/addauthor" className="text-primary">Do see what you're looking for?</Link></h6>
                <Button outline color="info" className="ml-5" size="sm"><Link to="/addauthor" className="text-info">Add Author</Link></Button>
            </div>
            
            <CardColumns className="mx-4">
                {props.loadAuthors.authors ? authorData(props.loadAuthors.authors) : null } 
            </CardColumns>

            <div className="m-2"> 
                <h6 className="ml-4"><Link to="/addauthor" className="text-primary">Do see what you're looking for?</Link></h6>
                <Button outline color="info" className="ml-5" size="sm"><Link to="/addauthor" className="text-info">Add Author</Link></Button>
            </div>
        </section>
    </div>
  );
};

export default AuthorsPage;