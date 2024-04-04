import { useIntl } from 'react-intl';

import Search from '~/assets/search.png';

const SearchCustom = ({
  searchValue,
  setSearchValue,
  handleSearch,
  isDisabled = false,
  handleClickSearch,
}) => {
  const intl = useIntl();

  return (
    <div className="search-sm-custom d-inline-block float-md-left mr-1 mb-1 align-top">
      <input
        type="text"
        name="keyword"
        id="search"
        placeholder={intl.formatMessage({ id: 'sort.search' })}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={(e) => handleSearch(e)}
        disabled={isDisabled}
      />
      <button
        type="submit"
        className="search-sm-custom-btn"
        onClick={handleClickSearch}
      >
        <img src={Search} alt="" />
      </button>
    </div>
  );
};

export default SearchCustom;
