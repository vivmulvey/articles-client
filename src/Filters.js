import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';



class Filters extends Component {
  render(){
    const categories = this.props.categories;

    return (
      <Accordion className="mt-2">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Filters
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={2}>
                    Categories
                  </Form.Label>
                  <Col sm={10}>
                    {categories.map(category => (
                      <Form.Check key={category.id} type="radio" name="category" value={category.title} label={category.title} />
                    ))}
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Author
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Author" />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Articles/page
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="number" placeholder="0" />
                </Col>
              </Form.Group>
            </Form>
            </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    );
  }
}
  

export default Filters;
