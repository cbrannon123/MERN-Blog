export function createPost(post) {
    return fetch('/api/posts', {
       method: 'POST',
       body: JSON.stringify({
           title: post.name,
           body: post.body
       }),
       headers: {
           'content-type': 'application/json'
       }
    })
}