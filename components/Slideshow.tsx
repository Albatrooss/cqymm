import React, { ChangeEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

interface props {
    imgs: string[];
    time: number;
}

const Slideshow = ({ imgs, time }: props) => {

    const [slide, setSlide] = useState<number>(0);

    const changeSlide = () => {
        console.log('fn')
        setSlide(prev => (prev + 1) % imgs.length);
    }

    useEffect(() => {
        console.log('effect')
        setTimeout(changeSlide, time)
    }, [slide]);

    let slides = imgs.map((img, i) => <Img src={img} fade={slide === i} />)

    return (
        <Wrapper>
            {slides}
        </Wrapper>
    )

}
export default Slideshow;


const Wrapper = styled.div`
    position: relative;
`;

interface ImgProps {
    fade?: boolean;
}
const Img = styled.img<ImgProps>`
    position: absolute;
    left: 0;
    top: 2rem;
    max-width: 600px;
    opacity: ${({fade}) => fade ? 1 : 0};

    transition: opacity 1000ms ease;
`;
