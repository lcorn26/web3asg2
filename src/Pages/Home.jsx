import React,  { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Form, Input, Button, Row, Col } from 'antd';
import { useNavigate } from "react-router-dom";
<link rel="stylesheet" href="index.css"></link>

export const Home = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsloaded] = useState(false);
    const [playsList, setPlaysList] = useState([]);

   useEffect(() => {
        fetch('https://web3asg2-334911.uc.r.appspot.com/api/list')
        .then(response => response.json())
            .then(data => { localStorage.setItem('playsList', JSON.stringify(data))
            setPlaysList(data)
        })
        setIsloaded(true);
    }, [])



    const onFinish = (value) => {
        let FilteredData = [];
        if(value.title){
            let titleData = playsList.filter(plays => plays.title.includes(value.title));
            console.log(titleData);
            FilteredData.push(...titleData);
        }
        localStorage.setItem('playsList', JSON.stringify(FilteredData));
        navigate("/play-list");
    }
    return (
        <div>
            <Row justify="space-around" align="middle">
                <Col span={12}>
                    <h1 id="mainHeader">Play Browser</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="title"
                        >
                            <Input placeholder="Title" />
                        </Form.Item>
                        <Form.Item>
                            <Row justify="space-around">
                                <Col span={8}>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Show Matching Plays
                                    </Button>
                                </Col>
                                <Col span={8} offset={8}>
                                    <Link to={"/play-list"}><Button type="primary" htmlType="button" className="login-form-button">
                                        Show All Plays
                                    </Button></Link>
                                </Col>
                            </Row>
                        </Form.Item>
                        <div id="credit">Image retrieved from NIKON CORPORATION, NIKON D750 Published on December 26, 2017</div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
