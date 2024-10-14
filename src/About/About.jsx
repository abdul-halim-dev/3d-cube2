import './index.scss';

 
import { FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
const About = () => {
  return (
    <>
    <div className="cont">
    <div className='header'>
      <h1> I have learned these technologies. </h1>
     </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
             <span><RiTailwindCssFill style={{ color:'#DD0031'}}/> </span>
          </div>
          <div className='face2'>
            <span> <FaHtml5 style={{color:'#F06529'}}/> </span>
          </div>
          <div className='face3'>
            <span>
              <FaCss3 style={{color:'#28A4D9'}}/>
            </span>
          </div>
          <div className='face4'>
            <span>
              <FaReact style={{color:'#5ED4F4'}}/>
            </span>
          </div>
          <div className='face5'>
             <span>
              <FaJsSquare style={{color:'#EFD81D'}}/>
             </span>
          </div>
          <div className='face6'>
            <span>
              <FaGitAlt style={{color:'#EC4D28'}}/>
            </span>
          </div>
        </div>
      </div>
    </div>
     
     
    
    {/* <Loader type='pacman'/> */}
    </>
  )
}

export default About