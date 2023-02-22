import React, { useState } from 'react'
import { useInputValue } from '../hoks/useInputValue'

import { Segment, Header, Form, Button, Message } from 'semantic-ui-react'  
import Layout from '../Layout/Layout'


export const UserForm = (
  { onSubmitL, title, setEstado, error, disabled }:{
    onSubmitL: any, title: any, disabled: boolean, error: string | undefined, setEstado: any,
  }
  ) => {
    const email = useInputValue('')
    const password = useInputValue('')
    const handleSubmit = (e: any) => {
      e.preventDefault()
      onSubmitL({ email, password })
    }
    return (
      <Layout title="Iniciar secion" >
        <div className="mt-14" />
      <Header as="h2" size="huge" className="">
        Login
      </Header>
      {error && <Message error content={error} />}
      <Segment>
        <Form  onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="form-username">Nombre de usuario</label>
            <input
              id="form-username"
              name="username"
              placeholder="Nombre de usuario"
              autoFocus
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="form-password">Contraseña</label>
            <input
              id="form-password"
              name="pass"
              placeholder="Contraseña"
              type="password"
              required
            />
          </Form.Field>
          <Button type="submit" positive>
            Ingresar
          </Button>
        </Form>
      </Segment>
      <div className="mb-20" />
        <div>
          <Button onClick={() => setEstado(!title)}>
            ¿No tienes cuenta?
          </Button>
        </div>
      </Layout>
    )
}



export const RegisterForm = (
  { onSubmit, title, setEstado, error, disabled }: {
    onSubmit: any, title: any, disabled: boolean, error: string | undefined, setEstado: any, 
  }
  ) => {
    const email = useInputValue('')
    const password = useInputValue('')
    const handleSubmit = (e: any) => {
      e.preventDefault()
      onSubmit({ email, password })
    }
    return (
      <Layout title="Registrate">
         <div className="mt-14" />
      <Header as="h2" size="huge" className="">
        SingUp
      </Header>
      {error && <Message error content={error} />}
      <Segment>
        <Form  onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="form-username">Nombre de usuario</label>
            <input
              id="form-username"
              name="username"
              placeholder="Nombre de usuario"
              autoFocus
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="form-password">Contraseña</label>
            <input
              id="form-password"
              name="pass"
              placeholder="Contraseña"
              type="password"
              required
            />
          </Form.Field>
          <Button type="submit" positive>
            Ingresar
          </Button>
        </Form>
      </Segment>
      <div className="mb-20" />
        <div>
          <Button onClick={() => setEstado(!title)}>
            ¿Ya tienes una cuenta?
          </Button>
        </div>
      </Layout>
    )
  }