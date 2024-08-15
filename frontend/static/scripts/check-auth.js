async function isUser(){
    const response = await fetch('/api/auth/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors',
        },
    });

    if (response.status == 200) return true;
    else return false ;

}


async function isAdmin(){
    const response = await fetch('/api/auth/admin', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors',
        },
    });

    if (response.status == 200) return true;
    else return false ;

}

