import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="secondary"style={{ paddingLeft:28,paddingBottom:15}} >
      <MailIcon color="action" />
    </Badge>
  );
}