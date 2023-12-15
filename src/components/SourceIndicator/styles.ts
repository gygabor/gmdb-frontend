import styled from '@emotion/styled'
import { Box, Avatar, CircularProgress } from '@mui/material'

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
