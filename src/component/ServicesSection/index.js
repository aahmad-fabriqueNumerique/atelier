import React from "react";
import one from "../../images/one.svg";
import two from "../../images/two.svg";
import three from "../../images/three.svg";
// import { Icon3 } from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElement";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>NOS SERVICES</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={one} />
          <ServicesH2>Matériel reconditionné</ServicesH2>
          <ServicesP>
          Accompagnement, conseils et dépannage, Redonner un second souffle à vos matériels. 
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={two} />
          <ServicesH2>Responsabilité et solidarité</ServicesH2>
          <ServicesP>
          
          Nous réduison les impacts écologiques en développant le reconditionnement de matériels informatiques.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={three} />
          <ServicesH2>Assistance et maintenance</ServicesH2>
          <ServicesP>
          Une équipe de jeunes, dévoués, passionnés par le métier de l'informatique
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
