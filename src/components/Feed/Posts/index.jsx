import {
    PostContainer, PostImage, PostTopAuthorIconAndNameContainer,
    PostTopAuthorName,
    PostTopButton, PostTopButtonIcon,
    PostTopContainer,
    PostTopIcon,
    PostTopIconButton
} from "./styles";
import avatar from '../../images/daxa.jpg'
import postImage from '../../images/postImage.jpg'

import {PostTopButtonIconSvg} from "../../images/icons";


export const Post = () =>{
    return <PostContainer>
        <PostTopContainer>

            <PostTopAuthorIconAndNameContainer>
            <PostTopIconButton><PostTopIcon src = {avatar}/></PostTopIconButton>
            <PostTopAuthorName>qqqqqqqqqqq</PostTopAuthorName>
            </PostTopAuthorIconAndNameContainer>

            <PostTopButton><PostTopButtonIconSvg/></PostTopButton>
        </PostTopContainer>
        <PostImage src = {postImage}/>
    </PostContainer>
}