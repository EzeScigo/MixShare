import debounce from 'lodash/debounce';

const config = {
  clientID: 'BdNevf5JqXdwa7eY8W',
  clientSecret: 'JMAXR7BcgmkkMFZG2mMxq4VQwvtGSVWP'
}

const queryMixcloudAPI = async (query) => {
  const apiUrl = `https://api.mixcloud.com/search/?q=${query}&type=cloudcast`;
  console.log('fetching...');
  let response = await fetch(apiUrl);
  let data = await response.json();
  return data;
};

const debouncedQuery = debounce(async (query) => {
  return await queryMixcloudAPI(query)
}, 800, { leading: true });

export const debouncedSearch = async (query) => {
  const response = await debouncedQuery(query);
  return response;
  // return data;
  }