import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import  { RiMapPinFill } from "react-icons/ri"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. From backend to frontend
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            JavaScript<br />
            HTML <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python <br />
            Django <br />
            Postgres <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiMapPinFill size="3rem" style={{padding: "4px"}}/>
        <ListContainer>
          <ListTitle>GIS</ListTitle>
          <ListParagraph>
            GeoDjango <br />
            OpenLayers <br />
            Leaflet <br />
            Geoserver <br />
            Google Maps API
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
