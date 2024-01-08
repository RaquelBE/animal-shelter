import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Lógica para enviar el formulario por correo electrónico, se necesita un back

    console.log("Datos del formulario:", data);
  };

  return (
    <div className="card d-flex-center m-4 big-form">
      <div className="d-flex-center">
        <Card className="text-center contact-info">
          <p className="intro-contact">
            Para ponerte en contacto con nosotros por alguno de nuestros
            perretes, puedes hacerlo llamando al número{" "}
            <strong>630976430</strong> o enviando un correo electrónico a{" "}
            <a className="email" href="mailto:raquel.blazquez@bosonit.com">
              raquel.blazquez@bosonit.com
            </a>
            .
          </p>
          <p>
            También puedes rellenar el <strong>formulario</strong> que aparece a
            continuación y en la máxima brevedad contestaremos.
          </p>
          <p>En el mensaje, asegúrate de incluir la siguiente información:</p>
          <ul>
            <ol> 👤 Tu nombre</ol>
            <ol> 📱 Número de contacto</ol>
            <ol> 💌 Correo electrónico</ol>
            <ol> 🐶 Nombre del perrete</ol>
            <ol> 📝Lo que te gustaría hacer:</ol>
            <ul>
              <ol>❤ Adoptar</ol>
              <ol>❤ Apadrinar</ol>
              <ol>❤ Etc..</ol>
            </ul>
          </ul>
          <p>
            Además, cuéntanos por qué crees que eres la persona indicada para el
            perrete. Agradecemos tu interés y nos pondremos en contacto contigo
            lo antes posible.
          </p>
        </Card>
      </div>
      <h5 className="card-title">Formulario de Contacto</h5>
      <div className="card-body contact-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input
              {...register("nombre", { required: "Nombre requerido" })}
              className="form-control"
            />
            {errors.nombre && (
              <span className="text-danger">{errors.nombre.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Apellidos:</label>
            <input
              {...register("apellidos", { required: "Apellidos requeridos" })}
              className="form-control"
            />
            {errors.apellidos && (
              <span className="text-danger">{errors.apellidos.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono:</label>
            <input
              {...register("telefono", { required: "Teléfono requerido" })}
              className="form-control"
            />
            {errors.telefono && (
              <span className="text-danger">{errors.telefono.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico:</label>
            <input
              {...register("correo", {
                required: "Correo electrónico requerido",
                pattern: /^\S+@\S+$/i,
              })}
              className="form-control"
            />
            {errors.correo && (
              <span className="text-danger">{errors.correo.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje:</label>
            <textarea
              {...register("mensaje", { required: "Mensaje requerido" })}
              className="form-control"
            />
            {errors.mensaje && (
              <span className="text-danger">{errors.mensaje.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
