import styled from '@emotion/styled'
import { Box, InputAdornment } from '@mui/material'

export const SearchInputBox = styled(Box)(() => ({
  width: '50%',
  minWidth: '300px',
  '& > div': {
    width: '100%',
  },
}))

export const ClearInputAdornment = styled(InputAdornment)(() => ({
  cursor: 'pointer',
}))
