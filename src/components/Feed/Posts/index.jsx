import React from "react";
import {PostsContainer} from "./styles";
import {Post} from "./Post";
import daxak from '../../images/daxa.jpg';
import postImage from '../../images/postImage.jpg';

const posts = [
    {id: 0,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },
    {id: 1,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 2,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
                text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 3,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "#wanna",
        numberOfComments: 100,
        days: 5
    },{id: 4,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "#MetAtFirenzeRocks",
        numberOfComments: 100,
        days: 5
    },{id: 5,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "@firenze_rocks",
        numberOfComments: 100,
        days: 5
    },{id: 6,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
                text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 7,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
                text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 8,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 9,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 10,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 11,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 12,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 13,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 14,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 15,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    },{id: 16,
        avatar: daxak,
        name: 'vasa',
        postPicture: postImage,
        numberOfLikes: 10000000,
        text: "Thank you Florence for rolling out on a crazy hot day and for being crazy cool and way next level engaged in the shenanigans….incredible to be back in Italy once again and shouting and screaming along.",
        numberOfComments: 100,
        days: 5
    }];

export const Posts = () => {
    return <PostsContainer>
        {posts.map((el, i) =>
            <Post avatar={el.avatar} name={el.name} postPicture = {el.postPicture} numberOfLikes={el.numberOfLikes} text = {el.text} numberOfComments={el.numberOfComments} days={el.days} key={i}/>)}
    </PostsContainer>
}