import SearchInput from '@src/components/SearchInput'
import React, { FC } from 'react'
import { SearchBox, SearchButton } from './styles'

interface Props {
  handleChange: (value: string) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Search: FC<Props> = ({ handleChange, onClick }) => {
  return (
    <SearchBox>
      <SearchInput handleChange={handleChange} />
      <SearchButton variant="contained" onClick={onClick}>
        Search
      </SearchButton>
    </SearchBox>
  )
}

export default Search
