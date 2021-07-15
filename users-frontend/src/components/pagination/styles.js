import styled from "styled-components";

export const ArrowButton = styled.button`
    background: ${props => props.dark ? "#000" : "#fff"};
    color: #3b9eff;
    border: 1px solid #3b9eff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    &:hover {
    background: #3b9eff;
    color: #fff;
    cursor: pointer;
    }
    &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    }
`;