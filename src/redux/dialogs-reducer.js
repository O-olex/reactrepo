const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Mike' },
        { id: 2, name: 'Sandy' },
        { id: 3, name: 'Max' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am fine' }
    ],
    newMessageText: 'new Message'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            let stateCopy = { ...state };
            stateCopy.dialogsData = [...state.dialogsData];
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }


}

export default dialogsReducer;