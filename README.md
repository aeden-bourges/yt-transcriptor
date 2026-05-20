# yt-transcriptor

live demo: https://aeden-bourges.github.io/yt-transcriptor/

a minimal youtube transcript tool.

## why

tired of paywalls, auth walls, and ad-heavy tools
that do one simple thing. this does exactly one
thing, for free, with no account required.

the point is simple: grab the transcript of any
youtube video and paste it into the LLM of your
choice — because they can't watch videos (yet).

## features

- transcript extraction from youtube videos
- automatic transcript cleanup and formatting
- paragraph structuring for readability
- sentence capitalization
- `.txt` transcript export
- copy-to-clipboard support
- inline error handling
- fully free, no account required

## recent upgrades

- built a real transcript processing pipeline
- transformed raw captions into cleaned readable text
- added automatic paragraph grouping
- added transcript capitalization and cleanup
- improved frontend usability and error handling
- added `.txt` export support

## future improvements

- smarter paragraph grouping using timestamps
- speaker separation / diarization
- support for youtube short share links
- multilingual transcript cleanup
- optional raw vs processed transcript view
- transcript summaries and key points

## what i learnt

this was my first ever coding project, built
from scratch through a learning-by-building system
i've been developing by myself.

along the way i learnt:

**frontend**
- html structure and semantics
- css styling, layout, and the box model
- javascript: dom manipulation, event listeners,
  async/await, fetch, try/catch error handling
- text processing pipelines and regex basics
- arrays, loops, `.map()`, `.split()`, `.join()`
- blob file generation and browser downloads

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
- debugging with browser devtools

## how it works

the frontend (github pages) sends your youtube url
to a backend server (vercel). the server calls the
supadata api with a hidden api key and returns the
transcript. the frontend then cleans, structures,
and formats the transcript before displaying it.

your browser never sees the api key.

browser → vercel backend → supadata api

## how to use

1. open the video on youtube
2. copy the url from the address bar —
   it should look like `youtube.com/watch?v=xxxxx` (not the share link)
3. paste it into the input and click **get transcript**
4. once it loads, click **copy** or **download** the processed transcript
5. paste into chatgpt, claude, or wherever

## built by

aeden — [@aeden-bourges](https://github.com/aeden-bourges)