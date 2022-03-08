import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const pharmacovigilance = {
    title: "Pharmacovigilance",
    rows: [
      {
        title: "Full pharmacovigilance Support",
        content: <div>
          Medwork's dedicated professionals will ensure full compliance of Marketing Authorization Holders with their regulatory obligations. We provide full pharmacovigilance coverage as well as tailored services that cover specific needs. Our services include:
          <br />
          <b>Full Post-Marketing Pharmacovigilance Support:</b>
          <br />
          <ul>
            <li>Establishment of a pharmacovigilance System</li>
            <li>Undertaking EU QPPV/deputy EU QPPV responsibility</li>
            <li>Local & global literature review</li>
            <li>Compilation and maintenance of the PSMF</li>
            <li>Safety information processing</li>
            <li>Writing and/or reviewing periodic reports</li>
            <li>Writing RMPs</li>
            <li>Interaction with Eudravigilance database including XEVMPD</li>
            <li>DHPC management</li>
            <li>Pharmacovigilance personnel back-up</li>
            <li>Training of pharmacovigilance and non-pharmacovigilance personnel</li>
            <li>Consulting</li>
          </ul>
          <br />
          <b>Clinical Trials Pharmacovigilance Support:</b>
          <br />
          <ul>
            <li>Provision of Responsible Person for pharmacovigilance (RP) for clinical trials</li>
            <li>Eudravigilance registration</li>
            <li>Assessment and medical review of serious adverse events</li>
            <li>SUSAR reporting to Eudravigilance and Competent Authorities</li>
            <li>Ongoing risk/benefit assessment of the IMP</li>
            <li>Compilation and update of the DSUR</li>
          </ul>
        </div>,
      },
      {
        title: "Local literature review for Greece & Cyprus",
        content: <div>
          Medwork operates a comprehensive medical literature monitoring service for Greece and Cyprus.We identify and report to contracted Marketing Authorization Holders safety information that qualifies for ICSR reporting, ongoing product risk- benefit evaluation and PSUR preparation.

          <ul>
            <li>GREECE: The local Medical Literature Monitoring(service) for Greece includes the review of over 94 Greek medical journals, as well as the published proceedings of local medical conferences.The service is currently provided to a total of 72 companies[Dec 2021 data], ranging from small Greek and European companies to local affiliates of international pharmaceutical companies(including eight of the top 10 global pharmaceutical companies).</li>
            <li>CYPRUS: The local Medical Literature Monitoring(service) includes the review of 2 Cypriot medical journals as well as published proceedings of local medical conferences.There are currently active contracts with a total of 30 pharmaceutical companies [Dec 2021 data], mainly European and local affiliates of international pharmaceutical companies.</li>
          </ul>
        </div>,
      },
      {
        title: "Local QP for Greece & Cyprus",
        content: <div>
          Greece and Cyprus are among the EU countries that <b>require the appointment of a local Qualified Person for pharmacovigilance</b>, as per the article 104 of Directive 2010/84/EU: “national competent authorities may request the nomination of a contact person for pharmacovigilance issues at national level reporting to the qualified person responsible for pharmacovigilance activities.”
          Medwork has dedicated, properly qualified, local staff in both countries, who can assume the role and responsibilities of the local QP for pharmacovigilance as well as her/his deputy. Further local pharmacovigilance services include:

          <ul>
            <li>Handling of safety information as per relevant local regulations</li>
            <li>Medical information handling</li>
            <li>Handling of technical complaints about products</li>
            <li>Regulatory intelligence-monitoring of local legislation governing pharmacovigilance, medical information and PTC handling and informing contracted MAHs</li>
          </ul>
        </div>,
      },
      {
        title: "Consultancy & Training",
        content: <div>
          <b>Consultancy services</b>
          <br />
          Medwork <b>consults</b> Marketing Authorization Holders on all aspects of pharmacovigilance obligations, such as:
          <br />
          Establishment of a suitable and adequate pharmacovigilance system
          Management of safety agreements
          Handling of risk management plans
          Setting up of a suitable risk-benefit evaluation process
          Establishment of the appropriate quality structure to support the pharmacovigilance system
          Special local pharmacovigilance obligations in Greece & Cyprus
          <br />
          <br />
          <b>Training services</b>
          <br />
          Medwork offers complete <b>training solutions</b>, aimed at educating your staff, improving sustainability practices and productivity, as well as optimizing your operational efficiency.
          <br />
          Each course is delivered by senior practitioners and structured to provide a tangible return on investment.
          <br />
          Tailored to your specific needs and designed for all skill levels, training can take several forms, including, among others, short courses, long-term structured programmes, group sessions and individual coaching.
        </div>,
      },
      {
        title: "Pharmacovigilance Auditing",
        content: <div>
          Medwork’s auditing process is similar to the approach taken by the EU Competent Authorities. We offer a very well-structured, low-budget pharmacovigilance audit programme in compliance with EU legislation. We perform pharmacovigilance system audits of main functions, affiliates and contractual partners.
          <br />
          <br />
          We can <b>support</b> and <b>coach</b> Marketing Authorization Holders before and after regulatory inspections. We perform mock inspections to ensure adequacy and compliance of pharmacovigilance systems.
        </div>,
      },
    ],
  };

  const styles = {
    bgColor: 'none',
    rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Services
          </h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <p>
            Our services include Pharmacovigilance, Quality Management and Materiovigilance. With more than 17 years of experience Medwork is
            the leader, with a proven record and a trusted name.
          </p>

          <Faq
            data={pharmacovigilance}
            styles={styles}
            config={config}
          />

          <h5>
            Company Policies
          </h5>
          <p>
            We strongly believe that commitment to confidentiality, meticulous observance of legislation and ethical behaviour, foster and guarantee good, fair and trustful cooperation both within the company and with all business partners.
            We have documented this conviction in our Code of Conduct, Information Security Policy, Data Privacy Policy and Quality Policy.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
