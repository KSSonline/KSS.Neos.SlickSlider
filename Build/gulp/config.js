var publicDirectory = '../Resources/Public';
var sourceDirectory = '../Resources/Private';

module.exports = {
  publicDirectory: publicDirectory,
  sourceDirectory: sourceDirectory,

  autoprefixer: { 
    browsers: [
      'last 2 versions',
      'ie >= 9',
      'Safari >= 7'
    ]
  },

  bower: {
    src: sourceDirectory + '/Components',
    dest: publicDirectory + '/Components',
    css: sourceDirectory + '/Components',
    scss: sourceDirectory + '/Styles/vendors',
    js: sourceDirectory + '/Components/Scripts',
    jsmin: publicDirectory + '/Components/Scripts'
  },

  fonts: {
    src: sourceDirectory + '/Fonts/**/*',
    dest: publicDirectory + '/Fonts'
  },

  images: {
    src: sourceDirectory + '/Images/**',
    dest: publicDirectory + '/Images'
  },

  sass: {
    src: sourceDirectory + '/Styles/**/*.scss',
    watch: sourceDirectory + '/Styles/**/*.scss',
    dest: publicDirectory + '/Styles',
    sourcemapPath: '.' + '/Maps',
    options: {
      outputStyle: 'compressed'
    },
    includePaths: ['./bower_components/susy/sass']
  },

  scripts: {
    components: sourceDirectory + '/Components',
    src: sourceDirectory + '/JavaScript/**/*',
    dest: publicDirectory + '/JavaScript',
    output: {
      preserveComments: 'all'
    }
  }
};
