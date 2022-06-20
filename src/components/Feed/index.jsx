import React from "react";
import {FeedWrapper} from "./styles";
import {SideFeed} from "./SideFeed";
import {MainFeed} from "./MainFeed";

export const Feed = () =>{
    return <FeedWrapper>
    <MainFeed/>
    <SideFeed/>
    </FeedWrapper>
}