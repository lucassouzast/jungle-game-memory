import styled from "styled-components";

type ContainerProps = {
    showBackground : boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props=> props.showBackground ? '#fff' : '#fff'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width: 750px) {
        width: 90px;
        height: 90px;
        margin: auto;
    }
`;

type IconProps = {
    opacity?: number;
}
export const Icon = styled.img<IconProps>`
    width: 90px;
    height: 90px;
    border: 3px solid black;
    border-radius: 20px;
    opacity: ${props => props.opacity ? props.opacity : 1};

    @media (max-width: 750px) {
        width: 90px;
        height: 90px;
    }
    
`;