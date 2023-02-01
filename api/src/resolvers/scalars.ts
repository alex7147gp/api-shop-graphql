import { GraphQLScalarType, Kind } from 'graphql'



export const DateTime = new GraphQLScalarType({
    name: 'DateTime',
    description: 'Represents a date time oject',
    serialize(value) {
        if (value instanceof Date) {
          return value.toISOString()
        }else {
            return null
        }

    },
    parseValue(value) {
      if (value instanceof Date || typeof value === 'string' || typeof value === 'number') {
        return new Date(value)
      }
      else {
        return null 
      }    
        
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10))
        }
        return null 
    },
})