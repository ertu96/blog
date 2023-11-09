import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import GithubSlugger from 'github-slugger'
import readingTime from 'reading-time'

const TABLE_OF_CONTENTS_REGEXP = /\n(?<flag>#{1,6})\s+(?<content>.+)/g

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        updatedAt: { type: 'date', required: true },
        image: { type: 'image' },
        isPublished: { type: 'boolean', default: false },
        author: { type: 'string', required: true },
        tags: { type: 'list', of: { type: 'string' } },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
        readingTime: {
            type: 'json',
            resolve: (doc) => readingTime(doc.body.raw),
        },
        toc: {
            type: 'json',
            resolve: async (doc) => {
                const slugger = new GithubSlugger()
                const headings = Array.from(
                    doc.body.raw.matchAll(TABLE_OF_CONTENTS_REGEXP)
                ).map(({ groups }) => {
                    return {
                        level:
                            groups?.flag?.length == 1
                                ? 'one'
                                : groups?.flag?.length == 2
                                ? 'two'
                                : 'three',
                        text: groups?.content,
                        slug: groups?.content
                            ? slugger.slug(groups.content)
                            : undefined,
                    }
                })

                return headings
            },
        },
    },
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Blog],
})
