// DEPENDENCIES
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Header from "./components/Header";
import {
    Container,
    Image,
    Content,
    Body,
    Buttons,
    Link
} from "./styles"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// ASSETS
import ccvLogo from "./assets/ccv-logo.png";
import ccvImage from "./assets/ccv-image.jpg";
import tnpLogo from "./assets/tnp-logo.png";
import tnpImage from "./assets/tnp-image.jpeg";
import rchLogo from "./assets/rch-logo.png";
import rchImage from "./assets/rch-image.jpeg";

const data = [
    {
        logo: ccvLogo,
        name: "Chosen Children Village",
        mission: "Our mission is to provide a permanent, loving, nurturing and rehabilitative home for abandoned, neglected, and surrendered children with physical and mental challenges.",
        image: ccvImage,
        description: "Established in 1988, Chosen Children Village Foundation, Inc. is a non-profit, non-government organization based in Silang, Cavite. Almost 300 children have been welcomed through the village gates since its inception. Many have found new families through our adoption program, whilst some have returned home to our Father above. Today, there are 74 special angels residing in several cottages scattered throughout the 2-hectare residential area.<br /><br />Aside from the Residential Program, CCV has created other services to help the children reach their potential and improve their quality of life. First is The School for Chosen Children, which aims to nurture and prepare children for employment through basic education and vocational skills training. The children who have finished their programs found gainful employment as junior staff in the village.<br /><br />Another successful program is the Arantza Rehabilitation Department. Staffed by board-certified physical and occupational therapists, our rehab team's main goal is to aid the physical, cognitive and social development of the children.<br /><br />And last, but not least, is Javier Nutrition Center (JNC). This department ensures that the special dietary needs of each child are fulfilled daily for optimal health. It also serves as a training ground for children interested in the culinary arts. Dave Mendoza, one of the children who grew up in the village, is now a full-time staff at JNC and currently attends Atlas Culinary School in Dasmarinas, Cavite for further training.",
        website: "https://chosenchildrenfoundation.com",
        brochure: "https://drive.google.com/file/d/133qdtnFqJxsFVYVdLUG12NSeaSFTsLog/view?usp=sharing",
        donation: "https://drive.google.com/file/d/1RIEKNQju3WEVS9jJR6bm_m1Po-uQqZUk/view?usp=sharing",
        slug: "chosen-children-village",
    },
    {
        logo: tnpLogo,
        name: "Tahanan ng Pagmamahal",
        mission: "Our main goal is to provide a safe and secured family environment to the children to help them attain holistic life by providing shelter, spiritual formation, psycho-social and socio-cultural services.",
        image: tnpImage,
        description: "Tahanan ng Pagmamahal Children's Home, Inc. has 14 years of track record and was founded by the couple, Reylindo and Myrna Ortega in December 2007. Together with their friends, they were moved by the depressing situation of abandoned, neglected, foundling or surrendered children. It started by just feeding the children and stayed in rented apartments to house the beneficiaries due to financial constraints. In 2014, one committed supporter donated the lot where Tahanan is now permanently located at 45 Dr. Pilapil Street, Brgy. Sagad, Pasig City.<br /><br />​Since 2007, Tahanan has sheltered a total of 158 children. Out of 158 children, 48 older children were transferred to other shelters for them to be with other older children for appropriate intervention and maturity. As of September 6, 2021 Tahanan ​is catering to 39 children (Babies - 9, Toddlers - 11, Older Children - 19).<br /><br />Tahanan provides the following services to the children: Medical & Health Services, Educational Assistance, Family Reunification, Facilitate Adoption, and Basic Needs of the children (food, clothing, care, safety and protection).<br /><br />Tahanan generates its own funds through donations from individuals, corporate or other organizations. It is not receiving any funds from the government.",
        website: "https://facebook.com/tahananpch/",
        brochure: "https://drive.google.com/file/d/1-9IGcldvfrzNrsOa-FG24SPV5wsfpvST/view?usp=sharing",
        donation: "https://drive.google.com/file/d/17uJ58SMck4LuSnLCL5xhsTsk2_yJs4-l/view?usp=sharing",
        slug: "tahanan-ng-pagmamahal",
    },
    {
        logo: rchLogo,
        name: "Rehoboth Children’s Home",
        mission: "Our mission is to promote the wholesome development of Filipino disadvantaged children, youth, and families by providing appropriate services to become responsible and productive citizens.",
        image: rchImage,
        description: "Rehoboth Children’s Home, Inc. is a non-stock, non-profit, non-government charitable institution duly registered with SEC and DSWD. We are registered and licensed to operate by DSWD and our programs are accredited with them. We started as a residential care facility for abandoned, neglected, orphaned or other forms of disadvantaged children in the community.<br /><br />To reach out to more children in need in the community who have caring families, we launched the Educational Assistance Program which we now called the Rehoboth Educational Assistance Program (REAP). We also reach out to the families of our beneficiaries here to equip them with more life skills and assist them in other special needs.<br /><br />Recently, we pioneered the Independent Living Program where older residents in the residential facility who does not have family to go back or can’t go back to their families will be trained to live independently.<br /><br />Our operation started very small in 1981 as a residential care facility and it is our pride to continue providing service to this very day despite of limited budget. Our organization is also accredited by the LGU both in the municipal (Camiling) and provincial level (Tarlac). Rehoboth is an active partner of DSWD, the LGUs of Tarlac as well as the provincial government in the delivery of social services.",
        website: "https://rehobothchildrenshomeinc.ph/",
        brochure: "https://drive.google.com/file/d/1ObOgnvOKfBDWMqjP-OtBp4K3k3I_1tYf/view?usp=sharing",
        donation: "https://rehobothchildrenshomeinc.ph/get-involved/",
        slug: "rehoboth-childrens-home",
    },
]

const Record = () => {
    let { name } = useParams();
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        data.map((partner) => {
            if (name && (partner.slug === name)) {
                setSelectedData(partner);
            }
            return true;
        })
    }, [name])

    return (
        <Layout>
            <Container>
                {
                    selectedData && selectedData
                    ?
                        <>
                            <Header 
                                logo={selectedData.logo}
                                name={selectedData.name}
                                description={selectedData.mission}
                            />
                            <Image style={{ backgroundImage: `url(${selectedData.image})` }} />
                            <Content>
                                <Body dangerouslySetInnerHTML={{ __html: selectedData.description }} />
                                <Buttons>
                                    <Link href={selectedData.website} target="_blank" rel="noreferrer">
                                        <Button style="primary" label="Website" className="full__width" />
                                    </Link>
                                    <Link href={selectedData.brochure} target="_blank" rel="noreferrer">
                                        <Button style="primary" label="See our Brochure" className="full__width" />
                                    </Link>
                                    <Link href={selectedData.donation} target="_blank" rel="noreferrer">
                                        <Button style="secondary" label="Donate" className="full__width" />
                                    </Link>
                                </Buttons>
                            </Content>
                        </>
                    :
                        <Loader type="ThreeDots"
                            color="EE446A"
                            height={100}
                            width={100}
                            timeout={3000}
                        /> 
                }
            </Container>
        </Layout>
    )
}

export default Record;