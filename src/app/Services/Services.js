"use client";
import React, { useState } from 'react';
import ServiceApi from "./ServiceApi"; 
import Main from "./Main";

const SectionWithImages = () => {
    const [data, setData] = useState(ServiceApi);

    return (
        <>
            <Main main={data} />
        </>
    );
};

export default SectionWithImages;
