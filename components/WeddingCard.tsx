import React from 'react'
import styled, { keyframes } from 'styled-components'

interface comProps {
    
}

const WeddingCard = ({  }: comProps) => {

    return (
        <Wrapper>
            <Img src="leaf_test01.png" top />
            <TextWrapper>
                <Text size='3rem'>Caitlin</Text>
                <Divider>
                    <DividerLine />
                    <Text size='2.5rem'>&</Text>
                    <DividerLine />
                </Divider>
                <Text size='3rem'>Timothy</Text>
            </TextWrapper>
            <Img src="leaf_test01.png" />
        </Wrapper>
    )

}
export default WeddingCard;

const AnimationTest = keyframes`
    0%{
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10vh 0;
    transform-style: preserve-3d;
    transform-origin: left;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

    animation: ${AnimationTest} 4s ease-in forwards;
`;

interface ImgProps {
    top?: boolean;
}
const Img = styled.img<ImgProps>`
    transform: rotate(-${({top}) => top ? 0 : 180}deg);
    width: 100%;
`;

const TextWrapper = styled.div`
`;

interface TextProps {
    size: string;
}
const Text = styled.h3<TextProps>`
    text-align: center;
    font-size: ${({size}) => size};
    font-weight: bold;
    font-family: 'IM Fell English', serif;
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
`;

interface DividerLineProps {
    h?: string;
}
const DividerLine = styled.div<DividerLineProps>`
    background-color: #555;
    flex: 1;
    margin: 1rem;
    height: ${({h}) => h ? h : '2px'};
`;