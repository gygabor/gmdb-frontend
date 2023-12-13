import { Pagination } from '@mui/material'
import { FC } from 'react'
import { PaginatorBox } from './styles'

interface Props {
  onChange: (event: React.ChangeEvent<unknown>, p: number) => void
}

const Paginator: FC<Props> = ({ onChange }) => {
  return (
    <PaginatorBox>
      <Pagination
        count={10}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={onChange}
      />
    </PaginatorBox>
  )
}

export default Paginator
