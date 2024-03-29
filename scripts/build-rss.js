import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import { MDXProvider } from '@mdx-js/react'
import { Feed } from 'feed'

import { mdxComponents } from '../src/components/Post'
import { getAllPosts } from '../src/getAllPostPreviews'

const siteUrl = 'https://blog.glabs.com'

const feed = new Feed({
  title: 'GLabs Blog',
  description: '---',
  id: siteUrl,
  link: siteUrl,
  language: 'en',
  copyright: `All rights reserved ${new Date().getFullYear()}, GLabs`,
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    json: `${siteUrl}/feed.json`,
    atom: `${siteUrl}/atom.xml`,
  },
  author: {
    name: 'Guillaume',
    link: 'https://github.com/Keriz',
  },
})

getAllPosts().forEach(({ link, module: { meta, default: Content } }) => {
  const mdx = (
    <MDXProvider components={mdxComponents}>
      <Content />
    </MDXProvider>
  )
  const html = ReactDOMServer.renderToStaticMarkup(mdx)
  const postText = `<p><em>(The post <a href="${siteUrl + link}">${
    meta.title
  }</a> appeared first on <a href="${siteUrl}">GLabs Blog</a>.)</em></p>`
  feed.addItem({
    title: meta.title,
    id: meta.title,
    link,
    description: meta.description,
    content: html + postText,
    author: meta.authors.map(({ name, github }) => ({
      name,
      link: `https://github.com/${github}`,
    })),
    date: new Date(meta.date),
    image: siteUrl + meta.image,
    ...(meta.discussion
      ? {
          comments: meta.discussion,
          extensions: [
            {
              name: '_comments',
              objects: {
                about: 'Link to discussion forum',
                comments: meta.discussion,
              },
            },
          ],
        }
      : {}),
  })
})

fs.writeFileSync('./out/feed.xml', feed.rss2())
fs.writeFileSync('./out/atom.xml', feed.atom1())
fs.writeFileSync('./out/feed.json', feed.json1())
