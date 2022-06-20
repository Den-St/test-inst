import styled from "styled-components";
import {colors} from "../../palette";

export const HeaderContainer= styled.div`
    width: 100%;
    height: 60px;
    border-bottom:1px solid ${colors.borderGray} ;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
  
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 60px;
    max-width: 940px;
    display: flex;
    justify-content: space-between;
    padding: 0 0;
  align-items: center;
`;

export const InstLogo = styled.img`
  margin-right: 200px;
  margin-top: 10px;
  padding-left: 0px;
`;

export const SearchWrapper = styled.div`  padding-left: 16px;
  box-sizing: border-box;
  border-radius: 5px;
  background: ${colors.gray1};
  width: 268px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-right: 35px;
  &>svg{
    width: 19px;
    height: 19px;
  }
`;

export const SearchInput = styled.input`
  margin-top: 4px;
  margin-left: 4px;
  padding: 0px;
  border: none;
  outline: none;
  background: transparent;
  color:gray;
  &:focus{
    color: black;
  }
`;

export const MenuWrapper = styled.div`
  height: 24px;
  display: flex;
`;

export const MenuButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  margin-left: 14px;
  cursor: pointer;
  
`;

export const AccountButton = styled.button`
  border-radius: 100%;
  overflow: hidden;
  width: 24px;
  height: 24px;
  padding: 0;
  margin-right: 0px;
  border: none;
  cursor: pointer;
  margin-left:  12px ;
`;

export const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;











