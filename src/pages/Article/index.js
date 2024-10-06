import { Link, useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'

const { Option } = Select
const { RangePicker } = DatePicker

import { Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { useChannel } from '@/hooks/useChannel'
import { useEffect, useState } from 'react'
import { deleteArticleAPI, getArticleListAPI } from '@/apis/article'

const Article = () => {

    const navigate = useNavigate()
    // 筛选功能
    const [reqData, setReqData] = useState({
        status: '',
        channel_id: '',
        begin_pubdate: '',
        end_pubdate: '',
        page: 1,
        per_page: 4
    })

    const onHandleFinnish = (formVal) => {
        const { status, channel_id, date } = formVal
        setReqData({
            ...reqData,
            status,
            channel_id,
            begin_pubdate: date && date[0].format('YYYY-MM-DD'),
            end_pubdate: date && date[1].format('YYYY-MM-DD')
        })
        // 这里不需要再执行拉取数据的操作，通过 reqData 的变动去获取数据
    }

    const { channelList } = useChannel()
    // const [defaultValue, setDefaultValue] = useState()
    // useEffect(() => {
    //     setDefaultValue(0)
    //     console.log('channelList :>> ', channelList, defaultValue);
    // }, [channelList])

    // 定义状态枚举
    const status = {
        1: <Tag color="warning">待审核</Tag>,
        2: <Tag color="success">审核通过</Tag>
    }
    // 准备列数据
    const columns = [
        {
            title: '封面',
            dataIndex: 'cover',
            width: 120,
            render: cover => {
                return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
            }
        },
        {
            title: '标题',
            dataIndex: 'title',
            width: 220
        },
        {
            title: '状态',
            dataIndex: 'status',
            // data：后端返回的状态 status 字段的值
            render: data => status[data]
        },
        {
            title: '发布时间',
            dataIndex: 'pubdate'
        },
        {
            title: '阅读数',
            dataIndex: 'read_count'
        },
        {
            title: '评论数',
            dataIndex: 'comment_count'
        },
        {
            title: '点赞数',
            dataIndex: 'like_count'
        },
        {
            title: '操作',
            render: (data) => {
                return (
                    <Space size="middle">
                        <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => navigate(`/publish?id=${data.id}`)} />
                        <Popconfirm
                            title="确认删除该条文章吗?"
                            onConfirm={() => delArticle(data)}
                            okText="确认"
                            cancelText="取消"
                        >
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            />
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]

    const delArticle = async (item) => {
        const { id } = item
        await deleteArticleAPI(id)
        setReqData({
            ...reqData,
            page: 1
        })

    }

    // 获取文章列表
    const [articleList, setArticleList] = useState([])
    const [count, setCount] = useState(0)


    useEffect(() => {
        const getArticleList = async () => {
            const res = await getArticleListAPI(reqData)
            setArticleList(res.data.results)
            setCount(res.data.total_count)

        }
        getArticleList()
    }, [reqData])

    const onPageChange = (page) => {
        // 修改参数依赖项 引发数据的重新获取数据并触发列表渲染
        setReqData({
            ...reqData,
            page
        })

    }


    return (
        <div>
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '文章列表' },
                    ]} />
                }
                style={{ marginBottom: 20 }}
            >
                <Form initialValues={{ status: '' }} onFinish={onHandleFinnish}>
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            <Radio value={''}>全部</Radio>
                            <Radio value={0}>草稿</Radio>
                            <Radio value={2}>审核通过</Radio>
                        </Radio.Group>
                    </Form.Item>

                    {
                        channelList.length > 0 &&
                        <Form.Item label="频道" name="channel_id">
                            <Select
                                placeholder="请选择文章频道"
                                defaultValue={0}
                                style={{ width: 400 }}
                            >
                                {channelList.map(item =>
                                    <Option key={item.id} value={item.id}>{item.name}</Option>
                                )}
                            </Select>
                        </Form.Item>
                    }

                    <Form.Item label="日期" name="date">
                        {/* 传入locale属性 控制中文显示*/}
                        <RangePicker locale={locale}></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
                            筛选
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title={`根据筛选条件共查询到 ${count} 条结果：`}>
                <Table rowKey="id" columns={columns} dataSource={articleList} pagination={{
                    pageSize: reqData.per_page,
                    current: reqData.page,
                    total: count,
                    showTotal: (total) => `共 ${total} 条`,
                    onChange: onPageChange
                }} />
            </Card>
        </div>
    )
}

export default Article