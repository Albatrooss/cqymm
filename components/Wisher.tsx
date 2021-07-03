import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import styled from 'styled-components'

import TextField from '../components/TextField';
import InputField from '../components/InputField';
import { CombinedError, useMutation } from 'urql';
import { createMutation } from '../util/mutations';
import { formatError } from 'graphql';

interface comProps {
    w?: string;
}

interface Wish {
    wish: string;
    from: string;
}

const Wisher = ({ w }: comProps) => {

    const [wish, setWish] = useState<Wish>({
        wish: '',
        from: '',
    })
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [err, setErr] = useState<CombinedError | null>(null);

    const [_, createWish] = useMutation(createMutation);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWish(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let res = await createWish({ name: wish, text: wish.wish });
        console.log(res);
        if (res.error) {
            setErr(res.error);
            return;
        }
        setSubmitted(true);
    }

    if (submitted) return (
        <Wrapper>
            <Text>Thank you so much!!</Text>
        </Wrapper>
    );

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
            {err && <Text err>{err.toString()}</Text>}
            <Btn type='submit'>SUBMIT</Btn>   
        </Wrapper>
    )

}
export default Wisher;

interface WrapperProps {
    w?: string;
}
const Wrapper = styled.form<WrapperProps>`
    width: ${({w}) => w ? w : '100%'};
    margin: 1rem auto;
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
interface TextProps {
    err?: boolean;
}
const Text = styled.p<TextProps>`
    color: ${({theme, err}) => err ? theme.color.error : theme.color.black};
    padding: 1rem 0;
`;