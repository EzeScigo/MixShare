import styled from 'styled-components';

// import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color:  rgba( 24, 39, 54,1);
`;

export const SearchBoxContainer = styled.div`
  border-radius: 5px;
  background-color: rgba( 82, 93,105,1);
  border: 0px;
  margin: auto;
  height: 30px;
  display: flex;
  align-items: center;

  .search-icon {
    width: 20px;
    height: 20px;
    color: white;
    margin: 5px;
  }
`;

export const LogoContainer = styled.div`
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: auto;
  
  a {
    font-family: 'Lobster', sans-serif;
    font-size: 40px;
    color: white;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const SearchBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Search',
})`
  font-family: 'Varela Round', 'Courier New', Courier, monospace;
  border-radius: 5px;
  background-color: rgba( 82, 93,105,1);
  border: 0px;
  color: white;
  font-size: 15px;
  font-weight: Semi-Bold;
  padding: 5px 10px;
  
  
  &:focus { 
    outline: none !important;
    /* border-color: #719ECE;
    box-shadow: 0 0 10px #719ECE; */

    ::placeholder {
      opacity: 0.6;
    }
  }
  ::placeholder{
    color: white;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0px 10px;
`;

export const OptionLink = styled.a`
  padding: 10px 0px;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  color: white;
  opacity: 0.98;
  display: inline-block;
  position: relative;
  text-decoration: none;
  transition: all 0.3s linear;

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    border-bottom: 2px solid white;
    transition: all 0.3s linear;
  }

  &:hover {
    opacity: 0.7;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
`;