import React from 'react';

const Map = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10163.237661419817!2d30.53015465!3d50.444650499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce54cf04fe59%3A0x1cb608300c10e006!2sLypky%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1675364757377!5m2!1sen!2sua"
                width="600" height="450" style={{border: 0}} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default Map;