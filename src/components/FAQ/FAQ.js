import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageContents } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={pageContents.titleFaq} imageSource={pageContents.imageFaq} />

    <h2>FAQ</h2>
    <p>Frequently Asked Questions</p>
  </Container>
);

export default FAQ;
