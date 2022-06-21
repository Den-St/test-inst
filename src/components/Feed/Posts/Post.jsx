import {
    AddCommentContainer, AddCommentWrapper, CommentInput,
    PostAuthor,
    PostBottomContainer,
    PostButton,
    PostButtonMenu, PostCheckComments,
    PostContainer, PostDays,
    PostDescription,
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
import {PostImages} from "./PostImages";


export const Post = (props) =>{
    const {avatar, name, numberOfLikes, text, numberOfComments, days} = props
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

        <PostImages/>

        <PostBottomContainer>
           <PostActions/>
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

export const PostActions = () =>{
    const [liked, setLiked] = useState(false);
    const toggleLike =  () => setLiked(prevState => !prevState);
    return  <PostButtonMenu>
        <PostButton onClick={toggleLike} $isLiked = {liked}><FavoriteIcon/></PostButton>
        <PostButton><FavoriteIcon/></PostButton>
        <PostButton><FavoriteIcon/></PostButton>

        <StoredButton><FavoriteIcon/></StoredButton>

    </PostButtonMenu>
}