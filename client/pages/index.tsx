import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType} from 'next'
import axios from 'axios'
import { useQuery, gql } from '@apollo/client'
import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import { Card } from 'semantic-ui-react'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import  ProductList from '@components/ProductList/ProductList'
import { GetProductsDocument, Photo } from '../src/gql/graphql'

import { client } from '../service/client'

export const getStaticProps: GetStaticProps<{ products: Photo[] }> = async () => {

  try {

    const response = await client.query({
      query: GetProductsDocument,
      fetchPolicy: 'network-only'
  
  })

  if (response.data.photos == null) {
    throw new Error('Failed to request')
  }

  const products = response.data.photos as Photo[]

  return {
    props: {
      products
    }
  }

  }
  catch (e) {
    return {
      props: {
        products: [],
      }
    }
  }

}    

const HomePage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {


  return (
    <Layout title="Home">
      <KawaiiHeader />
      <ProductList products={products}/>
    </Layout>
  )
}

const documentationList = [
  {
    title: 'Documentación Proyecto',
    meta: 'Proyecto',
    description:
      '¿Tienes dudas sobre este proyecto? Aquí encuentras la documentación para configurar todo. Aségurate de leerlo.',
    link: 'https://github.com/jonalvarezz/platzi-graphql-fullstack',
  },
  {
    title: 'Documentación Next.js',
    meta: 'Documentación',
    description:
      'Aquí encuentras la documentación sobre el framework base con el que realizaremos todo.',
    link: 'https://nextjs.org/docs/getting-started',
  },
  {
    title: 'Documentación GraphQL',
    meta: 'Documentación',
    description:
      'Nuestra aplicación conecta a Contenful para leer todo el contenido que mostraremos. Contenful provee la capa de GraphQL.',
    link: 'https://graphql.org/learn/',
  },
  {
    title: 'Curso de GraphQL con Node.js',
    meta: 'Proyecto',
    description:
      'Revisa el curso en donde creamos todo el backend y la API para este proyecto.',
    link: 'https://platzi.com/cursos/graphql-nodejs/',
  },
]

export default HomePage
