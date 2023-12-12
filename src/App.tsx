import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '@src/constants/routes'
import Movies from '@src/pages/Movies'

const App: FC = () => {
  return (
    <Routes>
      <Route path={routes.MOVIES} element={<Movies />} />
    </Routes>
  )
}

export default App
