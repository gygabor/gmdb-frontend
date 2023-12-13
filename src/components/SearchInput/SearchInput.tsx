import { FC, useState, ChangeEvent } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { ClearInputAdornment, SearchInputBox } from './styles'

interface Props {
  handleChange: (value: string) => void
}

const SearchInput: FC<Props> = ({ handleChange }) => {
  const [isClearIcon, setisClearIcon] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    handleChange(event.target.value)
    event.target.value ? setisClearIcon(true) : setisClearIcon(false)
  }

  const handleClick = () => {
    setValue('')
    setisClearIcon(!isClearIcon)
  }

  return (
    <SearchInputBox>
      <TextField
        size="small"
        variant="outlined"
        onChange={onTextChange}
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
