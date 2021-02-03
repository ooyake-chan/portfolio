const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
        works:allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {category: {elemMatch: {categorySlug: {eq: "works"}}}}) {
            edges {
              node {
                id
                slug
              }
              next {
                title
                slug
              }
              previous {
                slug
                title
              }
            }
          }
            others:allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {category: {elemMatch: {categorySlug: {eq: "others"}}}}) {
            edges {
              node {
                id
                slug
              }
              next {
                title
                slug
              }
              previous {
                slug
                title
              }
            }
          }
            blog:allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {category: {elemMatch: {categorySlug: {eq: "blog"}}}}) {
            edges {
              node {
                id
                slug
              }
              next {
                title
                slug
              }
              previous {
                slug
                title
              }
            }
            totalCount
          }
        }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
    return
  }

  blogresult.data.works.edges.forEach(
    ({ node }) => {
      createPage({
        path: `/works/${node.slug}/`,
        component: path.resolve(`./src/templates/work-template.js`),
        context: {
            id: node.id,
        },
      })
    })

  blogresult.data.others.edges.forEach(
    ({ node }) => {
      createPage({
        path: `/others/${node.slug}/`,
        component: path.resolve(`./src/templates/other-template.js`),
        context: {
            id: node.id,
        },
      })
    })

  blogresult.data.blog.edges.forEach(
    ({ node }) => {
      createPage({
        path: `/blog/${node.slug}/`,
        component: path.resolve(`./src/templates/blogpost-template.js`),
        context: {
            id: node.id,
        },
      })
    })

   const blogPostsPerPage = 5
   const blogPosts = blogresult.data.blog.totalCount
   const blogPages = Math.ceil( blogPosts / blogPostsPerPage )

   Array.from({ length: blogPages }).forEach(( _, i ) => {
     createPage({
       path: i === 0 ? `/blog/` : `/blog/${ i + 1 }/`,
       component: path.resolve(`./src/templates/blog-template.js`),
       context: {
         skip: blogPostsPerPage * i,
         limit: blogPostsPerPage,
         currentPage: i + 1 ,
         isFirst: i + 1 === 1,
         isLast: i + 1 === blogPages,
       },
     })
   })

}
