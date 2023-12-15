import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'

export const SearchBox = styled(Box)(() => ({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
}))

export const SearchBarBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
}))

export const SearchButton = styled(Button)(() => ({
  marginLeft: '10px',
}))

export const ErrorMessage = styled(Typography)(() => ({
  color: '#d32f2f',
}))
