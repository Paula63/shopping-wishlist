import React from 'react';
import Icon1 from '../../images/svg4.svg';
import Icon2 from '../../images/svg7.svg';
import Icon3 from '../../images/svg2.svg';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesElements';

export default function Services() {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesIcon src={Icon1} />
                            <ServicesH2>Find the best bargains</ServicesH2>
                            <ServicesP>We can help you save on future purchases and orders</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon2} />
                            <ServicesH2>Manage Items</ServicesH2>
                            <ServicesP>Remove items or wish boards from your account at any time</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon3} />
                            <ServicesH2>Save Time</ServicesH2>
                            <ServicesP>We will make online shopping less time consuming for you</ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
                </ServicesH1>
            </ServicesContainer>
        </>
    )
}
