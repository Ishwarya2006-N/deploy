import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/college.mp4'
const Videoplayer = ({play,setplay}) => {
  const player=useRef(null);
  const handleclose=(e)=>{
    if(e.target==player.current){
      setplay(false)
    }
  }
  return (
    <div className={`videoplayer ${play?'':'hide'}`} ref={player} onClick={handleclose}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer