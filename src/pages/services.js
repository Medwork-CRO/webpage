import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

import "react-tabs/style/react-tabs.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const pharmacovigilance = {
    rows: [
      {
        title: "Full pharmacovigilance Support",
        content: (
          <div>
            Medwork's dedicated professionals will ensure full compliance of
            Marketing Authorization Holders with their regulatory obligations.
            We provide full pharmacovigilance coverage as well as tailored
            services that cover specific needs. Our services include:
            <br />
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
              <li>
                Training of pharmacovigilance and non-pharmacovigilance
                personnel
              </li>
              <li>Consulting</li>
            </ul>
            <b>Clinical Trials Pharmacovigilance Support:</b>
            <ul>
              <li>
                Provision of Responsible Person for pharmacovigilance (RP) for
                clinical trials
              </li>
              <li>Eudravigilance registration</li>
              <li>Assessment and medical review of serious adverse events</li>
              <li>
                SUSAR reporting to Eudravigilance and Competent Authorities
              </li>
              <li>Ongoing risk/benefit assessment of the IMP</li>
              <li>Compilation and update of the DSUR</li>
            </ul>
          </div>
        )
      },
      {
        title: "Local literature review for Greece & Cyprus",
        content: (
          <div>
            Medwork operates a comprehensive medical literature monitoring
            service for Greece and Cyprus.We identify and report to contracted
            Marketing Authorization Holders safety information that qualifies
            for ICSR reporting, ongoing product risk- benefit evaluation and
            PSUR preparation.
            <ul>
              <li>
                GREECE: The local Medical Literature Monitoring(service) for
                Greece includes the review of over 94 Greek medical journals, as
                well as the published proceedings of local medical
                conferences.The service is currently provided to a total of 72
                companies[Dec 2021 data], ranging from small Greek and European
                companies to local affiliates of international pharmaceutical
                companies(including eight of the top 10 global pharmaceutical
                companies).
              </li>
              <li>
                CYPRUS: The local Medical Literature Monitoring(service)
                includes the review of 2 Cypriot medical journals as well as
                published proceedings of local medical conferences.There are
                currently active contracts with a total of 30 pharmaceutical
                companies [Dec 2021 data], mainly European and local affiliates
                of international pharmaceutical companies.
              </li>
            </ul>
          </div>
        )
      },
      {
        title: "Local QP for Greece & Cyprus",
        content: (
          <div>
            Greece and Cyprus are among the EU countries that{" "}
            <b>
              require the appointment of a local Qualified Person for
              pharmacovigilance
            </b>
            , as per the article 104 of Directive 2010/84/EU: “national
            competent authorities may request the nomination of a contact person
            for pharmacovigilance issues at national level reporting to the
            qualified person responsible for pharmacovigilance activities.”
            Medwork has dedicated, properly qualified, local staff in both
            countries, who can assume the role and responsibilities of the local
            QP for pharmacovigilance as well as her/his deputy. Further local
            pharmacovigilance services include:
            <ul>
              <li>
                Handling of safety information as per relevant local regulations
              </li>
              <li>Medical information handling</li>
              <li>Handling of technical complaints about products</li>
              <li>
                Regulatory intelligence-monitoring of local legislation
                governing pharmacovigilance, medical information and PTC
                handling and informing contracted MAHs
              </li>
            </ul>
          </div>
        )
      },
      {
        title: "Consultancy & Training",
        content: (
          <div>
            <b>Consultancy services</b>
            <br />
            Medwork <b>consults</b> Marketing Authorization Holders on all
            aspects of pharmacovigilance obligations, such as:
            <br />
            Establishment of a suitable and adequate pharmacovigilance system
            Management of safety agreements Handling of risk management plans
            Setting up of a suitable risk-benefit evaluation process
            Establishment of the appropriate quality structure to support the
            pharmacovigilance system Special local pharmacovigilance obligations
            in Greece & Cyprus
            <br />
            <br />
            <b>Training services</b>
            <br />
            Medwork offers complete <b>training solutions</b>, aimed at
            educating your staff, improving sustainability practices and
            productivity, as well as optimizing your operational efficiency.
            <br />
            Each course is delivered by senior practitioners and structured to
            provide a tangible return on investment.
            <br />
            Tailored to your specific needs and designed for all skill levels,
            training can take several forms, including, among others, short
            courses, long-term structured programmes, group sessions and
            individual coaching.
          </div>
        )
      },
      {
        title: "Pharmacovigilance Auditing",
        content: (
          <div>
            Medwork’s auditing process is similar to the approach taken by the
            EU Competent Authorities. We offer a very well-structured,
            low-budget pharmacovigilance audit programme in compliance with EU
            legislation. We perform pharmacovigilance system audits of main
            functions, affiliates and contractual partners.
            <br />
            <br />
            We can <b>support</b> and <b>coach</b> Marketing Authorization
            Holders before and after regulatory inspections. We perform mock
            inspections to ensure adequacy and compliance of pharmacovigilance
            systems.
          </div>
        )
      }
    ]
  };

  const qualityManagment = {
    rows: [
      {
        title: "Full pharmacovigilance Support",
        content: (
          <div>
            <b>
              Quality management system development / improvement / monitoring
              according to GCP, GVP, GDP and ISO 9001
            </b>
            <br />
            <ul>
              <li>
                Setup and implementation of quality management systems adapted
                to your business needs with standardized processes reflecting
                the particularities of your organization, in compliance with
                legal/regulatory requirements;
              </li>
              <li>
                Review of existing quality management systems for
                compliance/effectiveness/efficiency and suggestion of
                alternative solutions;
              </li>
              <li>
                Reengineering of existing quality management systems to improve
                their compliance, effectiveness and efficiency, and to reduce
                the effort and resources required;
              </li>
              <li>
                Development and review of quality management system documents;
              </li>
              <li>
                Assumption of quality management responsibilities and duties.
              </li>
            </ul>
            <b>Quality management consulting</b>
            <ul>
              <li>
                Identification of improvement areas and development of
                appropriate risk-based action plans
              </li>
              <li>Consulting on individual quality-related issues</li>
              <li>
                Consulting on and/or support for GCP, GVP and GDP
                audits/regulatory inspections (preparation and follow-up)
              </li>
            </ul>
          </div>
        )
      },
      {
        title: "Local literature review for Greece & Cyprus",
        content: (
          <div>
            Medwork is ideally situated in a geographical area with increasing
            need for pharmaceutical quality services. Clinical trials and
            pharmacovigilance systems in Southeast Europe and the Middle East
            need to be audited against the same quality standards as those in
            Northwest Europe. Cooperation with a reliable regional partner can
            contribute to reducing travel and frustration for your staff as well
            as lowering expenses for your organization.
            <br />
            <b>We offer:</b>
            <br />
            GVP audits (system and/or project/activity specific audits)
            <ul>
              <li>Internal audits</li>
              <li>Vendor/external partner audits</li>
            </ul>
          </div>
        )
      }
    ]
  };

  const styles = {
    bgColor: "none",
    rowContentColor: "grey"
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
            Our services include Pharmacovigilance, Quality Management and
            Materiovigilance. With more than 17 years of experience Medwork is
            the leader, with a proven record and a trusted name.
          </p>

          <h5 href="pharmacovigilance">Pharmacovigilance</h5>
          <p>
            Compliance with pharmacovigilance requirements is becoming an
            increasing challenge for pharmaceutical companies worldwide. In this
            very demanding environment, Medwork offers a reliable solution for
            every need related to drug safety. We have an extensive
            Pharmacovigilance Department composed of a team of 21
            pharmacovigilance professionals and four medical advisors. Our
            clients range from small local companies to large international
            corporations. Currently [Dec 2021 data], we have over 117 active
            contracts with more than 77 clients relating to pharmacovigilance
            activities. Our services may be fully customized to cover all of a
            Marketing Authorization Holder’s responsibilities related to drug
            safety.
          </p>
          <Faq data={pharmacovigilance} styles={styles} config={config} />

          <h5 href="qualityManagment">Quality Managment</h5>
          <p>
            Combining an excellent knowledge of the pharmaceutical environment,
            a deep understanding of European and international pharmaceutical
            quality standards and an unwavering commitment to quality, Medwork
            provides tailored and cost-effective quality management services in
            the area of <b>Pharmacovigilance (GVP)</b>. Medwork can assist you
            with:
            <ul>
              <li>
                Building a corporate quality-oriented mind-set by improving your
                personnel’s understanding of quality requirements, and
                communicating and enforcing this message at all levels and
                functions throughout your organization;
              </li>
              <li>
                Integrating quality into your daily working environment by
                building quality into all processes, while maintaining
                flexibility as appropriate to the size and particularities of
                your organization;
              </li>
              <li>
                Ensuring compliance and minimizing regulatory risk by improving
                your responsiveness to a demanding and fast-changing
                environment.
              </li>
            </ul>
          </p>
          <Faq data={qualityManagment} styles={styles} config={config} />

          <h5 href="materiovigilance">Materiovigilance</h5>
          <p>
            The principal purpose of materiovigilance is to improve the
            protection of the health and safety of patients, users and others by
            reducing the likelihood that incidents related to the use of a
            medical device will reoccur.
            <br />
            Medical Devices Directives ensure that adverse incidents are
            evaluated and, where appropriate, information is disseminated in the
            form of a National Competent Authority Report (NCAR) with the
            objective of preventing the repetition of such incidents through the
            adoption of appropriate corrective actions to be taken in the field.
            <br />
            Medwork can provide you with a vigilance reporting system that is
            compliant with MEDDEV 2.12-1 r 6, and develop all the standard
            operating procedures required.
            <br />
            Our services include:
            <ul>
              <li>
                Pre- and post-marketing vigilance services for all classes of
                Medical Devices according to the European guideline MEDDEV
                2.12-1 rev. 5, including:
              </li>
              <li>
                Preparation of customized Standard Operating Procedures (SOPs)
                for a Medical Device Vigilance system and reporting procedures
                for Incidents/Near Incidents;
              </li>
              <li>
                Management of Incidents/Near Incidents: case reception, Quality
                Control Assessment and preparation of narratives;
              </li>
              <li>
                Expedited reporting of Incidents/Near Incidents: preparation and
                submission of Manufacturer Incident Reports and Field Safety
                Notice (FSN) to multiple regulatory authorities where necessary;
              </li>
              <li>
                Periodic Vigilance Reports: complete and submit Periodic
                Summary/Trend Reports to National Competent Authorities.
              </li>
            </ul>
          </p>

          <h5 href="cosmetovigilance">Cosmetovigilance</h5>
          <p>
            Medwork provides a comprehensive and customizable set of services to
            assist cosmetics companies in complying with the regulatory
            directives.
            <br />
            Our services include:
            <ul>
              <li>Establishing a cosmetovigilance system</li>
              <li>Collection and assessment of undesirable events</li>
              <li>
                Handling of Serious Undesirable Effects (SUE), including
                expedited reporting to Competent Authorities
              </li>
              <li>
                Appointment of qualified Medwork personnel as a local contact
                person
              </li>
              <li>
                Training of personnel on cosmetovigilance, as legally required
              </li>
            </ul>
          </p>
        </div>
      </article>
    </Layout>
  );
};

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
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
