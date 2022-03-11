import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../utils/css/screen.css";
import "../utils/normalize.css";

const clients = [
  {
    name: "bayer",
    img: "bayer-logo.png"
  },
  {
    name: "novartis",
    img: "novartis-logo.png"
  },
  {
    name: "roche",
    img: "roche-logo.png"
  },
  {
    name: "pfizer",
    img: "pfizer-logo.png"
  },
  {
    name: "gsk",
    img: "gsk-logo.png"
  },
  {
    name: "merck",
    img: "merck-logo.png"
  },
  {
    name: "moderna",
    img: "moderna-logo.png"
  },
  {
    name: "sanofi",
    img: "sanofi-logo.png"
  },
  {
    name: "j&j",
    img: "j&j-logo.png"
  }
];

const clientImages = clients.map((client, i) => {
  return (
    <div class="grid-item" key={i}>
      <img
        className="client-logo-img"
        src={require(`./../../content/assets/client-logos/${client.img}`)}
        alt={client.name}
      ></img>
    </div>
  );
});

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="About Us" keywords={[`blog`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Company Profile</h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <p>
            Medwork is a Contract Research Organization located in Athens which
            provides a wide range of specialized services to the pharmaceutical
            and medical device industries, including Pharmacovigilance,
            Materiovigilance, Cosmetovigilance and Quality Assurance services.
            Founded in 2005, Medwork has steadily evolved into a leading
            Vigilance provider in Europe, combining excellent knowledge of the
            pharmaceutical environment with a deep understanding of European
            pharmaceutical quality standards. Our services can be adapted to
            suit the size and scope of the project, as each project receives the
            same level of attention to detail and commitment in order to ensure
            the delivery of a high-quality outcome, within budget and within the
            agreed timescale. Our team consists of highly-qualified senior
            personnel with deep expertise in the field, as well as young,
            motivated associates who help us achieve our ambitions by assisting
            our clients to accomplish their goals, through understanding their
            challenges and providing targeted and effective services. Our
            relationships with our clients are enduring and are based on a
            thorough knowledge of their business; they are honoured by trust
            that is demonstrated in contracts that are continuously renewed year
            after year.
          </p>

          <h5>Company Policies</h5>
          <p>
            We strongly believe that commitment to confidentiality, meticulous
            observance of legislation and ethical behaviour, foster and
            guarantee good, fair and trustful cooperation both within the
            company and with all business partners. We have documented this
            conviction in our Code of Conduct, Information Security Policy, Data
            Privacy Policy and Quality Policy.
          </p>

          <h5>Our Clients</h5>
          <div class="grid-container">{clientImages}</div>

          <h5>Senior Management Team</h5>
          <Tabs>
            <TabList>
              <Tab>Scientific Director</Tab>
              <Tab>Administration Director</Tab>
              <Tab>Pharmacovigilance Manager</Tab>
              <Tab>Quality Services Manager</Tab>
            </TabList>

            <TabPanel>
              <i>
                <a
                  href="https://www.linkedin.com/in/nicolas-tsiakkas-026b2613/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nicolas Tsiakkas, M.D.
                </a>
              </i>{" "}
              has been an active member of the pharmaceutical industry for over
              30 years, gaining deep knowledge and expertise across a wide range
              of pharmacovigilance, clinical development and quality assurance
              activities. Following his qualification as a physician at the
              Medical School of Wuerzburg in Germany and his specialization in
              ophthalmology, he started his career in 1989 with Schering-Plough,
              Greece, holding the position of Medical Director. He then moved to
              Rhone-Poulenc Rorer as the Regional Medical Director and
              Pharmacovigilance Manager, being responsible for the company's
              research programme from Phase II through to Phase IV studies in
              Greece, Bulgaria, Romania and Serbia. Following the merger of
              Rhone-Poulenc Rorer with Hoechst-Marion-Roussel, he served as a
              Medical Director and Pharmacovigilance Manager with Aventis
              Pharma, Greece, between 2000 and 2005. In 2005, he founded
              Medwork, which, under his leadership, has grown from a company
              focusing primarily on clinical research to a leading Vigilance
              service provider in Europe. Nicolas is the Head of the
              Pharmacovigilance Working Group of the European CRO Federation
              (EUCROF). Since 2019, he is also a member of the organizing
              committee for the DIA EU-QPPV annual meetings.
            </TabPanel>
            <TabPanel>
              <i>Eleni Voidou</i> has over 16 years successful experience in
              management within the healthcare industry. After earning a degree
              in Physics from the University of Thessaloniki, she went on to
              obtain a Master's Degree in Biomedical Engineering at Imperial
              College, London. She then spent 11 years in the medical device
              industry, serving in both operational and management roles. In
              2009 Eleni joined Medwork, assuming the position of Administration
              Director. Her responsibilities, besides administrative functions
              within the company, include business development and interaction
              with clients.
            </TabPanel>
            <TabPanel>
              <i>Katerina Paschou</i> graduated from the National and
              Kapodistrian University of Athens with a bachelor's degree in
              Dentistry (DDS). She practiced Dentistry for two years and in 2009
              she joined Medwork, taking up the position of Pharmacovigilance
              Assistant. Since then, Katerina has been gradually taking
              responsibility for a variety of complex and difficult tasks, among
              which have been assuming the roles of EU Qualified Person for
              Pharmacovigilance (QPPV) and Local Pharmacovigilance Contact
              Person. She has also served as a substitute Drug Safety Manager at
              Roche Hellas for a period of six months in 2011. Katerina
              progressively assumed further responsibilities and became the
              Pharmacovigilance Manager of Medwork in 2012, coordinating a
              department of 26 pharmacovigilance professionals. Her extensive
              knowledge of pharmacovigilance and her personal commitment to
              quality makes her an invaluable member of Medwork's team.
            </TabPanel>
            <TabPanel>
              <i>Fotoula Dragatsi</i> has more than 18 years pharmaceutical
              industry experience. She started her career in 1995 as a Sales
              Representative at Boehringer Ingelheim, Greece, and, one year
              later, moved to Rhone-Poulenc Rorer/Aventis as a Clinical Research
              Associate. Fotoula progressively assumed management
              responsibilities in a wide range of activity areas, including
              clinical trial regulatory clearance, investigative product
              management, training and SOP development. Following the creation
              of Sanofi-Aventis in 2005, Fotoula assumed further
              responsibilities including the roles of SOP & Training Ambassador,
              Clinical Trial Application Manager and Investigational Product
              Manager. In 2011, Fotoula joined Medwork as Quality Services
              Manager and in this capacity she is responsible for the
              organization, provision and management of all aspects of quality
              management services. In addition to her deep knowledge of and
              experience in quality assurance and the training she received in
              her specialist field, Fotoula has also been trained as an
              auditor/lead auditor as per ISO 9001 and has successfully
              conducted numerous GCP, GDP and quality system audits.
            </TabPanel>
          </Tabs>
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
