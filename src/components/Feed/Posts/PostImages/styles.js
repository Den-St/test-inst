import styled, {css} from "styled-components";

const buttonCss = css`
  position: absolute;
  top: 40px;
  font-size: 0px;
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.88);
  }

  color: transparent;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &::before {
    content: '>';
    color: #100f0f;
    font-size: 24px;
    display: block;
    margin-top: -4px;
    margin-left: 2px;
  }

  &.slick-disabled{
    display: none !important;
  }
  z-index: 90;
  opacity: 1;
`;


export const SliderWrapper = styled.div`
  max-height: 1000px;
  width: 100%;
  display: flex;
  position: relative;

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

  & .slick-list {
    width: 100%;
    width: 600px;
    display: flex;
  }

  & .slick-slide {
    display: flex;
  }

  & .slick-prev {
    position: absolute;
    left: 0;
    top: 40px;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }
  }
;

  & .slick-next{
    ${buttonCss};
    background-color: white;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  & .slick-prev {
   ${buttonCss};
    background-color: white;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    &::before {
      content: '<';
    }
  }
;

  & .slick-dots {
    display: flex !important;
    justify-content: center;
    position: absolute;
    left: 50%;
    margin-top: 10px;
    transform: translate(-50%);


    button {
      opacity: 0;
      pointer-events: none;
    }

    & > li {
      color: #cbd4e5;

      &::marker {
        font-size: 24px;
      }
    }

    .slick-active {
      color: #568ef6;
    }
  }
`;