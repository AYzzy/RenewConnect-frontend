import React,{useState,useRef} from 'react'
import { FaDiagramProject } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';
import Odometer from 'react-odometerjs';
import './Achievement.css'
import { FaUsersLine } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Achievement = () => {
    const [clients, setClients] =useState(0);
    const [projects, setProjects] = useState(0); 
    const [team, setTeam] = React.useState(0);
    const [awards, setAwards] = React.useState(0);
    const container = useRef(null)
    const updateData = ()=>{
      const timeout = setTimeout(() => {
        setClients(120);
        setProjects(150);
        setTeam(44);
        setAwards(89);
      },500)
      return () => clearTimeout(timeout)
    }
    const resetData = () => {
      setClients(0);
      setProjects(0);
      setTeam(0);
      setAwards(0);
    }

    useGSAP(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top buttom',
          end: 'buttom top',
          scrub:0,
          onEnter: () => {updateData()},
          onLeaveBack: () => {resetData()},
        }
      });
      return () => {
        timeline.revert();
      }
    },{scope:container})


  return (
    <div className='achievement_container' ref={container}>  
        <div className="container">  
          {/*  Start Achievement  */}  
          <div className="achievement">  
            <div className="icon_container"><FaUsersLine/></div>  
            <div className="details">  
              <div className="row">  
                <Odometer  
                  value={clients}  
                  className="title"  
                />  
                <h1 className="title">+</h1>  
              </div>  
              <small className="text_muted">Happy Customers</small>  
            </div>  
          </div> 
          {/* End achievement */}

          {/*  Start Achievement  */}  
          <div className="achievement">  
            <div className="icon_container"><FaDiagramProject/></div>  
            <div className="details">  
              <div className="row">  
                <Odometer  
                  value={projects}  
                  className="title"  
                />  
                <h1 className="title">+</h1>  
              </div>  
              <small className="text_muted">Completed Projects</small>  
            </div>  
          </div> 
          {/* End achievement */}

           {/*  Start Achievement  */}  
          <div className="achievement">  
            <div className="icon_container"><GiTeamIdea/></div>  
            <div className="details">  
              <div className="row">  
                <Odometer  
                  value={team}  
                  className="title"  
                />  
                <h1 className="title">k</h1>  
              </div>  
              <small className="text_muted">Expert worker</small>  
            </div>  
          </div> 
          {/* End achievement */} {/*  Start Achievement  */}  
          <div className="achievement">  
            <div className="icon_container"><FaAward/></div>  
            <div className="details">  
              <div className="row">  
                <Odometer  
                  value={awards}  
                  className="title"  
                />  
                <h1 className="title">+</h1>  
              </div>  
              <small className="text_muted"> Awards Winning</small>  
            </div>  
          </div> 
          {/* End achievement */}


        </div>  
      </div> 
  )
}

export default Achievement