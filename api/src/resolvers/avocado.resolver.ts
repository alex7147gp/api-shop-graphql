import type { Avocado, Attributes, PrismaClient, Prisma } from '@prisma/client'
import { AuthenticationError } from 'apollo-server-express'

export type ResolverParent = unknown
export type ResolverContext = { orm: PrismaClient, user: Express.User | undefined }

export async function findAll(
    parent: ResolverParent, 
    arg: { where?: Prisma.AvocadoWhereInput, 
    skip?: number, 
    take?: number },
    context: ResolverContext): Promise<Avocado[]> {
    return context.orm.avocado.findMany({
         include: { attributes: true },
         where: arg.where,
         skip: arg.skip,
         take: arg.take,
        })
}

export async function findOne(parents: ResolverParent, arg: { id: string }, context: ResolverContext): Promise<Avocado | null> {
    return context.orm.avocado.findUnique({
         where: { id: parseInt(arg.id, 10) },
         include: { attributes: true}
    })
}

export const resolver: Record<keyof (Avocado & {attributes: Attributes}), (parent: (Avocado & {attributes: Attributes}) ) => unknown> = {
    id: (parent) => parent.id,
    createdAt: (parent) => parent.createdAt,
    updatedAt: (parent) => parent.updatedAt,
    deletedAt: (parent) => parent.deletedAt,
    sku: (parent) => parent.sku,
    name: (parent) => parent.name,
    price: (parent) => parent.price,
    image: (parent) => parent.image,
    attributes: (parent)  => ({
        description: parent.attributes.description,
        shape: parent.attributes.shape,
        hardiness: parent.attributes.hardiness,
        taste: parent.attributes.taste,
    }),
}

export async function createAvo(
    parent: unknown,
    { data }: { data: Pick<Avocado, 'name' | 'price' | 'image'> &
     Attributes },
    { orm, user }: ResolverContext 
): Promise<Avocado> {
   
   if (user === undefined) {
    throw new AuthenticationError('Unauthicatef request')
   }

  const { name, price, image, ...attributes } = data   

  const avo = await orm.avocado.create({
    data: {
        name,
        price,
        image,
        sku: new Date().getTime().toString(),
        attributes: {
            create: {
              ...attributes,
            }
        }
    }
  })
  
  return avo

}