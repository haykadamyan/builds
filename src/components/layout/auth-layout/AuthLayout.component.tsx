import React, { memo, ReactNode } from 'react';
import Container from '@mui/material/Container';
import Header, { HeaderProps } from '../../header/Header.component';

type AuthLayoutProps = {
  headerProps?: HeaderProps;
  children: ReactNode;
};

function AuthLayout(props: AuthLayoutProps) {
  return (
    <div>
      <Header {...props.headerProps} />
      <Container maxWidth="sm">
       {props.children}
      </Container>
    </div>
  );
}

export default memo(AuthLayout);
