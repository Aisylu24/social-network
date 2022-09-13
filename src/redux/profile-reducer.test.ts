import {addPostAC, deletePostAC, profileReducer} from "./profile-reducer";


test('new post should be added', ()=> {
    let state = {
        posts: [
            {id: 1, message: 'Hi there', likesCount: 10},
            {id: 2, message: 'My first post', likesCount: 25},
            {id: 3, message: 'Test', likesCount: 25}
        ],
        profile: null,
        status: ""
    }
    let action = addPostAC('test')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('test')
    })

test('new post should be added', ()=> {
    let state = {
        posts: [
            {id: 1, message: 'Hi there', likesCount: 10},
            {id: 2, message: 'My first post', likesCount: 25},
            {id: 3, message: 'Test', likesCount: 25}
        ],
        profile: null,
        status: ""
    }
    let action = deletePostAC(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})