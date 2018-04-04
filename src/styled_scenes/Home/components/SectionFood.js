import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Carousel from "../../../shared_components/Carousel";
import LocationCart from "../../../shared_components/Carts/Location";

import {
  PageWrapper,
  SectionWrap,
  SectionHeader,
  SectionContent,
  More
} from "../../../shared_components/layout/Page";

export default function HomeSectionFood({ foods }) {
  return (
    <PageWrapper>
      <SectionWrap>
        <SectionHeader>
          <h3>Delicious food</h3>
          <More>
            <Link to="/results?type=food">All foods</Link>
          </More>
        </SectionHeader>
        <SectionContent>
          <Carousel show="4" length={foods.length} shadowInside>
            {foods.map(item => (
              <LocationCart
                item={item}
                withShadow
                key={item.title}
                xsBasis="100%"
                smBasis="50%"
                mdBasis="25%"
              />
            ))}
          </Carousel>
        </SectionContent>
      </SectionWrap>
    </PageWrapper>
  );
}

HomeSectionFood.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object)
};
