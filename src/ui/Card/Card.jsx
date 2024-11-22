import React from 'react';
import Profile from '../Profile/Profile';
import { getPriorityIcon, getStatusIcon } from '../../utils/sectionUtils';
import { getPriority } from '../../utils/gridUtils';
import "./Card.css";

export default function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriorityIcon }) {

  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
          {!hideProfileIcon && <Profile name={userData.name} activityStatus={userData.available} />}
        </div>
        <div className='middle-container'>
          {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        {!hidePriorityIcon && getPriorityIcon(getPriority(ticket.priority))}
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-content'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  )
}