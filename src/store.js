import {createStore} from 'redux';

var initState = {
    mode:'WELCOME',
    welcome_content : {
        title : 'WEB',
        desc:'Hello Web'
    },
    contents: [
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JS', desc:'JS is ...'}
    ]
}

// state = initState는 state 값이 널이면 initState를 넣어주는 것
function reducer(state=initState, action) {
    return state;
}

export default createStore();