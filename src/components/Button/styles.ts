import styled from "styled-components";


export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;
    

    &:hover {
        opacity: .8;
    }
`;
export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255,255,255, .2);
    padding: 0 15px;
    margin-left: 15px;
`;
export const Icon = styled.img`
    height: 20px;

`;
export const Label = styled.div`
    font-family: Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;
    height: inherit;
    color: #000;
    display: flex;
    justify-content: left;
    align-items: center;
    flex: 1;
    font-size: 25px;
    
`;
