export const loadGridData = (tickets, grouping, ordering) => {
    let newTickets;
    if (ordering==="priority") {
        // priority to be sorted in descending order
        newTickets = tickets.sort((a,b) => a.priority > b.priority ? -1 : 1);
    } else {
        // title to be sorted in ascending order
        newTickets = tickets.sort((a,b) => a.title < b.title ? -1 : 1);
    }

    switch (grouping) {
        case('status'): return groupByStatus(newTickets);
        case('users'): return groupByUsers(newTickets);
        case('priority'): return groupByPriority(newTickets);
        default: return groupByUsers(newTickets);
    }
}

export const getPriority  = (priority) => {
    switch (priority) {
        case 0: return "No priority";
        case 1: return "Low";
        case 2: return "Medium";
        case 3: return "High";
        case 4: return "Urgent";
        default: return "No priority";
    }
}

const groupByStatus = (tickets) => {
    const groups = tickets.reduce((res,ticket) => {
        if (!res[ticket.status]) {
            res[ticket.status] = [];
        }
        res[ticket.status].push(ticket);
        return res;
    },
    {
        "Backlog": [],
        "Todo": [],
        "In progress": [],
        "Done": [],
        "Canceled": []
    });
    return groups;
}

const groupByUsers = (tickets) => {
    const groups = tickets.reduce((res,ticket) => {
        if (!res[ticket.userId]) {
            res[ticket.userId] = [];
        }
        res[ticket.userId].push(ticket);
        return res;
    },{});
    return groups;
}

const groupByPriority = (tickets) => {
    const groups = tickets.reduce((res,ticket) => {
        const priority = getPriority(ticket.priority);
        if (!res[priority]) {
            res[priority] = [];
        }
        res[priority].push(ticket);
        return res;
    },
    {
        "No priority": [],
        "Urgent": [],
        "High": [],
        "Medium": [],
        "Low": []
    });
    return groups;
}