import React from "react";
import { useForm } from "react-hook-form";
import { Input, Form as RSForm, Label } from "reactstrap";

const LoginForm = ({ onSubmit, id }) => {
  const { register, handleSubmit } = useForm();

  return (
    <RSForm onSubmit={handleSubmit(onSubmit)}>
      <Label for="nickname">nickname</Label>
      <Input name="nickname" innerRef={register} />
      <Label for="password">password</Label>
      <Input name="password" innerRef={register} />
      <Input type="submit" />
    </RSForm>
  );
};

export default LoginForm;
