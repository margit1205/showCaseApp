import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import styles from "./style.css";
import AllCard from "../card/Allcard";
import FinanceCard from '../card/Finance';
import RetailCard from '../card/Retail';
import InsuranceCard from '../card/Insurance';

const MyTabsComponent = () => {
  return (
    <div>
      <Tab.Container defaultActiveKey="tab1">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="tab1">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab2">Finance</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab3">Retail</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab4">Insurance</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="tab1">
            <AllCard/>
          </Tab.Pane>
          <Tab.Pane eventKey="tab2">
          <FinanceCard/>
          </Tab.Pane>
          <Tab.Pane eventKey="tab3">
          <RetailCard/>
          </Tab.Pane>
          <Tab.Pane eventKey="tab4">
          <InsuranceCard/>
           </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default MyTabsComponent;
