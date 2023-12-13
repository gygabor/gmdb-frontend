import styled from '@emotion/styled'
import { Box, InputAdornment } from '@mui/material'

export const SearchInputBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '& > div': {
    width: '50%',
  },
}))

export const ClearInputAdornment = styled(InputAdornment)(() => ({
  cursor: 'pointer',
}))
