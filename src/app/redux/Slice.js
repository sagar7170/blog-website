import { createSlice } from "@reduxjs/toolkit";

const blogSlice  = createSlice({
    name: "blog",
    initialState: {
        posts:[],
        postdetail:{},
        edit: {}
    },
    reducers:{
        write(state,action){
            state.posts = [...state.posts,action.payload];
        },
        getpost(state,action){
           state.postdetail = action.payload
        },
        edit(state,action){
           state.edit = action.payload
        },
        update(state,action){
            const {cover,title,story,index} = action.payload
           state.posts.splice(index,1,{cover,title,story});
        console.log("update",title)
        }
    }
}) 

export const actions = blogSlice.actions;
const blogReducer = blogSlice.reducer
export default blogReducer;