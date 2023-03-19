import React from 'react'
import { VerticalTimeline, VerticalTimelineElement  } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faBolt, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2000-2012' 
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<FontAwesomeIcon icon={faBolt} />}>
          <p>Electrican at Equipment Management Services</p>
        </VerticalTimelineElement>        
      </VerticalTimeline>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2012-2016' 
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<FontAwesomeIcon icon={faSchool} />}>
          <p>Degree Interdisciplinary Studies (BS) from University of Houston-Downtown</p>
        </VerticalTimelineElement>        
      </VerticalTimeline>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2016-Current' 
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<FontAwesomeIcon icon={faPersonChalkboard} />}>
          <p>Middle School Math Teacher with Houston ISD and Spring Branch ISD</p>
        </VerticalTimelineElement>        
      </VerticalTimeline>
     
    </div>
  )
}

export default Experience