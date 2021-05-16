import React from 'react'
import { Button, Card, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Community() {
  return (
    <div className="Community">
    <Container>
      <Form className="mb-5" style={{ color: "#6F8FAF" }}>
        <Row>
          <Col>
              <Form.Group>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Example@gmail.com"/>
              <Form.Text ClassName="text-muted">
              We'll never share your email adress, trust us!
              </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
            </Col>
        </Row>
        <Button> Sign up  </Button>
      </Form>


      <Card className="mb-5" style={{ color: "#6F8FAF", marginBottom: 25, marginleft: 20 , marginright: 20}}>
      <Card.Body>

      <Card.Title>
       Your input matters !
      </Card.Title>

      <Card.Text>
      As the application grows, we want to better our services by having, YOU, the community find new hidden restaraunts in San Fransciso.
      </Card.Text>

      <Button> Learn More  </Button>
      </Card.Body>
      </Card>

      </Container>
    </div>
  )
}

export default Community
