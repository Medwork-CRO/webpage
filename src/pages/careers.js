import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CareerPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const settings = {
    arrows: false,
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    lazyLoad: true,
    pauseOnHover: true,
    swipe: false,
    swipeToSlide: false,
    touchMove: false
  };

  const team = [
    {
      firstName: "Nicolas",
      surName: "Tsiakkas",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEir4ovE0CQEQ/profile-displayphoto-shrink_800_800/0/1516519019934?e=1652313600&v=beta&t=rcAxtS6JpnIC9ofBJUyaF4YMHogi4eEh_UB6acqKmbA",
      linkedIn: "nicolas-tsiakkas-026b2613"
    },
    {
      firstName: "Ioannis",
      surName: "Tsiakkas",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEsfXmWCd0adQ/profile-displayphoto-shrink_200_200/0/1644357009913?e=1652313600&v=beta&t=RvIfEbZPMJ-6Pg9W9oQBzqfOUHCEqhhFZlipJ80Io2U",
      linkedIn: "ioannis-t-3365151a2"
    },
    {
      firstName: "Cat",
      surName: "Catikoul",
      img: "http://placekitten.com/g/200/200",
      linkedIn: "cat"
    },
    {
      firstName: "Nicolas",
      surName: "Tsiakkas",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEir4ovE0CQEQ/profile-displayphoto-shrink_800_800/0/1516519019934?e=1652313600&v=beta&t=rcAxtS6JpnIC9ofBJUyaF4YMHogi4eEh_UB6acqKmbA",
      linkedIn: "nicolas-tsiakkas-026b2613"
    },
    {
      firstName: "Ioannis",
      surName: "Tsiakkas",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEsfXmWCd0adQ/profile-displayphoto-shrink_200_200/0/1644357009913?e=1652313600&v=beta&t=RvIfEbZPMJ-6Pg9W9oQBzqfOUHCEqhhFZlipJ80Io2U",
      linkedIn: "ioannis-t-3365151a2"
    },
    {
      firstName: "Cat",
      surName: "Catikoul",
      img: "http://placekitten.com/g/200/200",
      linkedIn: "cat"
    }
  ];

  const employeeProfiles = team.map((employee, i) => {
    return (
      <span id={i}>
        <a href={`https://www.linkedin.com/in/${employee.linkedIn}`}>
          <img className="profile-round" src={employee.img} />
          <span className="profile-text">
            {employee.firstName} {employee.surName}
          </span>
        </a>
      </span>
    );
  });

  return (
    <Layout title={siteTitle}>
      <SEO title="Careers" keywords={[`blog`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Want to join a thriving company ?</h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <p>
            <i>
              100% of our employees have an upward career trajectory. 90% of
              people who started working at us, still do 2 years after and all
              that moved on have solid fundamentals and knowledge to excel in
              their next endeavors.
            </i>
          </p>

          <p>
            Medwork values the depth of experience that professionals add to our
            company and to our projects. Our clients expect the best and we are
            constantly on the lookout for exceptional persons who will take us
            to the next level. We hire driven and creative experienced
            professionals as well as entry-level career-seekers in the fields of
            Medical and Life Sciences.
            <br />
            <br />
            Please feel free to submit an open application including your CV
            along with a cover letter to{" "}
            <a href="mailto: medworkinfo@medwork.gr">medworkinfo@medwork.gr</a>.
          </p>

          <h5>Our Team</h5>

          <Slider className="post-content page-template no-image" {...settings}>
            {employeeProfiles}
          </Slider>
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
      <CareerPage location={props.location} data={data} {...props} />
    )}
  />
);
