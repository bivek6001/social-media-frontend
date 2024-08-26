import {createSlice} from "@reduxjs/toolkit"


const initialState={
    loggedinUser:null,
    suggestedUsers:[],
    selectedUser:null
}
const userSlice= createSlice({
    name:"user",
    initialState,

    reducers:{
        setLoggedinuser:(state,action)=>{
            state.loggedinUser=action.payload;
          
        },
        setSuggestedUsers:(state,action)=>{
            state.suggestedUsers=action.payload;
        }
        ,setSelectedUser:(state,action)=>{
            state.selectedUser=action.payload;
        }
    }
});
export const {setLoggedinuser,setSuggestedUsers,setSelectedUser} = userSlice.actions;
export default userSlice.reducer;