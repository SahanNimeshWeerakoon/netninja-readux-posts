const initState = {
    posts: [
        { id: 1, title: 'title one', body: 'titile one body' },
        { id: 2, title: 'title two', body: 'titile two body' },
        { id: 3, title: 'title three', body: 'titile three body' }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action.type)
    if (action.type == 'DELETE_POST') {
        let newPosts = state.posts.filter( post => {
            return post.id != action.id
        } )
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer