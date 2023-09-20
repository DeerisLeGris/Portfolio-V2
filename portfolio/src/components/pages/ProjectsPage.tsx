import React from "react";

import { 
  AiOutlineAppstore 
} from "react-icons/ai";

import Section from "../utils/section/Section";
import SectionTitle from "../utils/section/SectionTitle";
import SectionBody from "../utils/section/SectionBody";
import SectionHistoryList from "../utils/section/SectionHistoryList";
import SectionText from "../utils/section/SectionText";

import portfolioContent from '../../portfolio_content.json';

const ProjectsPage = () => {
  return (
    <Section>
      <SectionTitle 
        icon={AiOutlineAppstore}
        title="Mes projets"
      />
      <SectionBody>
        <SectionText>
          {portfolioContent.projects.description} 
        </SectionText>
        <SectionHistoryList 
          items={portfolioContent.projects.list} 
        />
      </SectionBody>
    </Section>
  )
};

export default React.memo(ProjectsPage);