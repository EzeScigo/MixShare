import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
// <Logo className='logo' />
import { debouncedSearch } from '../../mixcloud/mixcloud.utils';

import { HeaderContainer, LogoContainer, SearchBoxContainer, SearchBox, OptionsContainer, OptionLink } from './header.styles';

const Header = () => {
  
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => console.log(result), [result])

  const handleChange = event => {
    setQuery(event.target.value);
    if (query) {
      debouncedSearch(query)
      .then(data => setResult(data));
    }
  };

  const handleSubmit = () => {
  };

  return (
    <HeaderContainer>
        <LogoContainer>
          <a href=''>MixShare</a>
        </LogoContainer>
        <SearchBoxContainer>
          <SearchIcon className='search-icon' />
          <SearchBox onChange={handleChange} />
        </SearchBoxContainer>
        <OptionsContainer>
          <OptionLink>Collection</OptionLink>
          <OptionLink>Sign in</OptionLink>
        </OptionsContainer>
    </HeaderContainer>
)};

export default (Header);