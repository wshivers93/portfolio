import React from 'react';

interface componentProps {
    image: string;
    about: string;
}

function profileCard(props : componentProps) {
    return (
        <div className="container columns-2">
            <img src={props.image} alt="profile image"></img>
            <div className="text-left">{props.about}</div>
        </div>
    )
}