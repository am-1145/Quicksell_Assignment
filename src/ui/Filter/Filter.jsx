import React, { useState, useRef, useEffect } from 'react'
import './Filter.css'

export const Filter = ({ grouping,ordering,setGrouping,setOrdering }) => {

  const [open, setOpen] = useState(false);
  const comp = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickoutside);
    return(() => {
        document.removeEventListener('click', handleClickoutside);
    });
  },[]);

  const dropedownOpen = () => {
    setOpen(true);
  };

  const handleClickoutside = (event) => {
    if(comp.current && !comp.current.contains(event.target)){
        setOpen(false);
    }
  }

  const onChangeGroup = (e) => setGrouping(e.target.value);
  const onChangeOrder = (e) => setOrdering(e.target.value);


  return (
    <div className='display-dropdown' ref={comp}>
      <div className='dropdown-label-container' onClick={dropedownOpen}>
        <img src={'/assets/Display.svg'} height={20} width={30} alt='display'/>
        <div className='dropdown-label'>Display</div>
        <img src={'/assets/down.svg'} height={20} width={30} alt='down'/>
      </div>
      <div className={`dropdown-content-container ${open && "visible"}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select name="grouping" id="grouping" value={grouping} onChange={onChangeGroup}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select name="ordering" id="ordering" value={ordering} onChange={onChangeOrder}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}
