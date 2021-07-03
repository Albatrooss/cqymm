import React, { ChangeEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

interface props {
    imgs: string[];
    time: number;
}

const Slideshow = ({ imgs, time }: props) => {

    const [slide, setSlide] = useState<number>(0);

    const changeSlide = () => {
        setSlide(prev => (prev + 1) % imgs.length);
    }

    useEffect(() => {
        setTimeout(changeSlide, time)
    }, [slide]);

    let slides = imgs.map((img, i) => <Img key={i} src={img} fade={slide === i} />)

    return (
        <Wrapper>
            {slides}
            <Strip />
        </Wrapper>
    )

}
export default Slideshow;


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 405px;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    background-color: #FFF;
    padding: 12px;
    border-radisu: 6px;
`;

interface ImgProps {
    fade?: boolean;
}
const Img = styled.img<ImgProps>`
    position: absolute;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    opacity: ${({fade}) => fade ? 1 : 0};

    transition: opacity 1000ms ease;
`;

const Strip = styled.div`
    height: 6px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #FFF;
    border-radisu: 6px;
`;