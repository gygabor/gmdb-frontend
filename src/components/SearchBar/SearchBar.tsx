import SearchInput from '@src/components/SearchInput'
import React, { FC } from 'react'
import { SearchBox, SearchButton, SearchBarBox } from './styles'
import { Box } from '@mui/material'
import SourceIndicator from '../SourceIndicator'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
  source: 'tmdb' | 'cache' | null
  isLoading: boolean
  error: Error | null
  isButtonDisabled: boolean
}

const Search: FC<Props> = ({
  setSearchValue,
  submit,
  source,
  isLoading,
  error,
  isButtonDisabled,
}) => {
  return (
    <Box>
      <SearchBarBox>
        <SearchBox>
          <SearchInput setSearchValue={setSearchValue} submit={submit} />
          <SearchButton
            variant="contained"
            disabled={isButtonDisabled}
            onClick={submit}
          >
            Search
          </SearchButton>
        </SearchBox>
        <SourceIndicator source={source} isLoading={isLoading} error={error} />
      </SearchBarBox>
    </Box>
  )
}

export default Search
