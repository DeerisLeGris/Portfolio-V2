import React from "react";

import { Stack } from "@chakra-ui/react";
import { BiHappyAlt, BiListOl, BiCodeCurly, BiSolidGraduation } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";

import SectionTitle from "../utils/section/SectionTitle";
import Section from "../utils/section/Section";
import SectionText from "../utils/section/SectionText";
import SectionList from "../utils/section/SectionList";
import SectionBody from "../utils/section/SectionBody";

const PresentationPage = () => {
  const liste = [
    "Test 1", "Test 2", "Test 3", "Test 4"
  ];

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
          <SectionText>
            test
          </SectionText>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={MdWork}
          title="Expériences professionnelles"
        />
        <SectionBody>
          <SectionList items={liste} /> 
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiListOl}
          title="Mes compétences"
        />
        <SectionBody>
          <SectionList items={liste} direction="horizontal" /> 
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiCodeCurly}
          title="Mes langages de programmation"
        />
        <SectionBody>
          <SectionText>
            test
          </SectionText>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={LuLanguages}
          title="Mes langues"
        />
        <SectionBody>
          <SectionText>
            test
          </SectionText>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle 
          icon={BiSolidGraduation}
          title="Mes formations"
        />
        <SectionBody>
          <SectionText>
            test
          </SectionText>
        </SectionBody>
      </Section>
      
    </Stack>
  )
};

export default React.memo(PresentationPage);