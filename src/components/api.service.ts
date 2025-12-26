const getPosts = async () =>{
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())

    return responce
}


export {
    getPosts
}