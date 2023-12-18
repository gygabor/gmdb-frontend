import styled from '@emotion/styled'
import { Box, CardHeader } from '@mui/material'

export const ContentBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
}))

export const DetailsHeader = styled(CardHeader)(() => ({
  fontWeight: '500',
}))
