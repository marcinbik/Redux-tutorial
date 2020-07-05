import React from 'react';
import { useForm } from "react-hook-form";
import { Input, Form as RSForm, Label } from "reactstrap";



const Form = ({onSubmit} ) => {
  const {register, handleSubmit} = useForm();
  
  
  return (
    <RSForm onSubmit={handleSubmit(onSubmit)} >
      <Label for="title">title</Label>
      <Input name="title" innerRef={register}/>
      <Label for="picture">picture</Label>
      <Input name="picture" innerRef={register}/>
      <Label for="desctiption">desctiption</Label>
      <Input name="description" innerRef={register}/>
      <Input type="submit"/>

    </RSForm>
  )
}

export default Form
