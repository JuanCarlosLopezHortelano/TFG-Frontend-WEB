import React from 'react';
import { Button, Tag, Card } from 'antd';
import type { CSSProperties } from 'react';

type Status = 'pending' | 'approved' | 'rejected' | 'open' | 'in-progress' | 'completed';

const statusColor: Record<Status,string> = {
  pending:      'gold',
  approved:     'green',
  rejected:     'red',
  open:         'blue',
  'in-progress':'orange',
  completed:    'gray',
};

interface StatusCardProps {
  title:      string;
  subtitle?:  string;
  details?:   string;
  status:     Status;
  onAction?:  () => void;
  actionLabel?: string;
  style?:     CSSProperties;
}

export function StatusCard({
  title, subtitle, details,
  status, onAction, actionLabel='Acción',
  style
}: StatusCardProps) {
  return (
    <Card style={{ marginBottom: 16, ...style }} bodyStyle={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <div>
        <h3 style={{ margin: 0 }}>{title}</h3>
        {subtitle && <p style={{ margin: '4px 0' }}>{subtitle}</p>}
        {details && <small style={{ color:'#666' }}>{details}</small>}
      </div>
      <div style={{ textAlign:'right' }}>
        <Tag color={statusColor[status]} style={{ textTransform:'capitalize' }}>
          {status.replace('-', ' ')}
        </Tag>
        {onAction && (
          <Button size="small" style={{ marginLeft: 8 }} onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}
