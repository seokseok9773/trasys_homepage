'use client';

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: white;
  margin: 0px;
`;

const Video = styled.video`
  width: 100%;
  margin: 0px;
`;

export default function page() {
  return (
    <Container>
      <Video 
        src="/video/eng.mp4" 
        autoPlay={true} 
        loop
        muted
        controls
      />
    </Container>
  )
}
