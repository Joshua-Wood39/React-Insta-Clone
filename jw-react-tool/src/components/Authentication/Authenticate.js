import React from 'react';

const authenticate = Pages => LogInComponent => props => {
    if (localStorage.getItem('username')) {
        return <Pages />
    }
    return <LogInComponent />
}
    

export default authenticate;