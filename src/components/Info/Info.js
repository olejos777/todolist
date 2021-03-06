import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageContents } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={pageContents.titleInfo} imageSource={pageContents.imageInfo} />

    <h2>FAQ</h2>
    <p>Frequently Asked Questions</p>
  </Container>
);

export default Info;