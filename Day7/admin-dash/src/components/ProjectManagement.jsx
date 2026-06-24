import React, { useState } from 'react';
import { Container, Card, Table, Button, Form, Modal } from 'react-bootstrap';
import { useLocalStorage } from '../useLocalStorage';

function ProjectManagement() {
  const [projects, setProjects] = useLocalStorage('admin-projects', []);
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', deadline: '', status: 'Pending' });

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: '', deadline: '', status: 'Pending' });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    const newProject = { ...formData, id: Date.now().toString() };
    setProjects([...projects, newProject]);
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setProjects(projects.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const getStatusColor = (status) => {
    if (status === 'Completed') return 'text-success fw-bold';
    if (status === 'In Progress') return 'text-primary fw-bold';
    return 'text-warning fw-bold';
  };

  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Project Board</h2>
        <Button variant="success" onClick={() => setShowModal(true)}>+ New Project</Button>
      </div>

      <Card className="shadow-sm border-0 rounded-4">
        <Card.Body>
          <Table responsive hover className="align-middle">
            <thead className="table-light">
              <tr>
                <th>Project Name</th>
                <th>Deadline</th>
                <th style={{ width: '200px' }}>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr><td colSpan="4" className="text-center py-4 text-muted">No projects found.</td></tr>
              ) : (
                projects.map(project => (
                  <tr key={project.id}>
                    <td className="fw-bold">{project.name}</td>
                    <td>{new Date(project.deadline).toLocaleDateString()}</td>
                    <td>
                      <Form.Select 
                        size="sm" 
                        value={project.status}
                        onChange={(e) => handleStatusChange(project.id, e.target.value)}
                        className={getStatusColor(project.status)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </Form.Select>
                    </td>
                    <td className="text-end">
                      <Button variant="outline-danger" size="sm" onClick={() => handleDelete(project.id)}>Delete</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Form onSubmit={handleAddProject}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deadline</Form.Label>
              <Form.Control required type="date" value={formData.deadline} onChange={(e) => setFormData({...formData, deadline: e.target.value})} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="success" type="submit">Create Project</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default ProjectManagement;