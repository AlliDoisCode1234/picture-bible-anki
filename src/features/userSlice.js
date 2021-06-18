import { createSlice } from '@reduxjs/toolkit'


// const [userName, setUsername] = useState(null)
// const [userEmail, setUserEmail] = useState(null)

const initialState = {
    userName: null,
    userEmail: null,
    userBibleVersionId: '685d1470fe4d5c3b-01'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action)=>{
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
        },
        setUserLogOutState: state => {
            state.userName = null
            state.userEmail = null
        },
        setUserBibleVersionId: (state, action)=>{
            state.userBibleVersionId = action.payload.userBibleVersionId
        }
    }
});

export const { setActiveUser, setUserLogOutState, setUserBibleVersionId } = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectUserBibleVersionId = state => state.user.userBibleVersionId

export default userSlice.reducer