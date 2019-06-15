<template>
  <section class="post">
    <Container class="meta-section">
      <h1>{{ title }}</h1>
      <!-- <p v-if="published === updated" class="post-meta">
        Posted on {{ published }} by
        <a v-if="authorlink" :href="authorlink">{{ author }}</a>
      </p> 
      <p v-else class="post-meta">
        Updated on {{ updated }} by
        <a v-if="authorlink" :href="authorlink">{{ author }}</a>
      </p> -->      <div class="video in" v-if="vimeo" v-html="getVimeo()"></div>

    </Container>
    <Container narrow>
      <img v-if="!vimeo && thumbnail" v-lazy="thumbnail" class="thumbnail in" :alt="title" />
      <div class="post-content" v-html="html"></div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/Container'


export default {
  components: {
    Container
  },
  head() {
    return {
      title: `${this.title} | Norman Bertolino`,
      meta: [
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.date
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.update
        },
        {
          hid: 'og:updated_time',
          property: 'og:updated_time',
          content: this.update
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://normanbertolino.com/work/${this.slug}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | Code Tribe`
        },
        {
          hid: 'description',
          name: 'description',
          content: this.summary
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.summary
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://normanbertolino.com/${this.thumbnail}`
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:article:author',
          property: 'og:article:author',
          content: this.authorlink
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@tribe_code'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.summary
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://normanbertolino.com${this.thumbnail}`
        }
      ]
    }
  },
  methods: {
getVimeo() {
 return `<div style="overflow: hidden;padding-bottom: 56.25%;position: relative;height: 0;"><iframe src="https://player.vimeo.com/video/${
      this.vimeo
    }" style="left: 0;top: 0;height: 100%;width: 100%;
      position: absolute;" width="853" height="505" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`
}
  },
  async asyncData({ params }) {
    const post = await import(`~/content/page/${params.slug}.md`)
    const attr = post.attributes
    const slug = params.slug

    const {
      author,
      authorlink,
      date,
      summary,
      thumbnail,
      vimeo,
      title,
      type,
      update
    } = attr

    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }

    const publishedDate = new Date(date)
    const updatedDate = new Date(update)
    const published = publishedDate.toLocaleDateString('en-US', dateOptions)
    const updated = updatedDate.toLocaleDateString('en-US', dateOptions)

    return {
      title,
      author,
      authorlink,
      date,
      update,
      published,
      updated,
      type,
       vimeo,
      thumbnail,
      summary,
      slug,
      html: post.html
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.video {margin-bottom:2.4rem;border: 1px solid #ccc; box-shadow: 8px 8px 40px rgba(20,20,20,.3);transition: box-shadow .5s;}
.video:hover {box-shadow: 8px 8px 70px rgba(20,20,20,.3);transition: box-shadow .5s;}
.post {
  .meta-section,
  .thumbnail {
    margin-bottom: 2.4rem;
  }

  .thumbnail {
    width: 100%;
    height: auto;
  }

  .meta-section {
    text-align: center;
    display: block;

    .post-meta {
      margin: 0;
      color: #535353;
      font-weight: 700;
    }
  }
  h1 {
    margin-top: 0;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
  }
}
</style>
