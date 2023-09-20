import React from "react";

import { 
  AiOutlineAppstore 
} from "react-icons/ai";

import Section from "../utils/section/Section";
import SectionTitle from "../utils/section/SectionTitle";
import SectionBody from "../utils/section/SectionBody";
import SectionHistoryList from "../utils/section/SectionHistoryList";

import portfolioContent from '../../portfolio_content.json';

const ProjectsPage = () => {
  return (
    <Section>
      <SectionTitle 
        icon={AiOutlineAppstore}
        title="Mes projets"
      />
      <SectionBody>
        <SectionHistoryList 
          items={portfolioContent.projects} 
        />
      </SectionBody>
    </Section>
  )
};

export default React.memo(ProjectsPage);