import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
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
                            <ServicesH2>Discount Notifications</ServicesH2>
                            <ServicesP>Receive price reduction alerts through email for any item</ServicesP>
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
