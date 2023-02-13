const ADD_MESSAGE = 'ADD-MESSAGE';

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
};



const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.at(-1).id + 1,
                message: action.newMessage
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default dialogsReducer;