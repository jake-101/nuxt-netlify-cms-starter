<template>
  <article  class="article-card in" :style="`background:url(${articleInfo.attributes.thumbnail}),${bg[index]};background-position: 50% 50%;background-size:cover;`" :class="[size, language]">
    <nuxt-link :to="`/work/${articleInfo.link}`">
      <div class="card-inner">
        <p class="type">
          {{ capitalize(articleInfo.attributes.type) }}
        </p>
        <h4>{{ articleInfo.attributes.title }}</h4>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    bg: {
      type: Array,
      default: ['#999','#999','#999','#999','#999']
    },
    articleInfo: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      size: 'two-thirds',
      language: this.articleInfo.attributes.language,
      icon: ''
    }
  },
  computed: {
getColor() {
  if (this.bg) {
  return this.bg[this.index]

  } else {
    return '#999'
  }
}
  },
  mounted() {
    const articleNo = this.index + 1

    this.size = 'one-third'

    // If is first or multiple of 10
    if (articleNo === 1) this.size = 'two-thirds'
    if (articleNo % 10 === 0) this.size = 'two-thirds'

    // Switch for font awesome icon
    switch (this.language) {
      case 'vuejs':
        this.icon = 'vuejs'
        break
      case 'react':
        this.icon = 'react'
        break
      case 'js':
        this.icon = 'js'
        break
      case 'wordpress':
        this.icon = 'wordpress'
        break
      case 'yarn':
        this.icon = 'yarn'
        break
      default:
        this.icon = 'nodeJs'
    }
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },


  }
}
</script>

<style lang="scss">

.article-card {
  border-radius: 0.5rem;
  padding: 1rem;
  background-blend-mode:multiply;
box-shadow: 8px 8px 40px rgba(20, 20, 20, 0.3);
  margin-bottom: 2rem;
  min-height: 32vh;
    transition: .2s box-shadow,0.5s background-color;

  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 8px 8px 70px rgba(20,20,20,.3);
      transition: .2s box-shadow;
  }

  a {
    position: absolute;
    height: 100%;
    width: 100%;
      background-blend-mode:multiply;

    left: 0;
    top: 0;
    color: #fff;
    box-shadow: none;
    background: rgba(0, 0, 0, 0);

    &:hover {
          background: rgba(200, 200, 200, 0.2);
      mix-blend-mode: hard-light;
      transition: 0.5s background-color, .3s mix-blend-mode;
    }
  }

  // Sizes
  &.two-thirds {
    width: calc(66% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }
  &.one-third {
    width: calc(33% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }

  // Types
  &.vuejs {
    background-color: #3ab795;
  }
  &.react {
    background-color: #01baef;
  }
  &.js {
    background-color: #fff275;

    a {
      color: #252525;
    }
  }
  &.other {
    background-color: #ff8c42;

    a {
      color: #252525;
    }
  }

  .card-inner {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    padding: 0 1rem;

    .type {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.4rem;
      color:#cdcdcd;
      border-radius: 0.2rem;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      display: inline-block;
      line-height: 0.8rem;
    }
    h4 {
      margin-top: 0;
            text-shadow: 2px 2px 1px rgba(0,0,0,.1);

      margin-bottom: 0.25rem;
    }
  }
}
</style>
