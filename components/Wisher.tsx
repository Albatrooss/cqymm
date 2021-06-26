import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import styled from 'styled-components'

import TextField from '../components/TextField';
import InputField from '../components/InputField';

interface comProps {
    w?: number;
}

interface Wish {
    wish: string;
    from: string;
}

const Wisher = ({ w=36 }: comProps) => {

    const [wish, setWish] = useState<Wish>({
        wish: '',
        from: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWish(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(wish);
    }

    return (
        <Wrapper w={w} onSubmit={handleSubmit}>
            <TextField
                name='wish'
                value={wish['wish']}
                placeholder='Wish us well...'
                fn={handleChange}
            />
            <InputField
                name='from'
                value={wish['from']}
                placeholder='Aaron Tveit'
                fn={handleChange}
            />
            <Btn type='submit'>SUBMIT</Btn>   
        </Wrapper>
    )

}
export default Wisher;

interface WrapperProps {
    w: number;
}
const Wrapper = styled.form<WrapperProps>`
    width: ${({w}) => w}rem;
    margin: 0 auto;
    padding: 1rem;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
`;

const Btn = styled.button`
    --bg-color: ${({theme}) => theme.color.red.main};
    --border-size: 3px;
    
    width: 100%;
    padding: 1rem;
    background-color: var(--bg-color);
    color: ${({theme}) => theme.color.white};
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: bolder;

    z-index: 1;
    position: relative;
    cursor: pointer;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 4px;
        z-index: -1;
        background-color: ${({theme}) => theme.color.red.pink};
        
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 300ms ease-in-out;
    }

    &:hover::before,
    &:focus::before {
        transform: scaleX(1);
    }
`;