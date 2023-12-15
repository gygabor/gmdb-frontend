import SearchInput from '@src/components/SearchInput'
import React, { FC } from 'react'
import { SearchBox, SearchButton, ErrorMessage, SearchBarBox } from './styles'
import { Box } from '@mui/material'
import SourceIndicator from '../SourceIndicator'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  error: boolean
  source: 'tmdb' | 'cache' | null
  isLoading: boolean
}

const Search: FC<Props> = ({
  setSearchValue,
  submit,
  error,
  source,
  isLoading,
}) => {
  return (
    <Box>
      <SearchBarBox>
        <SearchBox>
          <SearchInput
            setSearchValue={setSearchValue}
            error={error}
            submit={submit}
          />
          <SearchButton variant="contained" onClick={submit}>
            Search
          </SearchButton>
        </SearchBox>
        <SourceIndicator source={source} isLoading={isLoading} />
      </SearchBarBox>
      {error && (
        <ErrorMessage variant="caption" display="block" gutterBottom>
          The title should be at least 3 characters long.
        </ErrorMessage>
      )}
    </Box>
  )
}

export default Search
