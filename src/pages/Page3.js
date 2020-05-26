import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './Page3.css';

function Page3(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">User</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="anonimous"
        />
        
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea rows=20" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup>
      <Button>Submit</Button>
      </FormGroup>
    </Form>
  );
}

export default Page3;
