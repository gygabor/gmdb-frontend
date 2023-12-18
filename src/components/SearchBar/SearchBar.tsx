import SearchInput from '@src/components/SearchInput'
import React, { FC } from 'react'
import { SearchBox, SearchButton, ErrorMessage, SearchBarBox } from './styles'
import { Box } from '@mui/material'
import SourceIndicator from '../SourceIndicator'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  isInputError: boolean
  source: 'tmdb' | 'cache' | null
  isLoading: boolean
  error: Error | null
}

const Search: FC<Props> = ({
  setSearchValue,
  submit,
  isInputError,
  source,
  isLoading,
  error,
}) => {
  return (
    <Box>
      <SearchBarBox>
        <SearchBox>
          <SearchInput
            setSearchValue={setSearchValue}
            isInputError={isInputError}
            submit={submit}
          />
          <SearchButton variant="contained" onClick={submit}>
            Search
          </SearchButton>
        </SearchBox>
        <SourceIndicator source={source} isLoading={isLoading} error={error} />
      </SearchBarBox>
      {isInputError && (
        <ErrorMessage variant="caption" display="block" gutterBottom>
          The title should be at least 3 characters long.
        </ErrorMessage>
      )}
    </Box>
  )
}

export default Search
