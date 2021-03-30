import React from 'react';
import { Button } from 'react-scroll';
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

export default function Info() {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <ColumnOne>
                            <TextWrapper>
                                <TopLine>Top Line</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button to='home'/>
                                </BtnWrap>
                            </TextWrapper>
                        </ColumnOne>
                        <ColumnTwo>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </ColumnTwo>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
