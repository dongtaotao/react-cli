import React, { useEffect, useState } from 'react'


const useClock = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerID = null;

    timerID = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(timerID)
      timerID = null;
    }
  }, [])

  return time
}


const Index = () => {
  const time = useClock();
  return <h2>当前时间:{time.toLocaleTimeString()}</h2>
}

const Index2 = () => {
  const time = useClock();
  return <h2>当前时间:{time.toTimeString()}</h2>
}

export default Index2
