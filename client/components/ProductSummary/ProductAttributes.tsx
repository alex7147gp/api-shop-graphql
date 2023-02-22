import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'




import { Photo } from '../../src/gql/graphql'


const ProductAttributes = ({
  ...otherAttributes
}: Photo) => (
  <section className="container">
    <Header as="h3">About this product</Header>
    <p>{'Name'}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Object.keys(otherAttributes).map((key) => (
          <Table.Row key={key}>
            <Table.Cell className="attr-name">{key}</Table.Cell>
            <Table.Cell>
              {otherAttributes[key as keyof typeof otherAttributes]}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>

    <style>{`
      .container :global(.attr-name) {
        text-transform: capitalize;
      }
    `}</style>
  </section>
)

export default ProductAttributes
