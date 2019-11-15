### Missed it? Watch it here!
https://www.youtube.com/watch?v=-oyeaIirVC0&t=158s

<br>

##### Building this repo:
### Modern Javascript ›
[Rollup](https://rollupjs.org) to **bundle**, **treeshake**, **import from NPM or URLs**, and **import CSS**. 

### Modern CSS ›
[PostCSS](https://postcss.org) to **import from NPM**, [postcss-preset-env](https://preset-env.cssdb.org/) for **CSS features from the spec**, and **easings** from [easings.net](https://easings.net) for convenient use in animations. 

### Rad Development Server ›
[Browsersync](https://www.browsersync.io) with all the goodies: **live reload**, **cross device syncing**, **remote debugging**, [etc](https://www.browsersync.io).

<br><br>

## Getting Started
1. `mkdir new-project-name && cd $_`
1. `git clone --depth=1 https://github.com/argyleink/shortstack.git . && rm -rf ./.git`
1. `npm i`
1. `npm start`

## Development
Running `npm start` runs Browsersync, which watches changes to your files in `./app` and refreshes connected browsers so that you can see the effects of your changes live.

## Building
Once you're ready to go live `npm run build` compiles and minifies your code in `app` and outputs the optimised result to a folder called `dist` that's ready to be shared on the web
