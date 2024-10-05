// 柱状图组件
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

//  1、把功能代码都放到组件中
//  2、把可变的部分抽象成prop参数
const BarChart = ({ title }) => {
    const chartRef = useRef(null)
    // 保证dom可用 才进行图标渲染
    useEffect(() => {
        // 获取渲染图标的容器
        // const chartDom = document.getElementById('main');
        //  不用 id 的方式获取容器
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        const option = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: ['Vue', 'React', 'Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [10, 40, 70],
                    type: 'bar'
                }
            ]
        };
        // 完成图标渲染
        option && myChart.setOption(option);
    }, [])

    // return <div id='main' style={{ width: '500px', height: '400px' }}></div>
    return <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
}

export default BarChart