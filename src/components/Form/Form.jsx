import React from 'react';
import { useForm } from "react-hook-form";
import { Input, Form as RSForm } from "reactstrap";



const Form = ({onSubmit} ) => {
  const {register, handleSubmit} = useForm();
  
  
  return (
    <RSForm onSubmit={handleSubmit(onSubmit)} >
      <Input name="title" innerRef={register}/>
      <Input name="picture" innerRef={register}/>
      <Input name="description" innerRef={register}/>
      <Input type="submit"/>

    </RSForm>
  )
}

export default Form
