import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Menu, Layout, Empty, Button, Row, Col, Form, List, Card, Select, Tabs } from 'antd';
import Modal from 'react-modal';
import About from './About.jsx';
import {
    HeartTwoTone,
    DeleteTwoTone
} from '@ant-design/icons';
const { Header, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
export const PlayDetails = () => {
    const { id } = useParams();
    const [isLoaded, setIsloaded] = useState(false);
    const [playDescrip, setPlayDescrip] = useState(false);
    const playDetails = JSON.parse(localStorage.getItem("playDetails"));
    useEffect(() => {
        fetch('https://randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=' + id)
            .then(response => response.json())
            .then(data => {
                setPlayDescrip(data);
                setIsloaded(true);
            })
    }, [id])

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); }


    const onTabChange = () => {

    }


    return (
        <div>
            <div>
            {/* <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal> */}
                <About/>
            </div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        
                        <Menu.Item key="1"> <Link to="/"><img src="../logo192.png" alt="home" width="30px" height="30px" /></Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <About/>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Github: https://github.com/lcorn26/web3_asg1.git
                        Group Members: Liam Cormwall, Meet Suthar, Yuan zhou
                        Technology used: React, NPM, Modals, css= @ant-design/icons
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    {playDescrip.message ?
                        <Row>
                            <Col span={24}>
                                <Card>
                                    <Empty description={playDescrip.message} />
                                </Card>
                            </Col>
                        </Row> :
                        <Row gutter={8}>
                            <Col span={8}>
                                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                                    <Card>
                                        <h1>{playDescrip.title}</h1>
                                        <Form>
                                            <Form.Item>
                                                <Select value="1">
                                                    <Option value="1" >ACT 1</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item>
                                                <Select value="1">
                                                    <Option value="1">SCENE 1</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item>
                                                <Select value="1">
                                                    <Option value="1"></Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item><input type="text"></input></Form.Item>
                                        </Form>
                                    </Card>
                                </div>
                            </Col>
                            <Col span={16}>
                                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                                    <Card>
                                        <Tabs defaultActiveKey="1" onChange={onTabChange}>
                                            <TabPane tab="Details" key="1">
                                                <p>{playDetails.title}</p>
                                                <p>Genre: {playDetails.genre}</p>
                                                <p>Wiki: {playDetails.wiki}</p>
                                                <p>Shakespear Org: {playDetails.shakespeareOrg}</p>
                                                <p>Synopsis: {playDetails.synopsis}</p>
                                                <p>gutenberg: {playDetails.gutenberg}</p>
                                            </TabPane>
                                            <TabPane tab="Characters" key="2">
                                                <List dataSource={playDescrip.persona} renderItem={item => (
                                                    <List.Item extra={<p>{item.desc}</p>}>
                                                        {item.player}
                                                    </List.Item>
                                                    
                                                )}>
                                                </List>
                                            </TabPane>
                                            <TabPane tab="Text" key="3">
                                                <h1>{playDescrip.title}</h1>
                                                {playDescrip?.acts?.map((act, index) => {
                                                    return (
                                                        <>
                                                            <h2>{act.name}</h2>
                                                            {act.scenes?.map((scene, index) => {
                                                                return (<><h3>{scene.name}</h3>
                                                                    <hr />
                                                                    <p><b>{scene.title}</b></p>
                                                                    <p>{scene.stageDirection}</p>
                                                                    {scene.speeches?.map((speech, index) => {
                                                                        return (<>
                                                                            <h3><b>{speech.speaker}</b></h3>
                                                                            {speech.lines?.map((line, index) => {
                                                                                return <p>{line}</p>
                                                                            })}
                                                                        </>
                                                                        )
                                                                    })}
                                                                </>)
                                                            })}
                                                        </>
                                                    )
                                                })}
                                            </TabPane>
                                        </Tabs>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    }</Content>
            </Layout>
        </div>
    )
}
