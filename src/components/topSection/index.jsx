import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
`;

const Logo = styled.h1`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 35px;
`

const Slogan = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 1rem;
`;

export function TopSection() {
    return (
        <TopSectionContainer>
            <Logo>BlockChain Donation</Logo>
            <Slogan>Make the World Better Place</Slogan>
        </TopSectionContainer>
    );
};