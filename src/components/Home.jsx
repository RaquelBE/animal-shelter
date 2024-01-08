import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

function Home() {
  return (
    <div className="container-presentation mt-2">
      <Card className="text-center">
        <Card.Body>
          <Card.Img
            className="presentation-image-home"
            variant="top"
            src="/public/images/dogs/athos.JPG"
          />
          <Card.Text className="presentation-intro">
            Somos un refugio de animales, en su mayor parte de perros, sin ánimo
            de lucro.
            <br />
            Practicamos el sacrificio cero, denunciamos judicialmente a los
            maltratadores y buscamos adoptantes para todos los animales que
            acogemos.
            <br />
            Si quieres colaborar con nosotros puedes:
            <ul className="presentation-intro-list">
              <ol>❤ Adoptar</ol>
              <ol>❤ Hacerte socio</ol>
              <ol>❤ Apadrinar a alguno de nuestros perretes</ol>
              <ol>❤ Acoger a alguno de nuestros perretes</ol>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
