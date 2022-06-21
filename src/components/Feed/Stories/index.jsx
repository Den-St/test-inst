import React from "react";
import {SliderWrapper, StoriesContainer, StoriesWrapper, Story, StorySwipeButton} from "./styles";
import avatar from '../../images/daxa.jpg'
import Slider from "react-slick";

const storyItems = [{
    id: '0',
    icon : avatar,
    text : 'daxao'
},{
    id : '1',
    icon : avatar,
    text : 'daxao'
},{
    id : '2',
    icon : avatar,
    text : 'daxao'
},{
    id : '3',
    icon : avatar,
    text : 'daxao'
},{
    id : '4',
    icon : avatar,
    text : 'daxao'
},{
    id : '5',
    icon : avatar,
    text : 'daxao'
},{
    id : '6',
    icon : avatar,
    text : 'daxao'
},{
    id: '7',
    icon : avatar,
    text : 'daxao'
},{
    id : '8',
    icon : avatar,
    text : 'daxao'
},{
    id : '9',
    icon : avatar,
    text : 'daxao'
},{
    id : '10',
    icon : avatar,
    text : 'daxao'
},{
    id : '11',
    icon : avatar,
    text : 'daxao'
},{
    id : '12',
    icon : avatar,
    text : 'daxao'
},{
    id : '13',
    icon : avatar,
    text : 'daxao'
}]

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const Stories = () =>{
    return <StoriesContainer>
        <StoriesWrapper>
            <StorySwipeButton/>
            <SliderWrapper>
            <Slider {...settings}>
                {storyItems.map((el, index) => <Story key = {index}><img alt = "daxao" src = {el.icon}/> <span>{el.text}</span> </Story>)}
            </Slider>
            </SliderWrapper>
            <StorySwipeButton/>
        </StoriesWrapper>
        </StoriesContainer>
}