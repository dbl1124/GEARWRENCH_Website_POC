import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { schema } from './src/sanity/schemaTypes'
import { dataset, projectId } from './src/sanity/env'

export default defineConfig({
    basePath: '/sanity',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool(),
        presentationTool({
            previewUrl: {
                draftMode: {
                    enable: '/api/draft-mode/enable',
                },
            },
        }),
    ],
})
