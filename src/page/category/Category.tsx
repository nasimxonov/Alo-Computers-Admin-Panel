import { useSelector , useDispatch } from 'react-redux'
import { increment, decrement , incrementByAmount } from '../../redux/counter-slice/counterSlice' 
import type { RootState } from '../../redux/store'
import Button from '../../components/Button'

const Category = () => {
  const value  = useSelector((state:RootState) => state.counter.value)

  return (
    <div>
      <h1>{value}</h1>
      <Button titile='Salom'/>
    </div>
  )
}

export default Category