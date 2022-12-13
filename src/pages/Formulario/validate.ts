import * as yup from "yup";

const validationSchema = yup.object().shape({
  primeiroNome: yup.string().required("Campo requerido"),
  sobrenome: yup.string().required("Campo requerido"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Campo requerido"),
  senha: yup.string().required("Campo requerido"),
});

export default validationSchema;