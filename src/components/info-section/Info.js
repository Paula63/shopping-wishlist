import React from 'react';
import { Button } from '../ButtonElement';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    ColumnOne, 
    TextWrapper, 
    ColumnTwo, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap,
    Img
} from './InfoElements';

export default function Info({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark, 
    dark2,
    lightTextDesc
}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <ColumnOne>
                            <TextWrapper lightTextDesc={lightTextDesc}>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80} 
                                        primary={primary ? 1 : 0} 
                                        dark={dark ? 1 : 0} 
                                        dark2={dark2 ? 1 : 0} 
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </ColumnOne>
                        <ColumnTwo>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </ColumnTwo>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
