import React from "react";
import { Header } from "../Header";
import { AppWrapper } from "./styles";
import {Feed} from "../Feed";

export const Layout = () => {
    return <AppWrapper>
        <Header/>
        <Feed/>
    </AppWrapper>
}