import './App.css';
import { Header } from './Components/Header/Header';
import { useState, useEffect } from 'react';
import { loadGridData } from './utils/gridUtils';
import { Grid } from './Components/Grid/Grid';

function App() {

  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("users");
  const [ordering, setOrdering] = useState("priority");

  useEffect(() => {
    load();
    fetchData();
  }, []);

  useEffect(() => {
    if (tickets.length === 0) {
      return;
    }
    setGridData(loadGridData(tickets, grouping, ordering));
  }, [tickets, grouping, ordering]);

  const onChangeOrder = (order) => {
    setOrdering(order);
    save({ ordering: order });
  }

  const onChangeGroup = (group) => {
    setGrouping(group);
    save({ grouping: group });
  }

  const save = (data) => {
    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
  }

  const load = () => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      const { tickets, users } = data;
      const usersById = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      setTickets(tickets);
      setUserData(usersById);
    } catch (err) {
      console.log("Error occurred while fetching data");
    }
  }

  return (
    <>
      <Header
        grouping={grouping}
        ordering={ordering}
        setGrouping={onChangeGroup}
        setOrdering={onChangeOrder}
      />
      <div>
        <Grid gridData={gridData} userData={userData} grouping={grouping} />
      </div>
    </>
  );
}

export default App;
