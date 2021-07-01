import Head from 'next/head';

import Slideshow from '../components/Slideshow';
import Wisher from '../components/Wisher';
import WeddingCard from '../components/WeddingCard';

import { IMAGES } from '../util/constants';

export default function Home() {
    return (
        <>
            <Head>
                <title>Caitlin+Tim {'<3'}</title>
            </Head>
            {/* <h1>Woah</h1> */}
            {/* <Slideshow imgs={IMAGES} time={4000} />  */}
            {/* <Wisher /> */}
            <WeddingCard />
        </>
    );
}
