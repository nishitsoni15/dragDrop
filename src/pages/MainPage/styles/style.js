import styled from "styled-components";

export const AddBtnDiv = styled.div`
display:flex;
justify-content:end;

button{
    padding:10px 50px;
    background-color: blue;
    color: white;
    border-radius: 20px;
    border:none;
    font-weight: 900;
    cursor:pointer;
    &:hover{
        background-color: grey;
    }
}

`

export const MainEle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top:50px;
   
    .div-css{
        width: 200px;
        height: auto;
        border: 1px solid blue;
        border-radius: 20px 20px 10% 10%;

        .h2{
            padding: 15px 15px;
            margin-top: 0px;
            text-align:center;
            background-color:blue;
            color: white;
            border-radius: 20px 20px 10% 10%;
        }
    }
`
export const MainTodoDiv = styled.div`  
    max-height:350px;
    overflow:hidden;
    overflow-y: auto;
    padding: 10px 15px;
    
.todo-tickets{
    margin-top: 10px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background-color: yellow;
    border-radius: 10px 10px 10px 10px;
    cursor: move;
    // .item-name{
    //     margin-top:-15px;
    // }
    .icons-div {
        margin-top:-23px;
    }
}
`