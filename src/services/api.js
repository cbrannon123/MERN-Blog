import tokenService from "../utils/tokenService";

export function getPosts() {
    return fetch(`/api/posts`).then(function (res) {
        return res.json();
    })
}

export function getPost(id) {
    return fetch(`/api/posts/${id}`).then(function (res) {
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

export function editPost(post) {
    return fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: post.title,
            body: post.body
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function deletePost(id) {
    return fetch(`/api/posts/${id}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}

//up and down votes
export function upvotePost(id, type) {
    var type = type === 'downvote' ? 'downvote' : 'upvote';
    return fetch(`/api/posts/${id}/${type}`, {
        method: 'PUT',
        body: JSON.stringify({
            upvotes: 1
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function addComment(postId, comment) {
    return fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({
            body: comment
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}