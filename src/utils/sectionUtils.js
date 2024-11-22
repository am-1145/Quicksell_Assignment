
export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <img src="/assets/Backlog.svg" height={15} width={15} alt="backlog"/>;
        case "Todo": return <img src="/assets/To-do.svg" height={15} width={15} alt="backlog"/>;
        case "In progress": return <img src="/assets/in-progress.svg" height={15} width={15} alt="backlog"/>;
        case "Done": return <img src="/assets/Done.svg" height={15} width={15} alt="backlog"/>;
        case "Canceled": return <img src="/assets/Cancelled.svg" height={15} width={15} alt="backlog"/>;
        default: return <img src="/assets/Cancelled.svg" height={15} width={15} alt="backlog"/>;
    }
}

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src="/assets/No-priority.svg" height={15} width={15} alt="no-priority"/>;
        case "Low": return <img src="/assets/Img - Low Priority.svg" height={15} width={15} alt="medium"/>;
        case "Medium": return <img src="/assets/Img - Medium Priority.svg" height={15} width={15} alt="medium"/>;
        case "High": return <img src="/assets/Img - High Priority.svg" height={15} width={15} alt="high"/>;
        case "Urgent": return <img src="/assets/SVG - Urgent Priority colour.svg" height={15} width={15} alt="urgent"/>;
        default: return <img src="/assets/SVG - Urgent Priority colour.svg" height={15} width={15} alt="urgent"/>
    }
}