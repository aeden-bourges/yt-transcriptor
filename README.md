# yt-transcriptor

a minimal youtube transcript tool.

## why

tired of paywalls, auth walls, and ad-heavy tools
that do one simple thing. this does exactly one
thing, for free, with no account required.

the point is simple: grab the transcript of any
youtube video and paste it into the LLM of your
choice — because they can't watch videos (yet).

## what i learnt

this was my first ever coding project, built
from scratch through claude's learn mode.

along the way i learnt:

**frontend**
- html structure and semantics
- css styling, layout, and the box model
- javascript: dom manipulation, event listeners,
  async/await, fetch, try/catch error handling

**backend**
- node.js and express: building a real api server
- environment variables: hiding api keys securely
- cors: how browsers handle cross-origin requests
- rest apis: receiving requests and sending responses

**deployment & tools**
- git and github: version control and collaboration
- github pages: free frontend hosting
- vercel: free backend hosting
- npm: managing packages and dependencies

## how it works

the frontend (github pages) sends your youtube url
to a backend server (vercel). the server calls the
supadata api with a hidden api key and returns the
transcript. your browser never sees the key.

browser → vercel backend → supadata api

## how to use

1. open the video on youtube
2. copy the url from the address bar —
   it should look like `youtube.com/watch?v=xxxxx`
   (not the short share link)
3. paste it into the input and click **get transcript**
4. once it loads, click **copy transcript**
5. paste into chatgpt, claude, or wherever

## built by

aeden — [@aeden-bourges](https://github.com/aeden-bourges)