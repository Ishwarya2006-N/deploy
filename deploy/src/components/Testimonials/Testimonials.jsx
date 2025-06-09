import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
 const slider = useRef();
const tx = useRef(0); 

const slideforward = () => {
  if (tx.current > -75) { 
    tx.current -= 25;
    slider.current.style.transform = `translateX(${tx.current}%)`;
  }
};

const slidebackward = () => {
  if (tx.current < 0) {
    tx.current += 25;
    slider.current.style.transform = `translateX(${tx.current}%)`;
  }
};

  
  return (
    <div className='testimonials'>
      <img src={next_icon} className='next-btn' onClick={slideforward} />
      <img src={back_icon} className='back-btn' onClick={slidebackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} />
                <div>
                  <h3>William Jackson1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Edusity is a leading online education platform based in the United States, dedicated to transforming the
                way people learn and teach. We provide innovative, accessible,
                and flexible learning experiences to students, professionals, and educators worldwide.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} />
                <div>
                  <h3>William Jackson2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Edusity is a leading online education platform based in the United States, dedicated to transforming the
                way people learn and teach. We provide innovative, accessible,
                and flexible learning experiences to students, professionals, and educators worldwide.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} />
                <div>
                  <h3>William Jackson3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Edusity is a leading online education platform based in the United States, dedicated to transforming the
                way people learn and teach. We provide innovative, accessible,
                and flexible learning experiences to students, professionals, and educators worldwide.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} />
                <div>
                  <h3>William Jackson4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Edusity is a leading online education platform based in the United States, dedicated to transforming the
                way people learn and teach. We provide innovative, accessible,
                and flexible learning experiences to students, professionals, and educators worldwide.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
