import React from 'react';

type PropsType = {
    contactTitle: string
    contactValue: string | null
}

export const Contact: React.FC<PropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
             <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};


