import React, { useState } from 'react';
import { Flex } from "@chakra-ui/react";

export default function Select() {

    return (
        <>
            <Flex 
                mt={{base: "0px", sm: "0px", md: "0px", lg: "6px", xl: "0px"}}
                right={{base: "0px", sm: "0px", md: "0px", lg: "295px", xl: "0px"}}
                width={{base: "0px", sm: "0px", md: "0px", lg: "40px", xl: "0px"}} 
                position="relative"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                    <line x1="5.37963" y1="5.6746" x2="11.3796" y2="12.6746" stroke="#2C3226"/>
                    <line x1="12.6159" y1="10.6799" x2="17.6159" y2="4.67991" stroke="#2C3226"/>
                    <line x1="24.6" y1="12.3" x2="18.6" y2="4.3" stroke="#2C3226"/>
                    <circle cx="25.5" cy="12.5" r="3.5" fill="#92A045"/>
                    <circle cx="25.5" cy="12.5" r="3.5" fill="#748F56"/>
                    <circle cx="25.5" cy="12.5" r="3.5" fill="#219394"/>
                    <circle cx="25.5" cy="12.5" r="3.5" fill="#004B5F"/>
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#92A045"/>
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#748F56"/>
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#219394"/>
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#92A045"/>
                    <circle cx="10.5" cy="12.5" r="3.5" fill="#92A045"/>
                    <circle cx="10.5" cy="12.5" r="3.5" fill="#748F56"/>
                    <circle cx="10.5" cy="12.5" r="3.5" fill="#219394"/>
                    <circle cx="10.5" cy="12.5" r="3.5" fill="#748F56"/>
                    <circle cx="10.5" cy="12.5" r="3.5" fill="#748F56"/>
                    <circle cx="10.5" cy="12.5" r="3.5" fill="#748F56"/>
                    <circle cx="10.5" cy="12.5" r="3.5" fill="#748F56"/>
                    <circle cx="18.5" cy="3.5" r="3.5" fill="#92A045"/>
                    <circle cx="18.5" cy="3.5" r="3.5" fill="#748F56"/>
                    <circle cx="18.5" cy="3.5" r="3.5" fill="#219394"/>
                    <circle cx="18.5" cy="3.5" r="3.5" fill="#219394"/>
                    </svg>
            </Flex>
        </>
    )
}
