import styled from "styled-components";
import {PostTopButtonIconSvg} from "../../images/icons";

export const PostContainer = styled.div`
    margin-left: 0px;
    border: 1px solid red;
    height: 720px;
    margin-bottom: 24px;
`;


export const PostTopContainer = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid yellow;
    display: flex;
    justify-content: space-between; 
`;
export const PostTopAuthorIconAndNameContainer = styled.div`
    width: calc(100% - 48px);
    height: 60px;
    border-right:1px solid red ;
    display: flex;
    justify-content:left ;
    align-items: center;
`;
export const PostTopIconButton = styled.button`
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 100%;
    outline: none;
    background-color: transparent;
    margin-left: 7px;
`;
export const PostTopIcon = styled.img`
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 100%;
`;

export const PostTopAuthorName = styled.a`
    background-color: transparent;
    margin-left: 7px;
`;

export const PostTopButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
  &>svg{
    height: 24px;
    width: 24px;
    padding: 8px;
  }
`;



export const PostImage = styled.img`
    max-width: 600px;
    max-height: 767px;
    background-color: aqua;
    object-fit: cover;
`;


export const PostButtonMenu = styled.div``;

export const PostButton = styled.button``;

export const StoredButton = styled.button``;


export const PostInfoContainer = styled.div``;

export const PostLikes = styled.p``;

export const PostAuthor = styled.p``;

export const PostDescription = styled.p``;

export const PostComments = styled.p``;

export const PostDays = styled.p``;


export const CommentContainer = styled.div``;

export const CommentInput = styled.input``;

export const PublishButton = styled.button``;
