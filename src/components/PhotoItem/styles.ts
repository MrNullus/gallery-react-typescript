import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    img {
        max-width: 100%;    
        margin-bottom: 10px;
        border-radius: 10px;
    }

    strong {
        background-color: #1f1ab2;
        border-radius: 10px;
        padding: 12px;
    }
`;

export const ButtonDeleted = styled.button`
`;