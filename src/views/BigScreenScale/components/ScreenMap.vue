<template>
    <div class="echart" ref="echart" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import * as echarts from 'echarts';
import CHINA from './CHINA.json';

const POINT_DATA = [
    {
        name: '北京市',
        value: [116.405285, 39.904989],
    },
    {
        name: '天津市',
        value: [117.190182, 39.125596],
    },
    {
        name: '河北省',
        value: [114.502461, 38.045474],
    },
    {
        name: '山西省',
        value: [112.549248, 37.857014],
    },
    {
        name: '内蒙古自治区',
        value: [111.670801, 40.818311],
    },
    {
        name: '辽宁省',
        value: [123.429096, 41.796767],
    },
    {
        name: '吉林省',
        value: [125.3245, 43.886841],
    },
    {
        name: '黑龙江省',
        value: [126.642464, 45.756967],
    },
    {
        name: '上海市',
        value: [121.472644, 31.231706],
    },
    {
        name: '江苏省',
        value: [118.767413, 32.041544],
    },
    {
        name: '浙江省',
        value: [120.153576, 30.287459],
    },
    {
        name: '安徽省',
        value: [117.283042, 31.86119],
    },
    {
        name: '福建省',
        value: [119.306239, 26.075302],
    },
    {
        name: '江西省',
        value: [115.892151, 28.676493],
    },
    {
        name: '山东省',
        value: [117.000923, 36.675807],
    },
    {
        name: '河南省',
        value: [113.665412, 34.757975],
    },
    {
        name: '湖北省',
        value: [114.298572, 30.584355],
    },
    {
        name: '湖南省',
        value: [112.982279, 28.19409],
    },
    {
        name: '广东省',
        value: [113.280637, 23.125178],
    },
    {
        name: '广西壮族自治区',
        value: [108.320004, 22.82402],
    },
    {
        name: '海南省',
        value: [110.33119, 20.031971],
    },
    {
        name: '重庆市',
        value: [106.504962, 29.533155],
    },
    {
        name: '四川省',
        value: [104.065735, 30.659462],
    },
    {
        name: '贵州省',
        value: [106.713478, 26.578343],
    },
    {
        name: '云南省',
        value: [102.712251, 25.040609],
    },
    {
        name: '西藏自治区',
        value: [91.132212, 29.660361],
    },
    {
        name: '陕西省',
        value: [108.948024, 34.263161],
    },
    {
        name: '甘肃省',
        value: [103.823557, 36.058039],
    },
    {
        name: '青海省',
        value: [101.778916, 36.623178],
    },
    {
        name: '宁夏回族自治区',
        value: [106.278179, 38.46637],
    },
    {
        name: '新疆维吾尔自治区',
        value: [87.617733, 43.792818],
    },
    {
        name: '台湾省',
        value: [121.509062, 25.044332],
    },
    {
        name: '香港特别行政区',
        value: [114.173355, 22.320048],
    },
    {
        name: '澳门特别行政区',
        value: [113.54909, 22.198951],
    },
];
const ECHARTS_OPTION = {
    tooltip: {
        padding: 0,
        className: 'echarts-tooltip',
        formatter(params) {
            if (params.data) {
                return (
                    params.data.value.map((item) => {
                        const label = `${item.name}(${item.value})`;
                        return `<div style=" height: 100%; width: 100%; color:#fff; background:#003F98">${label}</div>`;
                    }).join('')
                );
            }
            return ('');
        }, // 数据格式化
    },
    geo: {
        map: 'china',
        roam: true, // 不开启缩放和平移
        zoom: 1.23, // 视角缩放比例
        // 滚轮缩放的极限控制
        scaleLimit: {
            min: 1.23,
            max: 10,
        },
        itemStyle: {
            normal: {
                areaColor: '#DAE6FF',
                borderColor: '#003F98',
            },
            emphasis: {
                areaColor: '#6A93CB', // 鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        },
    },
    series: [
        {
            name: '省会坐标点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: POINT_DATA,
            symbolSize: 5,
            showEffectOn: 'render',
            silent: true, // 不触发鼠标响应
            rippleEffect: {
                color: '#003F98',
                brushType: 'fill',
            },
            itemStyle: {
                color: '#003F98',
                shadowBlur: 6,
                shadowColor: '#333',
            },
            emphasis: {
                disabled: true,
                scale: false,
            },
        },
        {
            name: '打点',
            type: 'scatter',
            coordinateSystem: 'geo',
            //   symbol: 'image://' + require('../../../assets/img/homePage/flag.png'),
            symbolOffset: ['32%', '-50%'],
            data: [],
            symbolSize: 20,
            showEffectOn: 'render',
            silent: true, // 不触发鼠标响应
            emphasis: {
                disabled: true,
                scale: false,
            },
        },
        {
            name: '',
            type: 'map',
            geoIndex: 0,
            data: [],
        },
    ],
};

let scatterData = reactive([]);
let xmapData = reactive([]);
let chartInstance = reactive(null);
const echart = ref();

onMounted(() => {
    initEcharts();
})

function initEcharts() {
    chartInstance = echarts.init(echart.value);
    echarts.registerMap('china', CHINA, {
    });
    const options = ECHARTS_OPTION;
    options.series.forEach(item => {
        if (item.type === 'scatter') {
            item.data = scatterData;
        }
        if (item.type === 'map') {
            item.data = xmapData;
        }
    })
    chartInstance.setOption(options);
    // window.addEventListener('resize', () => {
    //     chartInstance.resize
    // }, true);
};
</script>

<style lang="scss"></style>