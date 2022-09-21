import React from 'react'
import Select from 'react-select';
import Input from '@mui/material/Input';
import { Controller, useForm } from 'react-hook-form';

const IntegratingWithUILibraries = () => {
    const { control, handleSubmit } = useForm({
        defaultValues:{
            firstName:"",
            select:{}
        }
    });

    const onSubmit = (data) =>{
        console.log(data)
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name='firstName'
                control={control}
                render={({field}) => <Input {...field} />} 
            />
            <Controller
                name='Age'
                control={control}
                render={({field}) => <Select 
                    {...field}
                    options={[
                        { value: 'chocolate', label: 'Chocolate'},
                        { value: 'strawberry', label: 'Strawberry'},
                        { value: 'vanilla', label: 'Vanilla'}
                    ]} 
                />} 
            />
            <input type="submit" />
        </form>
    </>
  )
}

export default IntegratingWithUILibraries