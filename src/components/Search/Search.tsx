import SearchInput from '@src/components/SearchInput'
import React, { FC } from 'react'
import { SearchBox, SearchButton, ErrorMessage } from './styles'
import { Box } from '@mui/material'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  onClick: () => void
  error: boolean
}

const Search: FC<Props> = ({ setSearchValue, onClick, error }) => {
  return (
    <Box>
      <SearchBox>
        <SearchInput setSearchValue={setSearchValue} error={error} />
        <SearchButton variant="contained" onClick={onClick}>
          Search
        </SearchButton>
      </SearchBox>
      {error && (
        <ErrorMessage variant="caption" display="block" gutterBottom>
          The title should be at least 3 characters long.
        </ErrorMessage>
      )}
    </Box>
  )
}

export default Search
