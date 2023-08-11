import React from "react";
import clsx from "clsx";
import styles from "./style.css";
import MyTabsComponent from "../tab";
import DocTabsComponent from "../docTab";

function Feature() {
  return <></>;
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className="banner">
        <div className="banner-bg">
          <img className="star" src={"img/Vector.svg"}></img>
          <img className="img-frame" src={"img/04.svg"}></img>
          <img className="smiling" src={"img/Smiling.svg"}></img>
          <img className="scale" src={"img/07.svg"}></img>
        </div>
        <div className="banner-content">
          <h1>
            <span className="banner-title">WaveMaker</span><span className="moments">moments</span>
          </h1>

          <p>Examples of compelling user experience of WavaMaker apps.</p>
        </div>
      </div>

      <DocTabsComponent />
    </section>
  );
}
