import blogs from './content/works.json'
import pages from './content/pages.json'
export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    script: [
      { src: '/identity.js' },
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    title: 'Norman Bertolino',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://normanbertolino.com`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Norman Bertolino'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Norman Bertolino and description'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Norman Bertolino and description'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Norman Bertolino'
      },
      {
        hid: 'og:article:author',
        property: 'og:article:author',
        content: 'https://twitter.com/normanbertolino'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Norman Bertolino'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Norman Bertolino'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Norman Bertolino and description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ccc' },

  /**
   * Plugins
   */
  plugins: ['~/plugins/lazyload'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],

  /**
   * Google fonts
   */
  webfontloader: {
    google: {
      families: ['Rubik:400,700', 'Karla:400,700,400i,700i'] // Loads Lato font with weights 400 and 700
    }
  },

  /**
   * Font Awesome
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter']
      }
    ]
  },

  /**
   * Manifest
   */
  manifest: {
    name: 'Norman Bertolino',
    short_name: 'Norman Bertolino',
    lang: 'en'
  },

  /**
   * sitemap
   */
  sitemap: {
    hostname: 'https://normanbertolino.com',
    gzip: true,
    exclude: ['/admin/']
  },

  /**
   * Robots
   */
  robots: {
    UserAgent: '*',
    Disallow: '/admin'
  },

  /**
   * Generate config
   */
  generate: {
    routes: [].concat(
      blogs.map(blog => `/work/${blog.slug}`),
      pages.map(pg => `/page/${pg.slug}`)
    )
  },

  /**
   * Transition
   */
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  }
}
