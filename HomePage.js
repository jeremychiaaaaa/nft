import React, {useState, useEffect} from 'react'

function HomePage() {
  const[loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  },[])

  return (
   <div className="homePage-background">
      
    </div>
    )

}



const LoadingPage = () => {
  return(
    <div className='loadingPage'>
      <span>Hello World</span>
    </div>
  )
}

export default HomePage