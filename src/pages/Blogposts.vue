<template>
  <Layout>
    <h1>Blog stuff Testing</h1>

    <div v-for='edge in $page.blog.edges' :key='edge.node.id'>
      
      <g-link :to='edge.node.path'> {{ edge.node.title }} </g-link>
      
      {{ edge.node.title }}
    </div>
  </Layout>
</template>

<page-query>
  query Documentation {
    blog: allDocumentation {
      edges {
        node {
          title,
          path
        }
      }
    }
  }
</page-query>

<script>

export default {
  data(){
    return {
    }
  },
  
  metaInfo: {
    title: 'BlogPosts'
  }
}
</script>
