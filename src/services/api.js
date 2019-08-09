import tokenService from "../utils/tokenService";

export function getPosts() {
    return fetch(`/api/posts`).then(function(res) {
      return res.json();
    })
  }

  export function createPost(post) {
    return fetch('/api/posts', {
       method: 'POST',
       body: JSON.stringify({
           title: post.title,
           body: post.body
       }),
       headers: {
           'content-type': 'application/json'
       }
    })
}