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