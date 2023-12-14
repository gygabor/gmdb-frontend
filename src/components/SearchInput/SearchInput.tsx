import { FC, useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { ClearInputAdornment, SearchInputBox } from './styles'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  error: boolean
}

const SearchInput: FC<Props> = ({ setSearchValue, error }) => {
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

  return (
    <SearchInputBox>
      <TextField
        size="small"
        variant="outlined"
        onChange={onTextChange}
        value={value}
        error={error}
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
