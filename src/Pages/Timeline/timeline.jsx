import React from 'react';
import VerticalTimeline from './verticalTimeline';
import VerticalTimelineElement from './verticalTimelineElement';
import './Timeline.css'; // Make sure to import the CSS
import '../../components/button/Button'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import { csseEvents } from '../../utils/eventsArray';

const Timeline = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='w-full items-center flex justify-center mt-10'>
        <Link to='/csse'>
          <Button text={"Explore CSSE"} />
        </Link>
      </div>
      <VerticalTimeline layout="2-columns" animate={true} className="timeline-container">
        {
          csseEvents?.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              icon={<span className="timeline-icon">{item.icon}</span>}
              position={item.position}
            >
              <h3 className='underline font-semibold'>• {item.name}</h3>
              <p>{item.description}</p>
              <button className='mt-3 px-4 py-1 bg-green-600 rounded' onClick={()=>navigate(`/events/${item.name}`)}>Click to register!</button>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
