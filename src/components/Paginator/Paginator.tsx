import { Pagination } from '@mui/material'
import { FC } from 'react'
import { PaginatorBox } from './styles'

interface Props {
  onChange: (event: React.ChangeEvent<unknown>, p: number) => void
  totalPages: number
}

const Paginator: FC<Props> = ({ onChange, totalPages }) => {
  return (
    <PaginatorBox>
      <Pagination
        count={totalPages}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={onChange}
      />
    </PaginatorBox>
  )
}

export default Paginator
