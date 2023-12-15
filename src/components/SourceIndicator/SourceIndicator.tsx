import { FC } from 'react'
import { IndicatorAvatar, IndicatorBox, IndicatorProgress } from './styles'

interface Props {
  source: 'tmdb' | 'cache' | null
  isLoading: boolean
}

const SourceIndicator: FC<Props> = ({ source, isLoading }) => {
  return (
    <IndicatorBox>
      {source ? (
        <IndicatorAvatar source={source}>
          {source.charAt(0).toUpperCase()}
        </IndicatorAvatar>
      ) : null}
      {isLoading && <IndicatorProgress size={46} source={source} />}
    </IndicatorBox>
  )
}

export default SourceIndicator
