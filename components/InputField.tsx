import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

interface comProps {
    name: string;
    value: string;
    placeholder: string;
    fn: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ name, value, placeholder, fn }: comProps) => {

    return (
        <Wrapper>
            <Label htmlFor={name}>{name}</Label>
            <InputWrapper>
                <Input id={name} name={name} value={value} placeholder={placeholder} onChange={fn} autoComplete='off'/>
                <Line />
            </InputWrapper>
        </Wrapper>
    )

}
export default InputField;

const Wrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
`;

const Label = styled.label`
    padding: 1rem;
    text-transform: capitalize;
`;

const InputWrapper = styled.div`
    overflow: hidden;
    position: relative;
    margin-top: 0.4rem;
`;

const Line = styled.div`
    position: absolute;
    top: 0;
    left: -120%;
    width: 110%;
    height: 100%;
    border-bottom: 2px solid ${({theme}) => theme.color.red.pink};
    border-right: none;
    box-shadow: none;

    z-index: 1;
    transition: left 300ms ease;
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    z-index: 2;
    border: none;

    &:focus {
        border: none;
        outline: none;

        & + ${Line} {
            left: 0;
            border-right: 6px solid ${({theme}) => theme.color.red.pink};
            box-shadow: 10px 0 0 ${({theme}) => theme.color.red.main}, 25px 0 0 ${({theme}) => theme.color.red.gray};
        }
    }

    &::placeholder {
        color: #999999;
    }
`;