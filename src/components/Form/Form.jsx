import React from "react";
import { useForm } from "react-hook-form";
import { Input, Form as RSForm, Label } from "reactstrap";

const Form = ({ onSubmit,id}) => {
  const { register, handleSubmit } = useForm({defaultValues:{
    id:id
  }});
    
  return (
    <RSForm onSubmit={handleSubmit(onSubmit)}>
      <Input type="hidden" name="id" innerRef={register}/>
      <Label for="title" >title</Label>
      <Input name="title" innerRef={register} />
      <Label for="picture">picture</Label>
      <Input name="picture" innerRef={register} />
      <Label for="desctiption">desctiption</Label>
      <Input name="description" innerRef={register} />
      <Input type="submit" />
    </RSForm>
  );
};

export default Form;
