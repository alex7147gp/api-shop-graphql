import React from 'react'
import Link from 'next/link'
import { Item, Button, Loader, Message } from 'semantic-ui-react'
import { CartItemType } from '@store/Cart'



import { Photo } from '../../src/gql/graphql'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: Photo) => void
  loading?: boolean
}

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Loader active inline="centered" />
 
  if (items.length === 0)
    return (
      <Message warning as="section">
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Message>
    )

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, quantity, likes, src } = cartItem

      return {
        childKey: id,
        header: (
          <Item.Header>
            <Link href={`/product/${id}/`}>
              <a>{'Name Default'}</a>
            </Link>
          </Item.Header>
        ),
        image: (
          <Item.Image
            src={src}
            alt={'Name Default'}
            size="small"
            style={{ background: '#f2f2f2' }}
          />
        ),
        meta: `${quantity} x ${likes}`,
        description: 'Some more information goes here....',
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(cartItem)}
          />
        ),
      }
    })

  return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />
}

export default CartItemList
