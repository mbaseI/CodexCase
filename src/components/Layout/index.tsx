import { Container } from '@mui/material';
import React from 'react';
import CDHeader from '../CDHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CDHeader />
      <Container maxWidth={'lg'}>{children}</Container>
    </>
  );
};

export default Layout;
