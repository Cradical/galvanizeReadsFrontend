import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddAuthor extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                first_name : '',
                last_name : '',
                author_bio : '',
                portrait_url : ''
            }
    }

    onSubmit = (event) => {
        // event.preventDefault()
        const { first_name, last_name , author_bio, portrait_url } = this.state
        const authors = {
            first_name,
            last_name,
            author_bio,
            portrait_url
        }
        console.log('before pass: ', authors)
        this.props.addAuthor(authors)
    }

    onChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }

  render() {
    return (
      <Form onSubmit={this.onSubmit} className="mx-3">
        <FormGroup row>
          <Label for="firstName" sm={2}>Author's info</Label>
          <Col sm={10}>
            <Input type="text" name="first_name" id="firstName" placeholder="First Name" required onChange={this.onChange}/>
          </Col>
          <Label for="lastName" sm={2}></Label>
          <Col sm={10}>
            <Input className="mt-3" type="text" name="last_name" id="lastName" placeholder="Last Name" required onChange={this.onChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="authorBio" sm={2}>The Author's Bio</Label>
          <Col sm={10}>
            <Input type="textarea" name="author_bio" id="authorBio" required onChange={this.onChange}/>
            <FormText color="muted">
                Provide a short description of the author's background.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="portrait_url" sm={2}>The Author's Photo</Label>
          <Col sm={10}>
            <Input type="url" name="portrait_url" id="portraitURL" required onChange={this.onChange}/>
            <FormText color="muted">
              Copy and paste the URL of the author's photo above. 
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>Checkbox</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
              </Label>
              {/* eslint-disable-next-line */}
              <FormText color="muted"><span role="img" alt="pointer">👆</span>Click this cool checkbox</FormText>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}