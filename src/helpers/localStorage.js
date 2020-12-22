import {API_URL} from './helpers/Api'
import Axios from 'axios'
import {LoginFunc} from './redux/Actions'

const [loading,setloading]=useState(true)
  useEffect(()=>{
    var id=localStorage.getItem('id')
    if(id){ 
      Axios.get(`${API_URL}/users/${id}`)
      .then((res)=>{
        props.LoginFunc(res.data)
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        setloading(false)
      })
    }else{
      setloading(false)
    }
  },[])
  if(loading){
    return(
      <div>Loadinggg</div>

    )
  }