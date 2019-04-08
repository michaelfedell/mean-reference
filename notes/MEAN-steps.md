# MEAN stack

**M**ongo DB  
  NoSQL database for persistence

**E**xpress.js  
  Application Framework for backend structure etc

**A**ngular.js  
  Front-end framework for developing modular view components

**N**ode.js  
  Javascript runtime engine to run javascript as standalone application

1. [Download | Node.js](https://nodejs.org/en/download/)

2. Install helpful libraries (global)
   1. eslint
   2. espress-generator
   3. heroku
   4. knex
   5. nodemon
   6. npm
3. `express myapp --view ejs`

4. Explore packages etc…
   1. `npm install`
   2. `npm install --save <some_package>`
   3. `npm install --save nodemon`
   4. Change `start` script (in `package.json` to use nodemon
   5. `npm start` to check things out

5. Define new routes to handle url requests
   1. in `index.js`, write new `router.get('/url/requested', ...)`
   2. `...` becomes a `function(req, res, next) {...}`
   3. `...` becomes the response like `res.render('view-name', {data:'mock'})`

6. Develop views to render at new routes `views/page.hbs` if using handlebars
   1. Can also use a `/layouts/layout.hbs` to define universal layout
   2. Can also use `/partials/some-partial.hbs` to define things like header, footer, etc
   3. Need to `npm install --save express-handlebars` to get full handlebar engine
   4. Then change `app.js` to following:

    ```js
    // view engine setup
    app.engine('.hbs', expressHsb({
      defaultLayout: 'layout',
      extname: 'hbs'
    }));
    app.set('view engine', '.hbs');
    ```

7. Setup database
   1. Install MongoDB `brew install mongodb` 
       1. If you need home-brew: `/usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”`
   2. Create the `db/` folder
   3. Run the mongo daemon (serves database for access) via `mongod --dbpath db`
   4. Connect to database with `mongo`
   5. Install mongoose for application (`npm install --save mongoose`
       1. Connect to database from `app.js`

          ```js
          var mongoose = require('mongoose');
          ...
          mongoose.connect(‘localhost:<mongod-port>/<db-name>');
          ```

       2. Define data models
          1. Create new `models/model.js` file for each model
          2. Use `schema = new mongoose.Schema({...})` to define model schema
          3. Export model for use by other modules (`module.exports = mongoose.model('Model', schema);`)
       3. Seed database with data
          1. Programmatically create new data objects in a `seed/seeder.js` file
          2. Run seed.js file with `node seed/seeder.js`
          3. Connect to verify new collection (`mongo`...)

8. Deploy application on Heroku
   1. Since Heroku works as a git project, need to commit work
      1. Ensure `.gitignore` excludes files that should not be part of repository
      2. `git add <file_that_has_changed>` or `git add .` to add all
      3. `git commit -m "brief commit message describing change"`
      4. `git push` will send changes to github (`origin` remote)
   2. Add remote url for heroku
      1. `git remote add heroku <url-to-heroku-app.com>`
      2. `git push heroku` will push your master branch to heroku master branch
      3. can run `git push heroku <my_branch>:master` if deploying non-master branch
   3. Check build status/logs/app from heroku dashboard
