import glob from 'glob';
import path from 'path';

const socialTitle = "Nadia Meyer";
const socialDescription = 'For all your Taur and Taur Accessories';

/* https://github.com/jake-101/bael-template */
function getDynamicPaths(urlFilepathTable) {
  const paths = [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob)
        .sort((a, b) => (path.basename(a, '.md') > path.basename(b, '.md') ? -1 : 1))
        .map((filepath) => `${url}/${path.basename(filepath, '.md')}`);
    }),
  );
  return paths;
}

const dynamicRoutes = getDynamicPaths({
  '/journal': 'journal/*.md',
});

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: socialTitle,
    meta: [],
    link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
    ],
  },

  // render: {
  //   csp: {
  //     reportOnly: true,
  //     addMeta: true,
  //     hashAlgorithm: 'sha256',
  //     unsafeInlineCompatibility: true,
  //     policies: {
  //       'default-src': ["'self'"],
  //       'font-src':  ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://cdn.materialdesignicons.com"],
  //       'img-src': ["'self'"],
  //       'object-src': ["'none'"],
  //       'script-src': ["'self'", "'unsafe-inline'", "https://www.moneybutton.com"],
  //       'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.materialdesignicons.com"],
  //       'base-uri': ["'self'"],
  //     },
  //   },
  // },

  pwa: {
    runtimeCaching: [{}],
    meta: {
      name: socialTitle,
      author: 'Nadia Meyer',
      description: socialDescription,
      lang: 'en-AU',
      ogHost: 'https://nadiameyer.me',
      theme_color: '#ccffcc',
      twitterCard: 'summary',
      twitterCreator: '@alicetaur',
    },
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: ['@/assets/app.scss'],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-buefy',
    '@nuxt/http',
    '@nuxtjs/pwa',
    '@bazzite/nuxt-optimized-images',
  ],

  buefy: {
    css: false,
  },

  optimizedImages: {
    optimizeImagesInDev: true,
  },

  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
   ** Build configuration
   */
  build: {
    extend(config) {
      // ... other code ...

      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'journal'),
        loader: 'frontmatter-markdown-loader',
      }, );
    },
  },

  generate: {
    dir: 'dist',
    routes: dynamicRoutes,
    fallback: true,
  },
};