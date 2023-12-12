import { FC } from 'react'
import { Box, TextField, InputAdornment } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<Props> = ({ handleChange }) => {
  return (
    <Box>
      <TextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              // style={{ display: showClearIcon }}
              // onClick={handleClick}
            >
              <ClearIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default SearchInput
