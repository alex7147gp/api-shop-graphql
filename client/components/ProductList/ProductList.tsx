import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'
import { Photo } from '../../src/gql/graphql'


type ProductListProps = {
  products: Photo[]
}

const mapProductsToCards = (products: Photo[]) =>
  products.map(({ id, likes, src }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={'Name'}
        image={{ children: <Image src={typeof src == "string" ? src : 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'} alt="Name" width={333} height={333} /> }}
        meta={{
          children: <Card.Meta style={{ color: 'dimgray' }}>{likes}</Card.Meta>,
        }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
