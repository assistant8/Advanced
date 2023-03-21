import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: 'Gachon',
    isClick: false
}

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers:{ //각각의 상태변경을 ~ 모아놓은 것
        inputUser: (state, action) => { //액션은 디스패치에서 진행
            state.user = action.payload; //payload가 user 값으로 변함
            console.log(state.user)
        }, 
        okClick: (state) => {
            state.isClick = true;
        },
        resetUser: (state) => {
            state.isClick = false;
        }
    }
})

export const {inputUser, okClick, resetUser} = userSlice.actions; //각각 쓰일 때 위함
export default userSlice.reducer; //위와 export 하는 목적이 다름 , 이건 상점에 등록시킴?