"use client"

import { Button, Menu } from 'antd'
import Navbar from '../navbar/navbar';
import { menuItems } from '@/utils/constant';
import { useState } from 'react';
import { useAppSelector } from '@/app/redux/store';

type Props = {}

const Header = (props: Props) => {
    const {actionNav} = useAppSelector((state:any) => state?.localSlice)
    console.log(actionNav)

    const [activeNav, setActiveNav] = useState<number>(1)
        

    return <header className="bg-transparent flex justify-between  flex-col">
        <div className='flex h-[60px]'>
            <div className="text-white flex items-center justify-center text-xl w-1/5">TRAVEL</div>
            <Menu style={{ background: "transparent" }} className=" w-[60%]  justify-start items-center bg-transparent " theme="dark" mode="horizontal" defaultSelectedKeys={['0']} items={menuItems} />
            <div className="flex justify-center items-center text-white w-[25%] gap-2">
                <Button style={{ borderRadius: "50px", background: "transparent" , color:"white"}}   >
                    Login
                </Button>
                <Button type='primary' style={{ borderRadius: "50px", color: "white", border: "none" }} >Register</Button>
            </div>
        </div>
        <nav className='flex justify-center flex-col items-center gap-2'>
            <div className='w-[85%] border-t border-nav'></div>
            <div className='w-[85%] flex flex-col '>
                <Navbar setActiveNav={setActiveNav} activeNav={activeNav} />
            </div>
        </nav>
    </header>
}

export default Header