
let state = {
    profilePage: {
        posts: [
            {id: 0, message:'Hi, how are you?', likesCount: 15},
            {id: 1, message: "Let it snow", likesCount: 25},
            {id: 2, message: "It's my vacation", likesCount: 22},
            {id: 3, message: "It's my first post", likesCount: 25},
        ],
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Viktor'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 0, message: 'Hi'},
            {id: 1, message: 'How are you?'},
            {id: 2, message: 'Yo'},
        ]
    },
}

export default state;