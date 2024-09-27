// src/components/FeaturedArticles.js
import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const articles = [
  { id: 1, title: 'Article 1', description: 'React OR Vue', author: 'Author 1', rating: 5, imageUrl: 'https://picsum.photos/200/150' },
  { id: 2, title: 'Article 2', description: 'NodeJS', author: 'Author 2', rating: 5, imageUrl: 'https://picsum.photos/200/151' },
  { id: 3, title: 'Article 3', description: 'React Hooks', author: 'Author 3', rating: 5, imageUrl: 'https://picsum.photos/200/152' },
];

const FeaturedArticles = () => (
  <div>
    <h2>Featured Articles</h2>
    <Card.Group itemsPerRow={3}>
      {articles.map((article) => (
        <Card key={article.id}>
          <Image src={article.imageUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Meta>{article.description}</Card.Meta>
            <Card.Description>Author: {article.author}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" />
            {article.rating} Rating
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button secondary>See all articles</Button>
  </div>
);

export default FeaturedArticles;
