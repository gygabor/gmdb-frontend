import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'

export const SearchBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
}))

export const SearchButton = styled(Button)(() => ({
  marginLeft: '10px',
}))
