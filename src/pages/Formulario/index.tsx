import React from "react";
import { Formik } from "formik";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import ButtonEntrar from "./ButtonEntrar";
import validationSchema from "./validate";
import { FormularioValues } from "./Types";

import useStyles from "./styles";

const initialValues: FormularioValues = {
  email: "",
  primeiroNome: "",
  senha: "",
  sobrenome: "",
};

const Formulario = () => {
  const styles = useStyles();

  const handleSubmit = () => {};

  return (
    <Formik<FormularioValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ handleSubmit: handleFormikSubmit, errors, getFieldProps }) => (
        <form onSubmit={handleFormikSubmit}>
          <Stack spacing={2} sx={styles.formulario}>
            <Typography sx={styles.text}>LOGIN</Typography>
            <TextField
              {...getFieldProps("primeiroNome")}
              fullWidth
              label="Primeiro Nome"
              error={!!errors.primeiroNome}
              helperText={errors.primeiroNome}
            />
            <TextField
              {...getFieldProps("sobrenome")}
              fullWidth
              label="Sobrenome"
              error={!!errors.sobrenome}
              helperText={errors.sobrenome}
            />
            <TextField
              {...getFieldProps("email")}
              fullWidth
              label="E-mail"
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              {...getFieldProps("senha")}
              fullWidth
              label="Senha"
              error={!!errors.senha}
              helperText={errors.senha}
            />
            <ButtonEntrar />
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default Formulario;