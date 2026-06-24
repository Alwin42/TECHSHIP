import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5 pt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-secondary mb-3">
          Welcome to Admin Dash
        </h1>
        <p className="lead text-secondary mb-2">
          Admin functions made simple.
        </p>
        <p className="text-muted mb-4">
          Manage your users, track projects, and automate your entire workflow securely from one place.
        </p>
        <div>
          <Button variant="primary" size="lg" className="me-3 shadow-sm px-4">
            Go to Dashboard
          </Button>
          <Button variant="outline-secondary" size="lg" className="shadow-sm px-4">
            View Settings
          </Button>
        </div>
      </div>
      
      <Row className="g-4 mt-2">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 bg-light rounded-4 hover-lift">
            <Card.Body className="text-center p-4">
              <h4 className="fw-bold text-dark">User Management</h4>
              <Card.Text className="text-muted">
                Add, edit, delete, and search through your entire user database with ease.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 bg-light rounded-4 hover-lift">
            <Card.Body className="text-center p-4">
              <h4 className="fw-bold text-dark">Project Tracking</h4>
              <Card.Text className="text-muted">
                Monitor deadlines, update project statuses, and keep your team aligned.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 bg-light rounded-4 hover-lift">
            <Card.Body className="text-center p-4">
              <h4 className="fw-bold text-dark">System Automation</h4>
              <Card.Text className="text-muted">
                Set up automated workflows and let the dashboard do the heavy lifting.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;