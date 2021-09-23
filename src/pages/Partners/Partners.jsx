// DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import {
    Container,
    Title,
    Images,
    Wrapper,
    Image,
    Name
} from "./styles";

import ccv from "./assets/ccv.png";
import tnp from "./assets/tnp.png";
import rch from "./assets/rch.png";

const partners = [
    {
        name: "Chosen Children Village",
        image: ccv,
        link: "/partners/chosen-children-village"
    },
    {
        name: "Tahanan ng Pagmamahal",
        image: tnp,
        link: "/partners/tahanan-ng-pagmamahal"
    },
    {
        name: "Rehoboth Children’s Home",
        image: rch,
        link: "/partners/rehoboth-childrens-home"
    },
]

const Partners = () => (
    <Layout>
        <Hero 
            backgroundColor="#FFF1F4"
            title="A Virtual Gateway to CCIs"
            description="Child Caring Institutions (CCIs) in the Philippines"
        />
        <Container>
            <Title id="all">Our Partners</Title>
            <Images>
                {
                    partners.map((partner) => (
                        <Link to={partner.link}>
                            <Wrapper>
                                <Image src={partner.image} alt={partner.name} className={partner.name === "Chosen Children Village" ? `ccv` : ``} />
                                <Name>{partner.name}</Name>
                            </Wrapper>
                        </Link>
                    ))
                }
            </Images>
        </Container>
    </Layout>
)

export default Partners;