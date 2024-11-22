import React, { useMemo } from 'react';
import { getPriorityIcon, getStatusIcon } from '../../utils/sectionUtils';
import Profile from '../../ui/Profile/Profile';
import Card from '../../ui/Card/Card';
import "./Section.css";

export default function Section({ tickets, grouping, userData, groupBy }) {
    const title = useMemo(() => {
        if (grouping === "status" || grouping === "priority") {
            return groupBy;
        } else if (userData[groupBy]) {
            return userData[groupBy].name;
        } else {
            return "Unknown User";
        }
    }, [grouping, groupBy, userData]);
    
    const icon = useMemo(() => {
        if (grouping === "priority") {
            return getPriorityIcon(groupBy);
        } else if (grouping === "status") {
            return getStatusIcon(groupBy);
        } else if (userData[groupBy]) {
            return <Profile name={userData[groupBy].name} activityStatus={userData[groupBy].available} />;
        } else {
            return <Profile name="Unknown" activityStatus={false} />;
        }
    }, [grouping, groupBy, userData]);
    

  return (
    <div className='section-container'>
        <div className='section-heading'>
            <div className='section-left-container'>
                {icon}
                <div className='section-title'>
                    {title}
                    <span className='count'>{tickets.length}</span>
                </div>
            </div>
            <div className='section-right-container'>
                <img src='/assets/add.svg' height={20} width={20} alt='add'/>
                <img src='/assets/3 dot menu.svg' height={20} width={20} alt='menu'/>
            </div>
        </div>
        <div className="section-body">
            {tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} userData={userData[ticket.userId]} hideProfileIcon={grouping==='user'} hideStatusIcon={grouping==='status'} hidePriorityIcon={grouping==="priority"}/>
            ))}
        </div>
    </div>
  )
}