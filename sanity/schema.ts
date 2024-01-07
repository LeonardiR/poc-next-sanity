import { type SchemaTypeDefinition } from 'sanity'
import properties from './schemas/properties'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [properties],
}
