import styled from '@emotion/styled'
import { Box, Avatar, CircularProgress, Typography } from '@mui/material'

export const IndicatorBox = styled(Box)(() => ({
  position: 'relative',
}))

interface IndicatorProps {
  source: 'tmdb' | 'cache' | null
}

export const IndicatorAvatar = styled(Avatar)<IndicatorProps>(({ source }) => ({
  backgroundColor: source === 'cache' ? '#32658d' : '#01c6ac',
}))

export const IndicatorProgress = styled(CircularProgress)<IndicatorProps>(
  ({ source }) => ({
    color: source === 'cache' ? '#32658d' : '#01c6ac',
    position: 'absolute',
    top: -3,
    left: -3,
    zIndex: 1,
  }),
)

export const ErrorText = styled(Typography)(() => ({
  color: '#d32f2f',
  marginRight: '10px',
}))

export const ErrorAvatar = styled(Avatar)(() => ({
  backgroundColor: '#d32f2f',
}))

export const ErrorBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
}))
