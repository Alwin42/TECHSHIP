import React, { useState, useEffect } from 'react';
import { Container, Card, Table, Button, Form, Modal, InputGroup, Spinner, Alert } from 'react-bootstrap';
import { useLocalStorage } from '../useLocalStorage';
import { useFetch } from '../useFetch';

function UserManagement() {
  const [users, setUsers] = useLocalStorage('admin-users', []);
  const { data: fetchedUsers, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'User' });

  useEffect(() => {
    if (fetchedUsers && users.length === 0) {
      const formattedUsers = fetchedUsers.map(u => ({
        id: u.id.toString(),
        name: u.name,
        email: u.email,
        role: 'User'
      }));
      setUsers(formattedUsers);
    }
  }, [fetchedUsers, users.length, setUsers]);

  const handleClose = () => {
    setShowModal(false);
    setEditingUser(null);
    setFormData({ name: '', email: '', role: 'User' });
  };

  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...formData, id: u.id } : u));
    } else {
      const newUser = { ...formData, id: Date.now().toString() };
      setUsers([...users, newUser]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, role: user.role });
    handleShow();
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">User Management</h2>
        <Button variant="primary" onClick={handleShow} disabled={loading || error}>+ Add New User</Button>
      </div>

      <Card className="shadow-sm border-0 rounded-4 mb-4">
        <Card.Body>
          <InputGroup className="mb-4" style={{ maxWidth: '400px' }}>
            <InputGroup.Text>🔍</InputGroup.Text>
            <Form.Control 
              placeholder="Search by name or email..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={loading || error}
            />
          </InputGroup>

          {loading && users.length === 0 ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-3 text-muted">Loading user data...</p>
            </div>
          ) : error && users.length === 0 ? (
            <Alert variant="danger" className="text-center">
              <h5 className="fw-bold mb-1">Connection Error</h5>
              <p className="mb-0">{error}</p>
            </Alert>
          ) : (
            <Table responsive hover className="align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr><td colSpan="4" className="text-center py-4 text-muted">No users found.</td></tr>
                ) : (
                  filteredUsers.map(user => (
                    <tr key={user.id}>
                      <td className="fw-bold">{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className={`badge ${user.role === 'Admin' ? 'bg-danger' : 'bg-primary'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="text-end">
                        <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleEdit(user)}>Edit</Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{editingUser ? 'Edit User' : 'Add New User'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                <option>User</option>
                <option>Admin</option>
                <option>Manager</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" type="submit">Save User</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default UserManagement;