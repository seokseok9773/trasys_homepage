'use client';

import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>{children}</Container>
  )
}
