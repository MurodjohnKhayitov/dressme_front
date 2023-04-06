import React, { useEffect, useState } from 'react'
import TopHeader from "../top";
import MediumHeader from "../medium";
import { Outlet } from 'react-router-dom';
export default function YandexMapsIndex() {

    return (
        <div>
            <header className="border-b border-searchBgColor">
                <TopHeader />
                <MediumHeader />
            </header>
            <Outlet />
        </div>

    )
}
