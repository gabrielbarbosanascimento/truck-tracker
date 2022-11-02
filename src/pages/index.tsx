import {
  MetaHeading,
  MetaParagraph,
  MetaSubtitle
} from "../../core/metads/typography";
import { motion } from "framer-motion";
import { MetaButton, MetaCard, MetaInput } from "../../core/metads/components";
import styled from "styled-components";
import { useFormik } from "formik";

export default function Home() {
  const { handleChange, values, submitForm } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: (values) => {}
  });
  return (
    <LoginPageStyles>
      <MetaCard>
        <MetaSubtitle>Login</MetaSubtitle>
        <MetaParagraph>Faça login para usar o sistema</MetaParagraph>
        <div className=" mt-3 mb-3">
          <MetaInput
            name="username"
            label="Placa"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <MetaInput
            name="password"
            label="Senha"
            value={values.password}
            type="password"
            onChange={handleChange}
          />
        </div>
        <MetaButton fullwidth className="primary">
          Entrar
        </MetaButton>
      </MetaCard>
    </LoginPageStyles>
  );
}

const LoginPageStyles = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-image: url(/assets/login-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  ${MetaCard} {
    width: 90%;
    max-width: 400px;
  }
`;
