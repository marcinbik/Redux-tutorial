import React from "react";
import { useForm } from "react-hook-form";
import { Input, Form as RSForm, Label } from "reactstrap";

const Register = ({ onSubmit,id }) => {
  const { register, handleSubmit } = useForm({defaultValues:{
    id:id
  }});
    
  return (
    <RSForm onSubmit={handleSubmit(onSubmit)}>
      <Input type="hidden" name="id" innerRef={register}/>
      <Label for="userName" >userName</Label>
      <Input name="userName" innerRef={register} />
      <Label for="password">password</Label>
      <Input name="password" innerRef={register} />
      <Label for="email">email</Label>
      <Input name="email" innerRef={register} />
      <Input type="submit" />
    </RSForm>
  );
};

export default Register;
