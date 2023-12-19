import { FC, useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { ClearInputAdornment, SearchInputBox } from './styles'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  submit: () => void
}

const SearchInput: FC<Props> = ({ setSearchValue, submit }) => {
  const [isClearIcon, setisClearIcon] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    setValue(event.target.value)
    event.target.value ? setisClearIcon(true) : setisClearIcon(false)
  }

  const handleClick = () => {
    setValue('')
    setSearchValue('')
    setisClearIcon(!isClearIcon)
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submit()
    }
  }

  return (
    <SearchInputBox>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Search for a movie by title..."
        onChange={onTextChange}
        onKeyUp={handleKeyUp}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <ClearInputAdornment position="end" onClick={handleClick}>
              {isClearIcon && <ClearIcon />}
            </ClearInputAdornment>
          ),
        }}
      />
    </SearchInputBox>
  )
}

export default SearchInput
