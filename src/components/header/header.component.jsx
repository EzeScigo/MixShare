import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
// <Logo className='logo' />

import { HeaderContainer, LogoContainer, SearchBoxContainer, SearchBox, OptionsContainer, OptionLink } from './header.styles';

const Header = ( { currentUser, hidden } ) => (
    <HeaderContainer>
        <LogoContainer>
          <a href=''>MixShare</a>
        </LogoContainer>
        <SearchBoxContainer>
          <SearchIcon className='search-icon' />
          <SearchBox />
        </SearchBoxContainer>
        <OptionsContainer>
          <OptionLink>Collection</OptionLink>
          <OptionLink>Sign in</OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default (Header);