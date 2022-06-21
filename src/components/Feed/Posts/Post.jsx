import {
    AddCommentContainer, AddCommentWrapper, CommentInput,
    PostAuthor,
    PostBottomContainer,
    PostButton,
    PostButtonMenu, PostCheckComments,
    PostContainer, PostDays,
    PostDescription,
    PostImage,
    PostInfoContainer,
    PostLikes,
    PostTopAuthorIconAndNameContainer,
    PostTopAuthorName,
    PostTopButton,
    PostTopContainer,
    PostTopIcon,
    PostTopIconButton, PublishButton, SmileButton,
    StoredButton
} from "./styles";
import {FavoriteIcon, PostTopButtonIconSvg} from "../../images/icons";
import {useState} from "react";
import {TextExpand} from "../../common/TextExpand";


export const Post = (props) =>{
    const {avatar, name, postPicture, numberOfLikes, text, numberOfComments, days} = props
    const [commentValue, setCommentValue] = useState();
    const onInputComment = (e) => {
        setCommentValue(e.target.value)
    }
    return <PostContainer>
        <PostTopContainer>

            <PostTopAuthorIconAndNameContainer>
            <PostTopIconButton><PostTopIcon src = {avatar}/></PostTopIconButton>
            <PostTopAuthorName>{name}</PostTopAuthorName>
            </PostTopAuthorIconAndNameContainer>

            <PostTopButton><PostTopButtonIconSvg/></PostTopButton>
        </PostTopContainer>

        <PostImage src = {postPicture}/>

        <PostBottomContainer>
            <PostButtonMenu>
                <PostButton><FavoriteIcon/></PostButton>
                <PostButton><FavoriteIcon/></PostButton>
                <PostButton><FavoriteIcon/></PostButton>

                <StoredButton><FavoriteIcon/></StoredButton>

            </PostButtonMenu>

            <PostInfoContainer>
                <PostLikes>{numberOfLikes} отметок "Нравится"</PostLikes>
                <PostAuthor href = 'https://www.instagram.com/larsulrich/'>metalhead_community</PostAuthor>

                <PostDescription> <TextExpand text={text} maxLetters={50}/>
                    </PostDescription>

                <PostCheckComments>Посмотреть все комментарии ({numberOfComments})</PostCheckComments>
                <PostDays>{days} ДНЕЙ НАЗАД</PostDays>
            </PostInfoContainer>

            <AddCommentContainer>
                <AddCommentWrapper >
                <SmileButton><FavoriteIcon/></SmileButton>
                <CommentInput value={commentValue} onChange={onInputComment}/>
                <PublishButton $value={commentValue} disabled={!commentValue}>Опубликовать</PublishButton>
                </AddCommentWrapper>
            </AddCommentContainer>
        </PostBottomContainer>
    </PostContainer>
}