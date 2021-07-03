import Head from 'next/head';

import Slideshow from '../components/Slideshow';
import Wisher from '../components/Wisher';
import WeddingCard from '../components/WeddingCard';

import { IMAGES } from '../util/constants';
import styled from 'styled-components';

export default function Home() {
    return (
        <>
            <Head>
                <title>Caitlin+Tim {'<3'}</title>
            </Head>
            {/* <h1>Woah</h1> */}
            <Wrapper>
                <Slideshow imgs={IMAGES} time={4000} /> 
                <Text>
                    Hello Family and Friends!<br/>
                    I am so exciting to announce that I will soon be proposing to Caitlin!!! <br/>
                    With things still locked down, I was thinking of ways to make my proposal special, and I thought it could be fun to pass this website around to you, the people who love us most, and get any words of encouragment, well wishes, or words of advice you could offer us! <br/>
                    Caitlin has no idea about this, and I thought it I could get 10,000 likes, she would marry me!
                </Text>
                {/* <Wrapper> */}
                    {/* <WeddingCard /> */}
                {/* </Wrapper> */}
                <Wisher />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
`;

const Text = styled.p`
    padding: 1rem;
    color: ${({theme}) => theme.color.black};
`;