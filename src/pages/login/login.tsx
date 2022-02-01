import { Button, TextInput } from 'components'
import React from 'react'
import {
  Container,
  FormContainer,
  FormText,
  RoundedIcon,
  IconContainer,
} from './style'
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiFillGithub,
  AiFillLock,
} from 'react-icons/ai'
import { IconType } from 'react-icons'
import { MdEmail } from 'react-icons/all'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login, loginWithGoogle } from 'store'
import { useAuth } from 'hooks'
const icons = [AiFillFacebook, AiFillGithub]

type FormValues = {
  email: string
  password: string
}

export const Login = () => {
  const dispatch = useDispatch()
  const { loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = (form: FormValues) => {
    // eslint-disable-next-line no-console
    const { email, password } = form
    dispatch(login(email, password))
  }

  return (
    <Container>
      <FormContainer>
        <FormText size='large' text='Welcome' />
        <TextInput
          error={errors.email && errors.email.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email',
            },
          })}
          placeholder='Email'
          icon={<MdEmail size={24} color='#E4E4E4' />}
        />
        <TextInput
          error={errors.password && errors.password.message}
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 4, message: 'Min 4 character' },
          })}
          placeholder='Password'
          type='password'
          icon={<AiFillLock size={24} color='#E4E4E4' />}
        />
        <Button loading={loading} onClick={handleSubmit(onSubmit)} rounded>
          Login
        </Button>
        <FormText text='Or' size='small' />
        <IconContainer>
          <RoundedIcon onClick={() => dispatch(loginWithGoogle())}>
            <AiOutlineGoogle size={24} color='#E4E4E4' />
          </RoundedIcon>
          {icons.map((Item: IconType, index) => (
            <RoundedIcon key={index}>
              <Item size={24} color='#E4E4E4' />
            </RoundedIcon>
          ))}
        </IconContainer>
      </FormContainer>
    </Container>
  )
}
