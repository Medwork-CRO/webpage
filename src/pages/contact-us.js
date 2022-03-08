import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

import "react-tabs/style/react-tabs.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Contact Us
          </h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <table>
            <tbody>
              <tr>
                <td>Phone</td>
                <td>
                  <a href="tel: 00302109960971">(+30) 210 9960971</a>
                  <br />
                </td>
              </tr>
              <tr>
                <td>Fax</td>
                <td>(+30) 210 9969578</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <a href="mailto: medworkinfo@medwork.gr">
                    medworkinfo@medwork.gr
                  </a>
                </td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>
                  <a href="https://www.linkedin.com/company/medwork/">
                    company/medwork
                  </a>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={1} />
                <td>
                  <u>
                    Greece: phone code <i>30</i>
                  </u>
                  , <u>timezone (GMT+2)</u>
                </td>
              </tr>
            </tfoot>
          </table>
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
