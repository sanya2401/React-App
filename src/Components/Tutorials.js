// src/components/Tutorials.js
import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const tutorials = [
  { id: 1, title: 'Tutorial 1', description: 'JSD', author: 'User 1', rating: 5, imageUrl: 'https://picsum.photos/200/153' },
  { id: 2, title: 'Tutorial 2', description: 'React Router', author: 'User 2', rating: 5, imageUrl: 'https://picsum.photos/200/154' },
  { id: 3, title: 'Tutorial 3', description: 'Express', author: 'User 3', rating: 4.9, imageUrl: 'https://picsum.photos/200/155' },
];

const Tutorials = () => (
  <div>
    <h2>Featured Tutorials</h2>
    <Card.Group itemsPerRow={3}>
      {tutorials.map((tutorial) => (
        <Card key={tutorial.id}>
          <Image src={tutorial.imageUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Meta>{tutorial.description}</Card.Meta>
            <Card.Description>Username: {tutorial.author}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" />
            {tutorial.rating} Rating
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button secondary>See all tutorials</Button>
  </div>
);

export default Tutorials;
