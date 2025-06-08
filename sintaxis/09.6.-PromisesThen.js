

// Ejemplo de promesa con encadenamiento de .then
function getUser() {
    return Promise.resolve({
        id: 1,
        name: "John Doe"
    });
}

function getPosts(userId) {
    return Promise.resolve([
        { id: 1, userId: userId, title: "Post 1" },
        { id: 2, userId: userId, title: "Post 2" }
    ]);
}

function getComments(postId) {
    return Promise.resolve([
        { id: 1, postId: postId, content: "Comment 1" },
        { id: 2, postId: postId, content: "Comment 2" }
    ]);
}

getUser()
    .then(user => {
        console.log("Usuario:", user);
        return getPosts(user.id); S
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getComments(posts[1].id);
    })
    .then(comments => {
        console.log("Comentarios:", comments);
    })


//Si quieres usar async/await para el mismo ejemplo:
async function redSocial() {
    try {
        const user = await getUser();
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);

        return { user, posts, comments };
    } catch (error) {
        console.error("Ocurrió un error:", error);
        return null;
    }
}

// Afuera, puedes usarlo así:
redSocial().then(({ user, posts, comments }) => {
    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
});
