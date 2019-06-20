<template>
  <section>
    <Container>
      <div class="intro">
        <h1>Recent Work</h1>
      </div>
    </Container>
        <div v-if="blogList" class="container flex">

      <ArticleCard 
      :bg="colors"
        v-for="(blog, index) in blogList"
        :key="blog.link"
        :index="index"
        :article-info="blog"
      />
        </div>
  </section>
</template>

<script>
import ArticleCard from '~/components/ArticleCard'
import Container from '~/components/Container'
import blogs from '~/content/works.json'
import pages from '~/content/pages.json'

export default {

  components: {
    ArticleCard,
    Container
  },
data: function () {
    return {
    }
  },
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const wholeMD = await import(`~/content/work/${blog.slug}.md`)
      return {
        attributes: wholeMD.attributes,
        link: blog.slug
      }
    }



    const blogList = await Promise.all(
      blogs.map(blog => awaitImport(blog))
    ).then(res => {
      return {
        blogList: res
      }
    })



    return blogList
  },

  computed: {
    colors() {
      return this.$store.state.colors
    }
  },
  methods: {
    before() {
this.$anime.set('.article-card',{opacity:0})
    },
    grow(e) {
        const elm = e.target
  console.log(elm)

   this.$anime({
     targets: elm,
     scale: 1.1,
     duration: 200
   })
    },

  }
}
</script>

<style lang="scss" >
.intro {
  text-align: center;
  margin-bottom: 2.4rem;

  h1 {
    margin-top: 0;
  }
}
.container {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  &.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 567px) {
      display: block;
    }
  }

  &.narrow {
    max-width: 760px;
  }
}
</style>
