const initial_state = {
    activeModule : {},
    activeLesson: {},
    modules:[
        {
            id: 1, title: 'Iniciando com react', lessons: [
                {id: 1, title: 'Primeira aula'},
                {id: 2, title: 'Segunda aula'},
            ]
        },
        {
            id: 2, title: 'Iniciando com redux', lessons: [
                {id: 3, title: 'Terceira aula'},
                {id: 4, title: 'Quarta aula'},
            ]
        }
    ]
}

export default function course(state = initial_state, action) {
    if(action.type === 'TOGGLE_LESSON'){
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module,
        };
    }
    return state;
}
