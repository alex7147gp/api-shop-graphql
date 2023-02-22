import React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'


import { client } from '../../service/client'

import { GetProductsDocument, GetProductDocument } from '../../src/gql/graphql'

import { Photo } from '../../src/gql/graphql'



// TODO: Use the graphQL API from https://platzi.com/cursos/nodejs-graphql
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.query({       
    query: GetProductsDocument
  })

  const data = response && response.data.photos
  
  if (!data || !Array.isArray(data)) {
    throw new Error("Errore: Data is null or not an array")
  }

  const paths = data && data.map(( photo, index ) => {
    if (photo == null) {
      throw new  Error(
        `An photo entry with no data was fount at index ${index}`  
       ) 
    }
    return { params : { id: photo.id as string }}
  })


  return {
    paths,
    fallback: 'blocking',
  }



}


export const getStaticProps: GetStaticProps = async ({ params }) => {

  try {
    const response = await client.query({
      query: GetProductDocument,
      variables: { id: params?.id as string },
    })

    if (response.data.photo == null) {
      throw new Error(`Item with id ${params?.id} was not found.`)
    }

    // Pass post data to the page via props
    return { props: { product: response.data.photo } }
  } catch (e) {
    return {
      notFound: true,
    }
  }
  
}

const ProductPage = ({ product }: { product: Photo }) => {

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
