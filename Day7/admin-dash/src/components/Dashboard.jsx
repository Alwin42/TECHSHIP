import React from 'react';
import { Container, Row, Col, Card, Table, ProgressBar, Badge } from 'react-bootstrap';
import StatCard from './StatCard';
import { useLocalStorage } from '../useLocalStorage';

function Dashboard() {
  const [users] = useLocalStorage('admin-users', []);
  const [projects] = useLocalStorage('admin-projects', []);

  const totalUsers = users.length;
  const totalProjects = projects.length;
  const activeProjects = projects.filter(project => project.status === 'In Progress').length;
  const completedProjects = projects.filter(project => project.status === 'Completed').length;

  const recentProjects = [...projects].reverse().slice(0, 5);

  const adminCount = users.filter(u => u.role === 'Admin').length;
  const managerCount = users.filter(u => u.role === 'Manager').length;
  const userCount = users.filter(u => u.role === 'User').length;

  const getRolePercentage = (count) => totalUsers > 0 ? Math.round((count / totalUsers) * 100) : 0;

  const getStatusBadge = (status) => {
    if (status === 'Completed') return <Badge bg="success">Completed</Badge>;
    if (status === 'In Progress') return <Badge bg="primary">In Progress</Badge>;
    return <Badge bg="warning" text="dark">Pending</Badge>;
  };

  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0">Dashboard Overview</h2>
          <p className="text-muted mb-0">Welcome back! Here is what is happening today.</p>
        </div>
      </div>

      <Row className="g-4 mb-5">
        <Col xs={12} sm={6} lg={3}>
          <StatCard 
            title="Total Users" 
            value={totalUsers} 
            icon="👥" 
            colorClass="bg-primary bg-opacity-10 text-primary" 
          />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <StatCard 
            title="Total Projects" 
            value={totalProjects} 
            icon="📊" 
            colorClass="bg-info bg-opacity-10 text-info" 
          />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <StatCard 
            title="Active Projects" 
            value={activeProjects} 
            icon="🔄" 
            colorClass="bg-warning bg-opacity-10 text-warning" 
          />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <StatCard 
            title="Completed Projects" 
            value={completedProjects} 
            icon="✅" 
            colorClass="bg-success bg-opacity-10 text-success" 
          />
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={7}>
          <Card className="shadow-sm border-0 rounded-4 h-100">
            <Card.Body>
              <h5 className="fw-bold mb-4">Recent Projects</h5>
              {recentProjects.length === 0 ? (
                <p className="text-muted text-center py-4">No projects created yet.</p>
              ) : (
                <Table responsive hover className="align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>Deadline</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProjects.map(project => (
                      <tr key={project.id}>
                        <td className="fw-bold">{project.name}</td>
                        <td>{new Date(project.deadline).toLocaleDateString()}</td>
                        <td>{getStatusBadge(project.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col lg={5}>
          <Card className="shadow-sm border-0 rounded-4 h-100">
            <Card.Body>
              <h5 className="fw-bold mb-4">User Roles Distribution</h5>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Admins</span>
                  <span className="text-muted">{adminCount} ({getRolePercentage(adminCount)}%)</span>
                </div>
                <ProgressBar variant="danger" now={getRolePercentage(adminCount)} style={{ height: '8px' }} />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Managers</span>
                  <span className="text-muted">{managerCount} ({getRolePercentage(managerCount)}%)</span>
                </div>
                <ProgressBar variant="info" now={getRolePercentage(managerCount)} style={{ height: '8px' }} />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Standard Users</span>
                  <span className="text-muted">{userCount} ({getRolePercentage(userCount)}%)</span>
                </div>
                <ProgressBar variant="primary" now={getRolePercentage(userCount)} style={{ height: '8px' }} />
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;