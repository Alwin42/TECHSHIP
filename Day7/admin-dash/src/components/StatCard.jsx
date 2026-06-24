import React from 'react';
import { Card } from 'react-bootstrap';

function StatCard({ title, value, icon, colorClass }) {
  return (
    <Card className="shadow-sm border-0 h-100 rounded-4">
      <Card.Body className="d-flex align-items-center p-4">
        <div 
          className={`rounded-circle d-flex justify-content-center align-items-center me-3 ${colorClass}`}
          style={{ width: '60px', height: '60px', fontSize: '24px' }}
        >
          {icon}
        </div>
        <div>
          <h6 className="text-muted mb-1 fw-bold text-uppercase" style={{ fontSize: '12px' }}>
            {title}
          </h6>
          <h3 className="mb-0 fw-bold">{value}</h3>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StatCard;