import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['Reservation', 'About', 'Amenities', 'Contact Us', 'FAQ'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase().replace(' ', ''))}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        <NavItem>
          <OutboundLink href="https://app.fireflyreservations.com/reserve?propertyGUID=8b116da5-c2e9-45e4-acc7-e64ab4e5f601">Reservation</OutboundLink>
        </NavItem>
        <NavItem>
          <AnchorLink href="#about">About</AnchorLink>
        </NavItem>
        <NavItem>
          <AnchorLink href="#amenities">Amenities</AnchorLink>
        </NavItem>
        <NavItem>
          <AnchorLink href="#contactus">Contact Us</AnchorLink>
        </NavItem>
        <NavItem>
          <AnchorLink href="#faq">FAQ</AnchorLink>
        </NavItem>
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <StaticQuery
            query={graphql`
              query HeaderQuery {
                parkLogo: file(
                  sourceInstanceName: { eq: "logo" }
                  name: { eq: "HiddenAcreResort" }
                ) {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            `}
            render={data => (
              <Art>
                <Img fluid={data.parkLogo.childImageSharp.fluid} />
              </Art>
            )}
          />
          <Brand>
            <center>
              Hidden Acres 
              {/* RV Campground */}
              <br />
              <p2>
                10364 CR 740
                Princeton, TX
                {/* <br />
                Now Under New Management! */}
              </p2>
            </center>
          </Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

const Art = styled.figure`
  margin: 0;
  max-width: 85px;
  width: 50%;
`;

export default Navbar;
