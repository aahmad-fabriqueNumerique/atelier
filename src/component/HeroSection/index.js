import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/plexus.mp4'; 
import { Button } from '../ButtonElement.js'; 

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>L'ATELIER NUMERIQUE</HeroH1>
                <HeroP>
                Rreconditionnement et recyclage de matériels
                <br/>
                Maintenance et assistance informatique
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='contact' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        flex={true}
                        >
                            Contactez-nous {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
