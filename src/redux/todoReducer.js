const ADD_TODO = "ADD_TODO"

const initialState = {
    todos: [
        {id: 1, title: "gangstar", description: "blalvba"}
    ]
}

const todoReducer = (state= initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            let newTodo = {
                id: action.payload.newId,
                title: action.payload.title,
                description: action.payload.description
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        default:
            return state
    }
}
export const addTodo = (newId, title, description) => ({type:ADD_TODO, payload: {newId, title, description}})



export default todoReducer