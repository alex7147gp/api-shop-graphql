import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'


import { Photo } from '../../src/gql/graphql'

import Image from 'next/image'

type ProductSummaryProps = {
  product: Photo
}

const ProductSummary = ({ product }: ProductSummaryProps) => {
  
  return(
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <Image src={product.src as string} alt={'Name Default'} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{'Name Default'}</Item.Header>
          <Item.Description>
            <p>{product.likes}</p>
            <Label>{`SKU: ${product.userId}`}</Label>
          </Item.Description>
          <Item.Extra>
            <AddToCart product={product} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <ProductAttributes {...product} />
  </>
  )
}

export default ProductSummary
