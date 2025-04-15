import React from 'react'
import { Card,Badge ,Button} from 'react-bootstrap'

const MoviesCard = ({movie}) => {
  return (
          <Card className="h-100 shadow-sm">
          <Card.Img variant="top" src={movie.imageUrl} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text className="text-muted">
              {movie.year} • {movie.genre}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Badge bg="warning" text="dark">
                ★ {movie.rating}
              </Badge>
              <Button variant="outline-primary" size="sm">
                Details
              </Button>
            </div>
          </Card.Body>
        </Card>
  )
}

export default MoviesCard