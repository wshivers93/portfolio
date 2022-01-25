import React from 'react';

interface componentProps {
    image: string;
    about: string;
}

const ProfileCard = (props : componentProps) => {
    return (
        <div className="container h-full space-y-4">
            <div className='mx-auto w-1/2'>
                <img src={props.image} alt="profile image" className="rounded-full"/>
            </div>
            <div className="mx-auto w-1/2 text-left">{props.about}</div>
        </div>
    )
}

export default ProfileCard;