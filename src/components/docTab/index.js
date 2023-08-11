import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./style.css";
import AllCard from "../card/Allcard";
import FinanceCard from "../card/Finance";
import RetailCard from "../card/Retail";
import InsuranceCard from "../card/Insurance";

const DocTabsComponent = () => {
  return (
    <Tabs className="unique-tabs">
      <TabItem className="tab-item" value="AllCard" label="All" default>
        <div className="tab-row">
          <AllCard />
          <FinanceCard />
          <RetailCard />
        </div>
      </TabItem>
      <TabItem className="tab-item" value="FinanceCard" label="Finance">
        <div className="tab-row">
          <AllCard />
          <FinanceCard />
          <RetailCard />
        </div>
      </TabItem>
      <TabItem className="tab-item" value="RetailCard" label="Retail">
        <div className="tab-row">
          <AllCard />
          <FinanceCard />
          <RetailCard />
        </div>
      </TabItem>
      <TabItem className="tab-item" value="InsuranceCard" label="Insurance">
        <div className="tab-row">
          <FinanceCard />
          <RetailCard />
          <InsuranceCard />
        </div>
      </TabItem>
    </Tabs>
  );
};

export default DocTabsComponent;
