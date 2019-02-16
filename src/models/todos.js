export default  {
    namespace: 'todos',
    state: [{id:0, name:'demo', done:false, del:false}],
    reducers: {
        add(state, {payload:name}) {
            return state.concat({id:state.length, name:name, done:false, del:false});
        },
        del(state, {payload:id}) {
            return state.map(todo=>({...todo, del:todo.id===id?true:todo.del}))
        },
        check(state, {payload:id}) {
            return state.map(todo=>({...todo, done:(id===todo.id?!todo.done:todo.done)}))
        }

    }
}