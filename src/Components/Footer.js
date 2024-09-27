// src/components/Footer.js
import React from 'react';
import { Segment, Container, Grid, List, Header, Icon } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '2em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Explore" />
            <List link inverted>
              <List.Item as="a">Home</List.Item>
              <List.Item as="a">Questions</List.Item>
              <List.Item as="a">Articles</List.Item>
              <List.Item as="a">Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Support" />
            <List link inverted>
              <List.Item as="a">FAQs</List.Item>
              <List.Item as="a">Help</List.Item>
              <List.Item as="a">Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Stay Connected" />
            <List link inverted>
              <List.Item as="a"><Icon name="facebook" /> Facebook</List.Item>
              <List.Item as="a"><Icon name="twitter" /> Twitter</List.Item>
              <List.Item as="a"><Icon name="instagram" /> Instagram</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={{ textAlign: 'center', paddingTop: '1em' }}>
        DEV@Deakin 2022 | Privacy Policy | Terms | Code of Conduct
      </div>
    </Container>
  </Segment>
);

export default Footer;
