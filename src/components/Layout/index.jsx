import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../Navbar";
import Footer from "../Footer";

import thumbnail from "../../assets/thumbnail.png"

const seo = {
    siteTitle: "Paslit",
    siteDescription: "Paslit is a Filipino youth-led policy advocacy organization for abandoned, neglected, and orphaned children.",
    siteThumbnail: thumbnail
}

const Layout = ({ children }) => (
    <>
        <Helmet
            title={seo.siteTitle}
            titleTemplate={`%s`}
            defaultTitle="Paslit"
            meta={[
                {
                    name: `description`,
                    content: seo.siteDescription,
                },
                {
                    property: `og:title`,
                    content: seo.siteTitle,
                },
                {
                    property: `og:description`,
                    content: seo.siteDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: `Paslit`,
                },
                {
                    name: `twitter:title`,
                    content: seo.siteTitle,
                },
                {
                    name: `twitter:description`,
                    content: seo.siteDescription,
                },
                {
                    name: `og:url`,
                    content: `https://paslit.org/`,
                },
                
                // Once thumbnail is available, import image and use here
                {
                    name: `og:image`,
                    content: seo.siteThumbnail
                },
                {
                    name: `twitter:image`,
                    content: seo.siteThumbnail
                },
                
                // Developers
                {
                    name: `developer`,
                    content: "Joshua Taningco",
                }
            ]}
        />
        <Navbar />
            <main>{children}</main>
        <Footer />
    </>
)

export default Layout;