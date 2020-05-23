<template>
  <Layout>
    <div class='post' v-for='edge in $page.blog.edges' :key='edge.node.id'>
      
      <h1 class='title'> {{ edge.node.title }} </h1>
      
      <p> Synopsis: {{ edge.node.synopsis }} </p>
      
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
          synopsis,
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

<style>

.post {
  margin: 20px 10px;
  padding: 10px;
  
  text-decoration: none;

  border-radius: 15px;

  background-color: #212121;
}

.title {
  color: var(--color-title);
}

</style>
