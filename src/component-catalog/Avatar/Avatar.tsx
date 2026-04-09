import React from 'react';
import { AvatarProps } from './Avatar.types';
import { 
  StyledAvatar, 
  SectionContainer, 
  Header, 
  Card, 
  AvatarRow 
} from './Avatar.styles';
import { Typography } from '@mui/material';

const Avatar: React.FC<AvatarProps> = ({ 
  size = 'md', 
  customVariant = 'default', 
  children, 
  ...props 
}) => {
  return (
    <StyledAvatar size={size} customVariant={customVariant} {...props}>
      {children}
    </StyledAvatar>
  );
};

/**
 * AvatarSection: Orchestrator component to match Figma Layout
 */
export const AvatarSection: React.FC = () => {
  return (
    <SectionContainer>
      <Header>
        <Typography variant="h4" sx={{ fontSize: '24px', fontWeight: 600, color: '#111827', m: 0 }}>
          Avatar
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '14px', color: '#6B7280', m: 0 }}>
          User profile pictures
        </Typography>
      </Header>
      
      <Card>
        <AvatarRow>
          <Avatar size="sm">SM</Avatar>
          <Avatar size="md">MD</Avatar>
          <Avatar size="lg">LG</Avatar>
          <Avatar size="xl">XL</Avatar>
          <Avatar size="lg" customVariant="primary">JD</Avatar>
          <Avatar size="lg" customVariant="success">AB</Avatar>
        </AvatarRow>
      </Card>
    </SectionContainer>
  );
};

export default Avatar;