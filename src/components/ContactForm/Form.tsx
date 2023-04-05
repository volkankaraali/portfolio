import React, { useState } from 'react'
import { Box, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSettings } from '@/context/SettingsContext';
import { ThemeContextType } from '@/context/SettingsContext';

type Inputs = {
  email: string,
  subject: string,
  message: string,
};


// form validate schema 
const validateSchema = yup.object({
  email: yup.string().required().email('invalid email'),
  subject: yup.string().required(),
  message: yup.string().required(),
})


function Form() {

  const { themeMode } = useSettings() as ThemeContextType;

  const [loading, setLoading] = useState<Boolean>(false)

  // toastify
  const displayToastify = (message: string, status?: number) => {
    if (status === 200) {
      return toast.success('message sent successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: themeMode === "dark" ? 'dark' : 'light',
      })
    }
    else {
      return toast.success('message sent successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: themeMode === "dark" ? 'dark' : 'light',
      })
    }
  };

  // react hook form init
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(validateSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = ({ email, subject, message }) => {
    setLoading(true);
    axios.post('/api/sendMail', {
      email,
      subject,
      message
    })
      .then(res => {
        setLoading(false)
        return displayToastify("messages sent successfully", 200);
      })
      .catch(err => {
        setLoading(false);
        return displayToastify(err.message);
      })
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register("email")}
        required
        id="outlined-required"
        label="e-mail"
        sx={{ mb: 2 }}
        error={errors.email?.message ? true : false}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("subject")}
        required
        id="outlined-required"
        label="subject"
        sx={{ mb: 2 }}
      />
      <TextField
        {...register("message")}
        required
        id="outlined-required"
        label="message"
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />

      <LoadingButton loading={loading ? true : false} type='submit'>send me</LoadingButton>
    </Box>
  )
}

export default Form