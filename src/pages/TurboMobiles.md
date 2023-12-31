---
id: Turbo
title: Turbo Mobiles
---
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { Carousel } from 'react-responsive-carousel';
import clsx from "clsx";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ParagraphGenerator from "../components/content";


export const ImageCarousel = () => 
   (
    <Carousel>
      <div className="d-flex">
       <img   src="img/iphone2.png" alt="Image 1" />
      </div>
      <div className="d-flex">
       <img    src="img/iphone.png" alt="Image 2" />
      </div>
      <div className="d-flex">
      <img  src="img/sony.png" alt="Image 3" />
      </div>
    </Carousel>
  );

export const RightTab = () => (
    <Tabs className="right-tabs">
      <TabItem className="tab-item" value="Widget" label="Widget" default>
        <div className="tab-row">
        <div class="widget-card">
    <h5><i class="fa fa-credit-card"></i>Wizard</h5>
    <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
    <a href="#">Go to documentaion <i class=" icon-back fas fa-arrow-right"></i></a>
   </div>
   <div class="widget-card">
    <h5><i class="fa fa-credit-card"></i>Calender</h5>
    <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
    <a href="#">Go to documentaion <i class=" icon-back fas fa-arrow-right"></i></a>
   </div>
   <div class="widget-card">
   <h5><i class="fa fa-credit-card"></i>Cards</h5>
    <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
    <a href="#">Go to documentaion <i class=" icon-back fas fa-arrow-right"></i></a>
   </div>
    <div class="widget-card">
    <h5><i class="fa fa-credit-card"></i>Cards</h5>
    <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
    <a href="#">Go to documentaion <i class=" icon-back fas fa-arrow-right"></i></a>
   </div>
        </div>
      </TabItem>
      <TabItem className="tab-item" value="Prefab" label="Prefab">
        <div className="tab-row">
        </div>
      </TabItem>
    </Tabs>
);

<div class="row">
<div class="col col--9 left-content ">
  <div class="About-section spacing-top">
    <a href="/"> <span>
    <i class=" icon-back fas fa-arrow-left"></i> Back
    </span>
    </a>
        <h1>Turbo Mobiles</h1>
        <ImageCarousel />
    <div class="inline-head spacing-top">
      <h2>About App</h2>
      <button href="" class="btn-transparent width-100">
        <i class="fa fa-sitemap base-margin"></i>
        View architectural flow
      </button>
    </div>
    <p class="spacing-content">
      Loan Corp is a loan processing system that automates the workflow using
      the Camunda BPM. It comprises of three profiles, including the applicant,
      loan processor, and relationship manager. When an applicant submits a loan
      request, the processor approves or rejects the application. In some cases,
      depending on the applicant's report, the relationship manager can
      re-evaluate the application. You can track each stage in the individual
      app.
    </p>
  </div>

  <div class="personas-section spacing-top">
  <h2>Personas</h2>
  <div class="personas-container spacing-content">
   <div class="personas">
  <label class="icon-circle pink">
    <i class="fa fa-users"></i>
  </label>
  <div class="personas-content spacing-content border">
  <h4>Customer</h4>
  <ul>
    <li>Apply for loan</li>
    <li>Upload document</li>
    <li>E-sign document through docusign</li>
    <li>View the loan status</li>
  </ul>
  </div>
  <button class="width-100 btn-transparent">Launch App</button>
</div>

<div class="personas">
  <label class="icon-circle blue">
    <i class="fa fa-thumbs-up"></i>
  </label>
  <div class="personas-content spacing-content border">
  <h4>Customer</h4>
  <ul>
    <li>Apply for loan</li>
    <li>Upload document</li>
    <li>E-sign document through docusign</li>
    <li>View the loan status</li>
  </ul>
  </div>
  <button class="width-100 btn-transparent spacing-content">Launch App</button>
</div>

 <div class="personas">
  <label class="icon-circle green">
    <i class="fa fa-users"></i>
  </label>
  <div class="personas-content spacing-content">
  <h4>Customer</h4>
  <ul>
    <li>Apply for loan</li>
    <li>Upload document</li>
    <li>E-sign document through docusign</li>
    <li>View the loan status</li>
  </ul>
  </div>
  <button class="width-100 btn-transparent">Launch App</button>
</div>
</div>
</div>



  <div class="integration-section spacing-top">
  <h2>Integrations</h2>
  <div class="integration-container spacing-content">
  <div class="integration-content ">
   <h5><i class="fas fa-icons"></i>Wizard</h5>
   <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
  </div>
  <div class="integration-content">
   <h5><i class="fas fa-icons"></i>Wizard</h5>
   <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
  </div>
  <div class="integration-content">
   <h5><i class="fas fa-icons"></i>Wizard</h5>
   <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
  </div>
  </div>
   <button class="view-more btn-link">View More</button>
  </div>


  <div class="integration-section spacing-top">
  <h2>Platform out of the form features</h2>
  <div class="integration-container spacing-content">
  <div class="integration-content">
   <h5><i class="fas fa-leaf"></i>Wizard</h5>
   <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
  </div>
  <div class="integration-content">
   <h5><i class="fas fa-leaf"></i>Wizard</h5>
   <p>Sed nunc neque, tempus ac dolor et, dignissim fringilla mi. Suspendisse in orci porttitor lorem interdum</p>
  </div>
  </div>
  
  </div>
</div>

 <div class="aside-right col col--3 ">
 <h4>WM Features Used</h4>
   <RightTab />
   
  </div>
</div>

