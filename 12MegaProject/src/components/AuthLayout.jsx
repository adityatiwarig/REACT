import React,{useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


 export default function Protected({children , authentication = true}) {
    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(() => {
        //thdoa aasan bna de rhe

        // if(authStatus === true){
        //     navigate('/')
        // }else if(authStatus === false){
        //     navigate('/login')
        // }

        if (authentication && authStatus !== authentication) {
            navigate('/login')
            
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        }

        setLoader(false)

    }, [authStatus , navigate, authentication]) ;  // 3 PE DEPENDENCIES CHANGE HO RII
    
  return loader ? <h1>Loading....</h1> : <>{children}</> ;     // LOADING K BAAD PAGE PE BHEJO
  
  
};

