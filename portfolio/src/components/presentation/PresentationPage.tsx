import React from "react";

import { Stack } from "@chakra-ui/react";
import { BiHappyAlt, BiListOl, BiCodeCurly, BiSolidGraduation } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";

import SectionTitle from "../utils/SectionTitle";
import Section from "../utils/Section";
import SectionText from "../utils/SectionText";

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
        <SectionText>
          test
        </SectionText>
      </Section>

      <Section>
        <SectionTitle 
          icon={MdWork}
          title="Expériences professionnelles"
        />
        <SectionText>
          test
        </SectionText>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiListOl}
          title="Mes compétences"
        />
        <SectionText>
          test
        </SectionText>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiCodeCurly}
          title="Mes langages de programmation"
        />
        <SectionText>
          test
        </SectionText>
      </Section>

      <Section>
        <SectionTitle 
          icon={LuLanguages}
          title="Mes langues"
        />
        <SectionText>
          test
        </SectionText>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiSolidGraduation}
          title="Mes formations"
        />
        <SectionText>
          test
        </SectionText>
      </Section>
      
    </Stack>
  )
};

export default React.memo(PresentationPage);