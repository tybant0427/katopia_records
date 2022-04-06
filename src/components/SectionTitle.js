import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    // font-family: 'RobotoMono Regular';
    font-size: 2rem;
    margin-top: 20px;
    color: rgb(248, 211, 3);
  }
  h2 {
    // font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    padding-bottom: 20px;
    border-bottom: 2.5px solid #fff;
    color: rgb(248, 211, 3);
    
    
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
      <p>{subheading}</p>
      
    </SectionTitleStyle>
  );
}