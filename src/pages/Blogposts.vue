<template>
  <Layout>
    <h1>Blog stuff Testing</h1>

    <div v-for='edge in $page.blog.edges' :key='edge.node.id'>
      
      <h1 class='title'> {{ edge.node.title }} </h1>

      <p> {{ edge.node.readtime }} min Read </p>

      <g-link :to='edge.node.path'> Read more... </g-link>
    </div>
  </Layout>
</template>

<page-query>
  query Documentation {
    blog: allDocumentation {
      edges {
        node {
          title,
          readtime,
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
