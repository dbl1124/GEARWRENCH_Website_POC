import { type SchemaTypeDefinition } from 'sanity'
import { page } from './pageType'
import { product } from './productType'
import { heroBlock } from './heroBlockType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [page, product, heroBlock],
}
