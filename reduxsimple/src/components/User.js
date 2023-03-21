import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components"
import {inputUser, okClick, resetUser} from "../modules/userSlice"

const Layout = styled.div`
  margin-top: 10px;
  padding: 20px;
`;

const User = (props) => {
    const username = useSelector(state=>state.user) //selector는 상태 변수 가져옴
    const isClick = useSelector(state=>state.isClick)
    const dispatch = useDispatch()

    const handleOnUser = (e) => { //이게 값을 바꾸는 함수임
        dispatch(inputUser(e.target.value)) //ui에서 변경된 값
    }
    const handleOnBtClick = (e) => {
        dispatch(okClick())
    }
    const handleOnReset = (e) => {
        e.preventDefault(); //reset시 현 상태 변경하지말고 대기해라 - 안하면 상태 무한루프 돔
        dispatch(resetUser())
    }

    return (
        <Layout>
            <h2>Redux toolkit</h2>
            <input type="text" value={username} onChange={handleOnUser} />
            <button onClick={handleOnBtClick} value="onClick">OK</button>
            <button onClick={handleOnReset} value="reset">Reset</button>
            <br />
            {isClick && <label> {username} </label>}
        </Layout>
    )

}

export default User;










