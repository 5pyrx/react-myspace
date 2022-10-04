import React from 'react';
import style from './Modal.module.css';

function Modal({ closeModal }) {
    return (
      <div className={style.Modal}>
        <div className={style.modalContainer}>
          <div className={style.titleFlex}>
            <h2>Jonathan Spencer</h2>
            <div className={style.closeButton}>
              <button onClick={() => closeModal(false)}>
                  X
              </button>
            </div>
          </div>
            <h3>INTRODUCTION</h3>
            <p>I am a pro-active and results-oriented senior product manager, with over 5 years experience developing innovative and complex software products in both start-up and large corporate environments. I have several years experience facilitating cross-functional teams to design & deliver highly visible software releases at Tier 1 Banks, and currently lead a digital innovation team.
              With a passion for the application of new technologies, I seek to test the implications of new ideas, challenging myself and my team to generate innovative hypotheses to create new digital experiences that deliver maximum impact.
            </p>
            <h3>EXPERIENCE</h3>
            <h5>DIGITAL PRODUCT MANAGER | Nationwide Building Society</h5>
            <p className={style.date}>Nov 19 - Present</p>
            <p>
              I am a Product Manager in Nationwide’s Future Ventures team, with a focus upon researching and developing customer value propositions that utilise new technologies.
              As part of my role, I work alongside a team of data scientists, UX researchers and engineers to build rapid proof of concepts and test these with potential users. We then work closely with business stakeholders to define the value proposition and present new opportunities to the senior leadership. In my role to date we have developed proof of concepts utilising blockchain, image recognition, natural language generation and OpenBanking.
            </p>
            <h5>DIGITAL PRODUCT MANAGER | HSBC</h5>
            <p className={style.date}>Feb 19 - Nov 19</p>
            <p>
              I was the Product Manager for a cloud based Global Digital Identity service, designed to orchestrate the integration of multiple third party suppliers to provide biometric authentication and ID validation capabilities, across 38 Global Markets, to the Retail Banking & Wealth Management business of HSBC.
              Working closely with an agile team split between the UK, Poland and Hong Kong, I engaged with multiple senior global stakeholders to define the business case and agree key product success metrics to measure the performance of the solution in reducing the volume of manual identity referrals.
              I drove an API first design approach to the service by managing service APIs through a lifecycle of design & collaboration with service consumers and defined the products feature roadmap through frequent workshops and market research.
            </p>
            <h5>DIGITAL CONSULTANT | CAPCO</h5>
            <p className={style.date}>Oct 15 - Oct 18</p>
            <p>
              I was fortunate to be involved in multiple digital projects including a startup business bank and the Open-banking Fintech competition in partnership with Nesta and the CMA, however my most notable roles were:
            </p>
            <p>HSBC - Group Executive MI Dashboard - Product Manager</p>
            <p>Responsible for the design & delivery of a management information dashboard that allowed Group level executives the ability to navigate through the portfolio to view financial, project and resource information; to drive insightful decision making across a multi-billion dollar portfolio. I agreed and reinforced agile principles across two cross-functional teams to continuously refine and prioritise product features, as well as implementing incremental improvements to our way of working.</p>
            <p>HSBC - PPM Data Remediation - Scrum Master</p>
            <p>
              Initiative to consolidate internal project & portfolio management data across multiple source systems into a centralised data transformation, storage and clean room and allow financial reporting to more accurately account for spend across the Group IT portfolio. I took the role of scrum master in a cross-functional team split between UK and India, facilitating the team to organise scrum rituals, report delivery timelines and drive development velocity.
            </p>
            <h5>FOUNDER - CEO | TIPSTA</h5>
            <p className={style.date}>SEP 15 - FEB 18</p>
            <p>
              I founded a tech-startup that allowed restaurant customers to pay a tip directly to
              restaurant staff and share tips amongst their colleagues. I recruited a team, defined the product vision, detailed wireframes and user journeys and organised weekend development sessions/sprints. We successfully launched our mobile app to the iOS Appstore in early 2017.
              I was responsible for; building and leading the team from ideation through to launch, defining the business proposition and anything else required to enable us to launch.
            </p>
            
        </div>
      </div>
    );
  }

export default Modal;
