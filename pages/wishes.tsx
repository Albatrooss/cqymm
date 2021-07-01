import React, { useState } from 'react'
import styled from 'styled-components'

import WishComp from '../components/WishComp';

interface comProps {
    
}

export interface tempWish {
    id: number;
    name: string;
    text: string;
    like: boolean;
}

const wishesEx: tempWish[] = [
    {
        id: 1,
        name: 'Andrew',
        text: 'Woot! So excitasd fasdf  asdfasdf asdfa sdfas dfasdfsadfed for you guys!',
        like: true
    },
    {
        id: 2,
        name: 'Kyla',
        text: 'Woot! So excited for you guys!',
        like: true
    },
    {
        id: 3,
        name: 'Adam',
        text: 'Woot! So excited for you guys!',
        like: true
    },
    {
        id: 4,
        name: 'Hannah',
        text: 'Woot! So excited for you guys!',
        like: true
    },
]

const Wishes = ({  }: comProps) => {

    const [wishes, setWishes] = useState<tempWish[]>(wishesEx);
    return (
        <Wrapper>
            { wishes.map(wish =>
                <WishComp wish={wish} key={wish.id} />
            )}
        </Wrapper>
    )

}
export default Wishes;

const Wrapper = styled.div`
    margin: 2rem;
`;