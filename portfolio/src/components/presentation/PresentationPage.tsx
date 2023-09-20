import React from "react";

import { Stack } from "@chakra-ui/react";
import { BiHappyAlt, BiListOl, BiCodeCurly, BiSolidGraduation, BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";

import SectionTitle from "../utils/section/SectionTitle";
import Section from "../utils/section/Section";
import SectionText from "../utils/section/SectionText";
import SectionList from "../utils/section/SectionList";
import SectionBody from "../utils/section/SectionBody";
import SectionHistory from "../utils/section/SectionHistory";

import portfolioContent from '../../portfolio_content.json';
import SectionLink from "../utils/section/SectionLink";

const PresentationPage = () => {
  return (
    <Stack 
      gap="8"
    >
      <Section>
        <SectionTitle 
          icon={BiHappyAlt}
          title="Bienvenue !"
        />
        <SectionBody>
          <Stack gap="4">
            <SectionText>
              {portfolioContent.presentation.description}
            </SectionText>
            <SectionLink
              icon={BiLogoGithub}
              href={portfolioContent.header.githubLink} 
            >
              Mon GitHub
            </SectionLink>
            <SectionLink
              icon={BiLogoLinkedinSquare}
              href={portfolioContent.header.linkedinLink} 
            >
              Mon Linkedin
            </SectionLink>
          </Stack>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={MdWork}
          title="Expériences professionnelles"
        />
        <SectionBody>
          <SectionHistory 
            items={portfolioContent.presentation.professionalExperience} 
          />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiListOl}
          title="Mes compétences"
        />
        <SectionBody>
          <SectionList 
            items={portfolioContent.presentation.skills} 
          /> 
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiCodeCurly}
          title="Mes langages de programmation"
        />
        <SectionBody>
          <SectionList 
            items={portfolioContent.presentation.programmingLanguages} 
            direction="horizontal" 
          />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={LuLanguages}
          title="Mes langues"
        />
        <SectionBody>
          <SectionList 
            items={portfolioContent.presentation.languages} 
          />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiSolidGraduation}
          title="Mes formations"
        />
        <SectionBody>
          <SectionHistory 
            items={portfolioContent.presentation.courses} 
          />
        </SectionBody>
      </Section>
      
    </Stack>
  )
};

export default React.memo(PresentationPage);