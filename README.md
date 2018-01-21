# Voorhoede assignemnt

My assignment for De Voorhoede.

## My thinking

This was both a really simple and a really complex task. It was simple on the one hand because all you have to do is build a website with a homepage that links to 3 articles. It was complicated because that brief leaves so much room to interpret it that the possibilities are endless. Here is what I did and why:

### Assumptions

I have assumed that it is a blog that needs to be built. This seems reasonable as the content to present are long form articles. This means that content is king and needs to be presented front and centre. Fancy interactions would get in the way. I have also assumed that at some point we'll want to add more articles to the site. I've also assumed it is for members of the developement community who are likely to have up to date browsers, so backwards compatibility isn't crucial here.

### Rationale

Since the content on this site won't be changing often, I opted to use a static site generator ([Gatsby](https://www.gatsbyjs.org/)). This will allow the pages to be sent down the wire to the readers as quickly as possible as there won't need to be any rendering on the client or server. 

I opted to use the Markdown versions of the files, as they offer the most obvious authoring experience for future content. Initially I imported them directly into my repository, [but I'd wanted to try out the stack from this article for a while](https://www.gatsbyjs.org/blog/2017-12-06-gatsby-plus-contentful-plus-netlify/) so I ended up moving them to [Contentful](https://www.contentful.com), separating the title field out and adding a date field (which was present in the JSON files anyway). I've [hosted it here on Netlify](https://voorhoede-interview-aosmond.netlify.com) and it now gets rebuilt anytime I push to master on Git or make a content update on Contentful, which is cool.

## Further work

Obviously this isn't finished. Here are a few things I'd like to do given more time
- Pagination on the homepage would be essential if we had lots of articles
- Asynchronous font loading (as discussed in the 'Why our website is faster than yours' article) would speed things up
- Better caching rules on the server
- I'm using React's <code>dangerouslySetInnerHTML</code> which is fine when doing static generation of content. However I'd want to investigate how Gatsby & React handle this on the client, as setting the innerHTML to a bunch of mark-up opens the site up to XSS attacks.
- Rigorous browser testing is needed. I had a quick glance in Chrome, Firefox and Safari on my Mac, but if this were a real site I'd need to do more testing