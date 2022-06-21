import {PostImage} from "../styles";
import {SliderWrapper} from './styles'
import Slider from "react-slick";
import pictureSrc from '../../../images/postImage.jpg';

export const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
};

const pictures = [
    {src: pictureSrc},{src: pictureSrc},{src: pictureSrc},{src: pictureSrc},{src: pictureSrc},{src: pictureSrc},{src: pictureSrc},{src: pictureSrc}
]
export const PostImages = () => {
    return <SliderWrapper>
        <Slider {...settings}>
            {pictures.map((el,index)=><PostImage src = {el.src} key = {index} />)}
        </Slider>
    </SliderWrapper>
}