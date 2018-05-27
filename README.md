# MyReads: Book Tracking App (React)
This app allows users to select books from a library and organize them into shelves. The Books are then stored in a back-end database and received on load.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Below you will find some information on how to run the app.
## Table of Contents
- [Demo](#demo)
- [Implementation](#implementation)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [License](#license)
## Demo
![my reads](https://lh3.googleusercontent.com/rqZGxpzJbA_ZrMOArD799kAlMV5tbA8ipWN2ATdbFUx1GErRhCu7L9zwzllNQ456RNKG78s2sJYiwpPPpKuwQjegze-wZvB-U8CKZY2kcuWWlGrMFEIJrEX9wn8pL-9w35TsvrMAMc5XPqeu02_346AAum8KGFOi8X4VF9rnCwsdQQJC3quxwFSXxMSaBmeSrzOqDHJ5e_SK6wdgeu5iscufuq8q7LIIXGynFtT0RLsjGfguV_jZtXSX053DBh_waUYLdPjtMwcFjj1vCr290RGzMn4r7f_p94OQ04UboOihuCo6qKyENKrXP7P9PMIJvh16xUvCCYIPNnjme2r0tGlbYtophTQ7gojBbBvze19pcTd6_0_uXA-tTrxskMbWiJwCqeX-3-ElvUnAGyS-_uQbxZxfwL4y1e7gshx_uzQRM2xfaZtkNwJPUbrns77GdrHT4Xpb0-IpRr2n-uPJJ_2m2LJ6HdhUSBaUFlDVa37z-B5tNxPz3M7a9Rv1oo11TrcQzg3EOZY75ousuob57yOWCvrleJ3CphgyESGoQJuMQwhyvryd91RWd2BxAeFtnRdVxA4IkF-mAGU1iHnwCkjDWoIqJ7Ecu_ONMPI=w1024-h900-no)
App is currently live: https://ziwam.github.io/MyReads/
## Implementation
To clone this repository you need [Git](https://git-scm.com/), [Node](https://nodejs.org/) and Node's package manager ([npm](https://www.npmjs.com/)) installed on your computer.
### Dependencies
```
"dependencies": {
    "node-sass-chokidar": "^1.2.2",
    "npm-run-all": "^4.1.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.0"
}
```
### Installation
```bash
# clone the repo
$ git clone https://github.com/Ziwam/MyReads.git

# go into the repo
$ cd myreads

# install the dependencies
$ npm install

# start the app
$ npm run start
```
The app should be running on http://localhost:3000
## Deployment
Create a development-ready build be running.
```bash
$ npm run build
```
## Technologies
This project includes:
- [React](https://reactjs.org/)
- Udacity's Book Database - *database is very limited*
- [Sass](https://sass-lang.com/)
### Acknowledgements
I would like to thank [rafrex](https://github.com/rafrex/spa-github-pages) for the gist I included in **index.html**. The gist allows GitHub pages and react-router to coexist, Rerouting the app back to the correct URL whenever a redirect is detected.
## License
(MIT License)
The MIT License (MIT) Copyright (c) 2018 Ziwa Mukungu zmukungu@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.