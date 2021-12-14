import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Layout, Table, Button, Row, Col, Form, Input, Card, Select } from 'antd';
import {
    HeartTwoTone,
    DeleteTwoTone
} from '@ant-design/icons';
import About from './About.js';
import AccInfo from './AccInfo.js';

const { Header, Content } = Layout;
const { Option } = Select;
<link rel="stylesheet" href="index.css"></link>
export const PlaysList = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsloaded] = useState(false);
    const [playsList, setPlaysList] = useState(JSON.parse(localStorage.getItem("playsList")));
    const [allplaysList, setAllplaysList] = useState(JSON.parse(localStorage.getItem("playsList")));
    const [favouriteList, setFavouriteList] = useState([]);
    const [form] = Form.useForm();
    const [show, setShow] = useState(true);
    const handleClose = () => { setShow(false); }
    const handleShow = () => { setShow(true); }


        useEffect(() => {
            if (!playsList) {
                fetch('/api/list')
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem('playsList', JSON.stringify(data))
                        setPlaysList(data)
                        setAllplaysList(data)
                    })
            }
            setIsloaded(true);
        }, [playsList])



    const markToFavourite = (row) => {
        setFavouriteList(prevArray => [...prevArray, row]);
        setPlaysList(playsList.filter(plays => plays.id !== row.id));
    }

    const unmarkToFavourite = (row) => {
        setPlaysList(prevArray => [row, ...prevArray]);
        setFavouriteList(favouriteList.filter(plays => plays.id !== row.id));
    }
    const onViewDetails = (row) => {
        localStorage.setItem("playDetails", JSON.stringify(row));
        navigate("/play-details/" + row.id);
    }

    //playsList.sort((a, b) => (a.title > b.title) ? 1 : -1)
    const columns = [
        {
            title: <a id="title" href="#">Title</a>,
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: <a id="year" href="#">Year</a>,
            dataIndex: 'likelyDate',
        },
        {
            title: '',
            dataIndex: 'address',
            render: (text, row, index) => {
                return <div>
                    <Button type="primary" icon={<HeartTwoTone />} onClick={() => markToFavourite(row)} />
                    <Button onClick={() => onViewDetails(row)}> View </Button>
                </div>
            },
        },
    ];
    const favouritesColumns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Year',
            dataIndex: 'likelyDate',
        },
        {
            title: '',
            dataIndex: 'address',
            render: (text, row, index) => {

                return <div>
                    <Button type="primary" icon={<DeleteTwoTone />} onClick={() => unmarkToFavourite(row)} />
                </div>

            },
        },
    ];

    const onFilter = (value) => {
        console.log(value)
        let FilteredData = [];
        if (value.title) {
            let titleData = allplaysList.filter(play => play.title.includes(value.title));
            console.log(titleData);
            FilteredData.push(titleData);
        }
        if (value.before && value.after) {
            let genreData = allplaysList.filter(play => +play.likelyDate < +value.before && +play.likelyDate > +value.after);
            console.log(genreData)
            FilteredData.push(...genreData);
        }
        if (value.after && !value.before) {
            let genreData = allplaysList.filter(play => +play.likelyDate > +value.after);
            console.log(genreData)
            FilteredData.push(...genreData);
        }
        if (!value.after && value.before) {
            let genreData = allplaysList.filter(play => +play.likelyDate < +value.before);
            console.log(genreData)
            FilteredData.push(...genreData);
        }
        if (value.genre) {
            let genreData = allplaysList.filter(play => play.genre === value.genre);
            console.log(genreData)
            FilteredData.push(...genreData);
        }
        console.log(FilteredData)
        setPlaysList(FilteredData)
    }


    return (
        <div>
            <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"> <Link to="/"><img src="https://i.gifer.com/YIgY.gif" alt="home" width="30px" height="30px" /></Link></Menu.Item>
                        <Menu.Item key="2"><About/></Menu.Item>
                        <Menu.Item key="3"><AccInfo/></Menu.Item>
                        <Menu.Item key="4"><div><a href="/logout"></a>Logout</div></Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Row>
                        <Col span={1}>
                        <p><button style={{ margin: 5}} class="btn-minimize" onClick={()=>setShow(!show)}>◍</button></p>
                        </Col>
                        <Col span={7}>
                            {show?<div id="fav" className="site-layout-background" style={{ padding: 24, minHeight: 380 }} >
                            <h1>Favourites</h1>
                                {isLoaded ? <Table pagination={false} dataSource={favouriteList} columns={favouritesColumns} /> : null}
                                
                            </div>:null}
                            
                        </Col>
                        <Col span={8}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                                <h1>Play Filters</h1>
                                <Card>
                                    <Form
                                        layout={{
                                            labelCol: { span: 4 },
                                            wrapperCol: { span: 14 },
                                        }}
                                        onFinish={onFilter}
                                        form={form}
                                    >
                                        <Form.Item name="title" label="Title">
                                            <Input placeholder="" />
                                        </Form.Item>
                                        <Form.Item label="Year">
                                            <Row gutter={8}>
                                                <Col span={24}>
                                                    <Form.Item
                                                        name="before"
                                                        label="Before"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={24}>
                                                    <Form.Item
                                                        name="after"
                                                        label="After"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item name="genre" label="Genre">
                                            <Select>
                                                <Option value="comedy">Comedy</Option>
                                                <Option value="tragedy">Tragedy</Option>
                                                <Option value="history">History</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item layout={{
                                            wrapperCol: { offset: 8, span: 16 },
                                        }}>
                                            <Button type="primary" htmlType="submit">Filter</Button>
                                            <Button htmlType="button" onClick={() => {
                                                form.resetFields();
                                            }}>
                                                Clear
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Card>
                            </div>
                        </Col>
                        <Col span={8}> <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                            <h1>List / Matches</h1>
                            {isLoaded ? <Table pagination={false} dataSource={playsList} columns={columns} scroll={{ y: 767 }} /> : null}
                        </div></Col>
                    </Row>
                </Content>
            </Layout>
        </div>
    )
}
