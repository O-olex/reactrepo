import { rerenderEntireTree } from '../render'

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;