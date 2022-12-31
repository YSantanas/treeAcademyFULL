import { useFormik } from 'formik';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { boolean, object, string } from 'yup';
import { register } from '../features/auth/auth.api';

const validationSchema = object().shape({
  name: string().required('El nombre es requerido'),
  lastname: string().required('El apellido es requerido'),
  email: string()
    .email('El email no es válido')
    .required('El email es requerido'),
  password: string()
    .required('La contraseña es requerida')
    .min(6)
    .max(50)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
    ),
  professor: boolean(),
});

const Registro = () => {
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, isValid } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      professor: false,
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
      console.log('Formulario enviado');

      dispatch(
        register({
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          roles: values.professor ? ['PROFESSOR'] : ['ALUMN'],
        })
      );
    },
  });

  return (
    <div
      className=" container border justify-content-center alert alert-light"
      style={{ minHeight: 'auto', paddingTop: '2vh', marginTop: '5vh' }}
    >
      <h1 className="text-center text-dark">Registro</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="John"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Doe"
            value={values.lastname}
            onChange={handleChange}
            name="lastname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="mail@treeacademy.com"
            value={values.email}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            value={values.password}
            onChange={handleChange}
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="professor">
          <Form.Check
            type="checkbox"
            label="Soy Profesor/a"
            value={values.professor}
            onChange={handleChange}
            name="professor"
          />
          <Form.Text className="text-muted">
            Indicar unicamente en caso de ser docente.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Imagen de perfil</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>

        <div className="col-md-12 text-center ">
          <Button variant="primary" type="submit" disabled={!isValid}>
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Registro;
