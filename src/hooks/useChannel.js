

// 封装获取频道列表的逻辑

import { getChannelAPI } from "@/apis/article"
import { useEffect, useState } from "react"

const useChannel = () => {
    // 获取频道列表
    const [channelList, setChannelList] = useState([])
    useEffect(() => {
        const getChannelList = async () => {
            const res = await getChannelAPI()
            setChannelList(res.data.channels)
        }
        getChannelList()

    }, [])

    // 把组件中用到的数据 return 出去
    return { channelList }

}

export { useChannel }