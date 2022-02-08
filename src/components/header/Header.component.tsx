import React, { memo } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

export type HeaderProps = {
  title?: string;
  closeBtn?: boolean;
};

const HeaderBase = styled('header')({
  display:'flex',
  justifyContent: 'center',
  minHeight: '4rem',
  alignItems: 'center',
  backgroundColor: '#F5F5F5',
  borderBottom: '1px solid #DFDFE0',
});

function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <HeaderBase>
      <Typography variant="body1" color="#000" fontSize={16}>
        {title || 'Home'}
      </Typography>
    </HeaderBase>
  );
}

export default memo(Header);
