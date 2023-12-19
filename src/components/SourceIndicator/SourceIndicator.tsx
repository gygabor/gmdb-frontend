import { FC } from 'react'
import {
  ErrorAvatar,
  ErrorBox,
  ErrorText,
  IndicatorAvatar,
  IndicatorBox,
  IndicatorProgress,
} from './styles'

interface Props {
  source: 'tmdb' | 'cache' | null
  isLoading: boolean
  error: Error | null
}

const SourceIndicator: FC<Props> = ({ source, isLoading, error }) => {
  return (
    <IndicatorBox>
      {error && (
        <ErrorBox>
          <ErrorText variant="body1">{error.message}</ErrorText>
          <ErrorAvatar>E</ErrorAvatar>
        </ErrorBox>
      )}
      {source && (
        <IndicatorAvatar source={source}>
          {source.charAt(0).toUpperCase()}
        </IndicatorAvatar>
      )}
      {isLoading && <IndicatorProgress size={46} source={source} />}
    </IndicatorBox>
  )
}

export default SourceIndicator
