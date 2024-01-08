import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Dogs() {
  const [data, setData] = useState({ message: {} });
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchImageUrls() {
      const urls = {};

      for (const breed in data.message) {
        try {
          const response = await axios.get("https://dog.ceo/api/breeds/image/random");
          const imageUrl = response.data.message;

          if (imageUrl) {
            urls[breed] = imageUrl;
          }
        } catch (error) {
          console.error(`Error al actualizar la imagen de la raza ${breed}: ${error.message}`);
        }
      }

      setImageUrls(urls);
    }

    if (data && data.message) {
      fetchImageUrls();
    }
  }, [data]);

  const dogBreeds = Object.keys(data.message);

  return (
    <div className="d-flex-center">
      <Carousel>
        {dogBreeds.map((breed, index) => (
          <Carousel.Item key={index}>
            <Card className="text-center presentation-card">
              <Card.Img
                className="presentation-image"
                variant="top"
                src={imageUrls[breed] || 'https://placehold.it/300x200'}
                alt={breed}
              />
              <Card.Body className="card-body">
                <Card.Title className="title-dog">{breed}</Card.Title>
                {imageUrls[breed] ? null : (
                  <Card.Text className="presentation-carrusel">
                    Vaya! Todavía no ha querido posar para nosotros, pronto tendremos la foto 🐶.
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Dogs;