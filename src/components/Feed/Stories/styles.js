import styled from "styled-components";
import {colors} from "../../../palette";

export const StoriesContainer = styled.div`
  width: 602px;
  height: 119px;
  box-sizing: border-box;
  margin-bottom: 24px;
  padding: 14px;
  position: relative;
`;


export const StoriesWrapper = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
`;

export const StorySwipeButton = styled.div`
    
`;

export const Story = styled.button`
    background-color: transparent;
    border: none;
    width: 66px;
    height: 84px;
    padding: 0px 4px;
    display: block;
    //margin: 0px 16px 0px 0px ;
  
  &>img{
    width: 56px;
    height: 56px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 100%;
    border: 1px solid palevioletred;
    margin-bottom: 0px;
  }
  &>span{
    line-height: 1px;
    font-size: 16px;
    color : ${colors.darkGrayText};
  }
`;

export const SliderWrapper = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  .slick-slider {
   max-width: 100%; 
    overflow: hidden;
  }
  .slick-track {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  & > .slick-list {
    display: flex;
  }
  & .slick-slide {
    display: flex;
  }
  & .slick-dots{
    display: none;
  }
  & .slick-prev {
    position: absolute;
    left: 0;
    top: 40px;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  };
  & .slick-next {
    position: absolute;
    right: 0;
    top: 40px;
    opacity: 0.4;
    
    &:hover {
      opacity: 1;
    }
  };
  & > slick-arrow slick-next{
    
  }
  `;