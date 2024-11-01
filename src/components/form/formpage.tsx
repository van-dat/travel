import { NextPage } from 'next'
import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { BiHotel } from 'react-icons/bi';
import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { FcPlanner } from 'react-icons/fc';
import { MdOutlineNightlight } from 'react-icons/md';
interface Props {

}

const Formpage: NextPage<Props> = ({ }) => {
    const [form] = Form.useForm();


    return (<Form
        layout={"vertical"}
        form={form}
        initialValues={{ layout: "horizontal" }}
        style={{ color: "#ddd" }}
    >
        <Form.Item >
            <h4 className="flex gap-2"> <BiHotel size={22} /> FindHotels  </h4>
        </Form.Item>
        <Form.Item label="Cty or Hotel Name">
            <Input size='large' placeholder="" prefix={<CiLocationOn />} />
        </Form.Item>

        <Form.Item
            label="Check-in "
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(60% - 8px)' }}
        >
            <Input size='large' placeholder="" prefix={<CiCalendar />} />
        </Form.Item>
        <Form.Item
            label="Duration"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px' }}
        >
            <Input size='large' placeholder="" prefix={<MdOutlineNightlight className='rotate-[-30deg]' />} />
        </Form.Item>
        <Form.Item label="GuestsandRooms">
            <Select size='large'

                placeholder="custom dropdown render"
                dropdownRender={(menu) => (
                    <>
                        {menu}
                    </>
                )}

            />
        </Form.Item>
        <Form.Item className='flex justify-center items-center -w-ful'>
            <Button style={{ borderRadius: "50px", border: "none", width: "150px", backgroundColor: "black", color: "white" }}>Search Hotel</Button>
        </Form.Item>
    </Form>)
}

export default Formpage