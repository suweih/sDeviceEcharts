$(function () {
    // 1.2模块tab 
    //手动版 支持点击
    $('.monitor .tabs>a').on('click', function () {
        $(this).addClass('active').siblings('a').removeClass('active')
        // 显示对应索引
        let index = $(this).index()
        $('.monitor .content-wrap').eq(index).show().siblings('.content-wrap').hide()
    })
    //自动版
    let monitorIndex = 0
    setInterval(function () {
        monitorIndex++
        if (monitorIndex == 2) {
            monitorIndex = 0
        }
        $('.monitor .tabs>a').eq(monitorIndex).addClass('active').siblings('a').removeClass('active')
        $('.monitor .content-wrap').eq(monitorIndex).show().siblings('.content-wrap').hide()
    }, 10000)
    // 1.2模块轮播图
    function lunbo() {
        $('.monitor .content-wrap .carousel ul').animate({
            top: -500
        }, 5000, 'linear', function () {
            $('.monitor .content-wrap .carousel ul').css('top', 0)
        })
    }
    lunbo()
    setInterval(lunbo, 5000)


    // 3.1模块tab
    //手动版 支持点击
    let orderData = [{
            orders: '301,987',
            amount: "99834"
        },
        {
            orders: '10,452',
            amount: "17834"
        },
        {
            orders: '8,987',
            amount: "2834"
        },
        {
            orders: '1,987',
            amount: "734"
        },
    ]
    $('.order .order-head>a').on('click', function () {
        $(this).addClass('active').siblings('a').removeClass('active')
        // 显示对应索引
        let index = $(this).index()
        $('.order .order-data p').eq(0).text(orderData[index].orders)
        $('.order .order-data p').eq(1).text(orderData[index].amount)
    })
    let orderIndex = 0 //
    setInterval(function () {
        orderIndex++
        if (orderIndex == 4) {
            orderIndex = 0
        }
        $('.order .order-head>a').eq(orderIndex).addClass('active').siblings('a').removeClass('active')
        $('.order .order-data p').eq(0).text(orderData[orderIndex].orders)
        $('.order .order-data p').eq(1).text(orderData[orderIndex].amount)
    }, 5000)



    // 3.2模块tab



    // 3.4模块tab
    let hotData = [
        [{
                name: '绞肉机',
                num: "2,846"
            },
            {
                name: '压力机',
                num: "5,898"
            },
            {
                name: '压缩机',
                num: "1,823"
            },
            {
                name: '搅拌机',
                num: "6,851"
            },
            {
                name: '打孔机',
                num: "1,861"
            },
            {
                name: '计数机',
                num: "2,861"
            },
        ],
        [{
                name: '绞肉机',
                num: "2,846"
            },
            {
                name: '压缩机',
                num: "1,823"
            },
            {
                name: '打孔机',
                num: "1,861"
            },
            {
                name: '搅拌机',
                num: "6,851"
            },
            {
                name: '压力机',
                num: "5,898"
            },
            {
                name: '计数机',
                num: "2,861"
            },
        ],
        [{
                name: '压力机',
                num: "5,898"
            },
            {
                name: '绞肉机',
                num: "2,846"
            },
            {
                name: '打孔机',
                num: "1,861"
            },
            {
                name: '搅拌机',
                num: "6,851"
            },
            {
                name: '计数机',
                num: "2,861"
            },
            {
                name: '压缩机',
                num: "1,823"
            },
        ],
        [{
                name: '压力机',
                num: "5,898"
            },
            {
                name: '搅拌机',
                num: "6,851"
            },
            {
                name: '绞肉机',
                num: "2,846"
            },
            {
                name: '打孔机',
                num: "1,861"
            },
            {
                name: '压缩机',
                num: "1,823"
            },
            {
                name: '计数机',
                num: "2,861"
            },
        ],
        [{
                name: '压力机',
                num: "5,898"
            },
            {
                name: '压缩机',
                num: "1,823"
            },
            {
                name: '搅拌机',
                num: "6,851"
            },
            {
                name: '打孔机',
                num: "1,861"
            },
            {
                name: '计数机',
                num: "2,861"
            },
            {
                name: '绞肉机',
                num: "2,846"
            },
        ],
    ]

    $('.hot .province ul:eq(0) li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        let index = $(this).index()
        let arr = hotData[index]
        $('.hot .province ul:eq(1) li').each(function (index, e) {
            $(e).children('span').text(arr[index].name)
            $(e).children('b').text(arr[index].num)
        })
    })
    //自动版
    let hotIndex = 0
    setInterval(function () {
        hotIndex++
        if (hotIndex === 5) {
            hotIndex = 0
        }
        $('.hot .province ul:eq(0) li').eq(hotIndex).addClass('active').siblings().removeClass('active')
        let arr = hotData[hotIndex]
        $('.hot .province ul:eq(1) li').each(function (index, e) {
            $(e).children('span').text(arr[index].name)
            $(e).children('b').text(arr[index].num)
        })
    }, 5000)


    // echarts 点位分布图
    $(function () {
        // 基于准备好的dom，初始化echarts实例
        let pieChart = echarts.init(document.getElementById('pie'));
        let option = {
            backgroundColor: '#2b3c50',
            tooltip: {
                trigger: 'item',
                position: 'right',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            series: [{
                name: '点位分布',
                type: 'pie',
                radius: ['5%', '70%'],
                roseType: 'area',
                label: {
                    color: '#fff',
                },
                data: [{
                        value: 350,
                        name: '黄圃'
                    },
                    {
                        value: 286,
                        name: '东凤'
                    },
                    {
                        value: 268,
                        name: '南头'
                    },
                    {
                        value: 249,
                        name: '南朗'
                    },
                    {
                        value: 224,
                        name: '三乡'
                    },
                    {
                        value: 260,
                        name: '小榄'
                    },
                    {
                        value: 187,
                        name: '石歧'
                    },
                    {
                        value: 169,
                        name: '沙溪'
                    }
                ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        pieChart.setOption(option);
        // 自适应
        window.addEventListener('resize', function () {
            pieChart.resize() //自适应
        })
    })
    // echarts 用户总量统计分布图
    $(function () {
        // 基于准备好的dom，初始化echarts实例
        let barChart = echarts.init(document.getElementById('bar'));
        let option = {
            backgroundColor: '#2b3c50',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['上海', '北京', '重庆', '深圳', '广州', '中山', '佛山', '内蒙古'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: 'white',
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    color: 'white',
                },
            }],
            series: [{
                name: '用户数量',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 450, 330, 220, 200]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        barChart.setOption(option);
        // 自适应
        window.addEventListener('resize', function () {
            barChart.resize() //自适应
        })
    })
    // echarts 用户总量统计分布图
    $(function () {
        // 基于准备好的dom，初始化echarts实例
        let lineChart = echarts.init(document.getElementById('line'));
        let option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
        
            },
            legend: {
                textStyle:{
                    color:'white'
                },
                data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
            },
            grid: {
                top: '18%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    color: 'white',
                }
            }, ],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    color: 'white',
                }
            }, ],
            series: [{
                    name: 'Line 1',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [140, 232, 101, 264, 90, 340, 250]
                },
                {
                    name: 'Line 2',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234, 220, 340, 310]
                },
                {
                    name: 'Line 3',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(55, 162, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(116, 21, 219)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 132, 201, 334, 190, 130, 220]
                },
                {
                    name: 'Line 4',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 0, 135)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(135, 0, 157)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 402, 231, 134, 190, 230, 120]
                },
                {
                    name: 'Line 5',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 191, 0)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(224, 62, 76)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 302, 181, 234, 210, 290, 150]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        lineChart.setOption(option);
        // 自适应
        window.addEventListener('resize', function () {
            lineChart.resize() //自适应
        })
    })

    // echarts 用户总量统计分布图
    $(function () {
        // 基于准备好的dom，初始化echarts实例
        let persenChart = echarts.init(document.getElementById('persen'));
        let option = {
            series: [{
                name: 'Access From',
                type: 'pie',
                radius: ['60%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [{
                        value: 1048,
                        name: '中山'
                    },
                    {
                        value: 735,
                        name: '佛山'
                    },
                    {
                        value: 580,
                        name: '江门'
                    },
                    {
                        value: 484,
                        name: '东莞'
                    },
                    {
                        value: 300,
                        name: '广州'
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        persenChart.setOption(option);
        // 自适应
        window.addEventListener('resize', function () {
            persenChart.resize() //自适应
        })
    })

    // echarts 用户总量统计分布图
    $(function () {
        // 基于准备好的dom，初始化echarts实例
        let groChart = echarts.init(document.getElementById('gro'));
        let option = {
            roam: false,
            // 进行相关配置
            tooltip: {}, // 鼠标移到图里面的浮动提示框
            dataRange: {
                show: false,
                min: 0,
                max: 1000,
                text: ["High", "Low"],
                realtime: true,
                calculable: true,
                color: ["orangered", "#FF9B52", "#FFD068"],
            },
            geo: {
                // 这个是重点配置区
                map: "china", // 表示中国地图
                roam: true,
                label: {
                    normal: {
                        show: true, // 是否显示对应地名
                        textStyle: {
                            color: "#fff",
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        borderColor: "#59cdf7",
                        borderWidth: "1",
                        areaColor: "#0c1b2d",
                    },
                    emphasis: {
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
            series: [{
                    type: "scatter",
                    coordinateSystem: "geo", // 对应上方配置
                },
                {
                    name: "启动设备次数", // 浮动框的标题
                    type: "map",
                    geoIndex: 0,
                    data: [{
                            name: "北京",
                            value: 599,
                        },
                        {
                            name: "上海",
                            value: 142,
                        },
                        {
                            name: "黑龙江",
                            value: 44,
                        },
                        {
                            name: "深圳",
                            value: 92,
                        },
                        {
                            name: "湖北",
                            value: 810,
                        },
                        {
                            name: "四川",
                            value: 453,
                        },
                    ],
                },
            ],
        }

        // 使用刚指定的配置项和数据显示图表。
        groChart.setOption(option);
        // 自适应
        window.addEventListener('resize', function () {
            groChart.resize() //自适应
        })
    })



})