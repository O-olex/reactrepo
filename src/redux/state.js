let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'First post', likesCount: 5 },
        { id: 2, message: 'The weather is good!', likesCount: 2 }
      ],
      newPostText: 'new Post Text'
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Mike' },
        { id: 2, name: 'Sandy' },
        { id: 3, name: 'Max' }
      ],
  
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am fine' }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText)  {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;