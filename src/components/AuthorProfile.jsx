//This component is to display one author and the books associated with that author.

import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  
  const AuthorProfile = (props) => {
    
    const filterAuthorById = props.loadAuthors.authors.filter(auth => {
      return auth.id === props.authorId
    })
    
    console.log('filerAuthorById: ', filterAuthorById)
    
    const createAuthorCard = (author) => {
      console.log('author: ', author[0])
      return (
      <Card className="mx-3 mt-4">
            <CardImg top width="100%" src={author[0].portrait_url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{author[0].first_name}</CardTitle>
              <CardSubtitle>{author[0].last_name}</CardSubtitle>
              <CardText>{author[0].author_bio}</CardText>
            </CardBody>
          </Card>
      )
    }

  return (
    <div>
      <h3 className="ml-3 mt-3">Author's name</h3>
      {props.loadAuthors.authors ? createAuthorCard(filterAuthorById) : null } 
    </div>
  );
  
};

export default AuthorProfile;