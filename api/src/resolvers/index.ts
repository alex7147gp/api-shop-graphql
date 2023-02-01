import type { Avocado } from '@prisma/client'
import * as avo from  './avocado.resolver'
import * as scalars from  './scalars'


export default {
    ...scalars,
    BaseModel: {
        __resolverType: (parent: Avocado) => {
            if (parent.name) {
                return 'Avocado'
            }
            return null
        }
    },
    Query: {
        avo: avo.findOne,
        avos: avo.findAll,
    },
    Mutation: {
        createAvo: avo.createAvo,
    },
    Avocado: avo.resolver,
}
