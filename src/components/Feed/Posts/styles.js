import styled from "styled-components";
import {PostTopButtonIconSvg} from "../../images/icons";
import {colors} from "../../../palette";

export const PostsContainer = styled.div``;

export const PostContainer = styled.div`
    margin-left: 0px;
    border: 1px solid ${colors.borderGray};
    margin-bottom: 24px;
`;


export const PostTopContainer = styled.div`
    width: 100%;
    height: 60px;
    border: none;
    display: flex;
    justify-content: space-between; 
`;
export const PostTopAuthorIconAndNameContainer = styled.div`
    width: calc(100% - 48px);
    height: 60px;
    border-right:none;
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


export const PostBottomContainer = styled.div``;

export const PostButtonMenu = styled.div`
  position: relative;
  display: flex;
  
  height: 54px;
  
`;

export const PostButton = styled.button`
    background-color: transparent;
  border: none;
  outline: none;
  height: 40px;
  width: 40px;
    &>svg{
      height: 24px;
      width: 24px;
      padding: 8px;
    }
  margin: auto 0px;
  cursor: pointer;
  &:hover{
    transition: 0.05s;
    opacity: 0.4;
  }
`;

export const StoredButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0;
  background-color: transparent;
  border: none;
  outline: none;
  margin: auto 0px;
  cursor: pointer;
  &>svg{
    height: 24px;
    width: 24px;
    padding: 8px;
  }
  &:hover{
    transition: 0.05s;
    opacity: 0.4;
  }
`;


export const PostInfoContainer = styled.div`
  margin-left: 14px;
`;

export const PostLikes = styled.p`
    margin-top: 0px;
`;

export const PostAuthor = styled.a`
    display: inline-block;
  color: black;
  text-decoration: none;
`;

export const PostDescription = styled.p`
  vertical-align: top;
  display: inline;
  max-width: 400px;
  margin: 0px 5px;
`;


export const PostCheckComments = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  display: block;
`;

export const PostDays = styled.p``;


export const AddCommentContainer = styled.div`
    border-top:1px solid ${colors.borderGray}; 
    min-height: 53px;
    box-sizing: border-box;
    display: flex;
  align-items: center;
`;

export const AddCommentWrapper = styled.div`
    height: 40px;
    padding: 6px 16px;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: flex;
`;

export const SmileButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const CommentInput = styled.input`
  width: 447.5px;
  border: none;
  &:focus{
    outline: none;
  }
`;

export const PublishButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  vertical-align: center;
  ${({$value}) =>
    !$value ? `
    color:${colors.lightBlue}
` :`
    color:${colors.darkBlue}
`
  }
`;
