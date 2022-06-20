import React from "react";
import {MainFeedContainer} from "./styles";
import {Stories} from "../Stories";
import {Post} from "../Posts";

const posts = [1,2,3,4]
export const MainFeed = () =>{
    return <MainFeedContainer>
        <Stories/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </MainFeedContainer>
}