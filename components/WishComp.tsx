import React from 'react'
import styled from 'styled-components'
import { tempWish } from '../pages/wishes';

interface comProps {
    wish: tempWish
}

const WishComp = ({ wish }: comProps) => {

    return (
        <Wrapper>
            <Text>{wish.text}</Text>
            <From>- {wish.name}</From>
        </Wrapper>
    )

}
export default WishComp;

const Wrapper = styled.div`
    margin: 1rem  0;
    padding: 1rem;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    border-radius: 4px;
`;

const Text = styled.h4`

`;

const From = styled.p`
    text-align: right;
`;