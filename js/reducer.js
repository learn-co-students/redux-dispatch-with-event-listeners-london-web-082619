// add code snippets from README
const defaultState = {count: 0}
let state;
const reducer = (state = defaultState.count, action) => {
    switch(action.type){
        case 'INCREASE_COUNT':
            return state + 1

        default:
            return state
    }
}

const dispatch = (action) =>{
    state = reducer(state, action)
    render()
}

const render = () => {
    document.querySelector('#container').innerText = state
}

document.querySelector('#button').addEventListener('click', ()=> {
    dispatch({type: 'INCREASE_COUNT'})
})

dispatch({type: '@@INIT'})