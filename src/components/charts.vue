<template>
    <div id="charts" class="charts"></div>
</template>
<script>
import China from '../assets/china.json'
import ipData from '@/assets/data.js'
export default {
    name:'charts',
    data(){
        return{
         china:{} 
          
        }
    },
 mounted () {
     this.data()

    this.charts()
  },
 methods:{
     //数据初始化
      data(){
          this.china=China  
      },
     charts(){
        const proviceCenter =new Map();
        console.log(this.china.features)
        this.china.features.forEach((provice)=>{
            proviceCenter.set(provice.properties.name, provice.properties.center)
        })
        console.log(proviceCenter)
        const barData =ipData.map((item)=>{
            return{
                name:item.name,
                value:[...proviceCenter.get(item.name),item.value]
            }
        }) 
        
        this.$echarts.registerMap('china', this.china)
        const map =this.$echarts.init(document.getElementById('charts'))
        const option ={
            title:{
                text:'2021年各省专利',
                left:'center',
                top:'45'
            },
            visualMap:{
                show:false,
                min: 2000,
                max: 120000,
                inRange: {
                color: ['#666', 'red']
                },
            },    
            geo3D:{
                    map:'china',
                    regionHeight: 5,
                    // 真实感渲染
                    shading: 'realistic',
                    // 将地图设置一个摆放平台
                    groundPlane: {
                        show: true,
                        color: '#666'
                    },
                    viewControl: {
                        projection: 'perspective',
                        // 距离
                        distance: 80,
                        // 角度
                        alpha: 30,
                        beta: 1,
                        animationDurationUpdate: 10,
                        autoRotate: false,
                        minBeta: -360,
                        maxBeta: 360
                    },
                    light: {
                        main: {
                            // color: '#687',
                            intensity: 1.2, // 光照强度
                            shadowQuality: 'high', // 阴影亮度
                            shadow: true, // 是否显示阴影
                            alpha: 45,
                            beta: -25
                        },
                        ambientCubemap: {
                            diffuseIntensity: 1.2,
                            // 光源材质
                            texture: require('./light.png')
                        }
                    },
                    itemStyle:{
                        borderColor:'#489',
                        borderWidth:0.5,
                        color:'#888'
                    },
                    emphasis: {
                        label: {
                            show: false
                        },
                        itemStyle: {
                            // color: 'transparent',
                            color: '#888'
                        }
                    }
                },
           
            
            
            series: {
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                // 倒角尺寸
                bevelSize: 0.5,
                bevelSmoothness: 20,
                data: barData,
                minHeight: 0.2,
                barSize: .5,
                emphasis: {
                label: {
                    show: true,
                    formatter: (param) => {
                    return param.name + ' : ' + param.value[2] + '万件'
                    },
                    distance: 1,
                    textStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                    }
                },
                },
                
                animation: true,
                animationDurationUpdate: 2000
            }
        }
         map.setOption(option)
       
       
     }
 }
}
</script>
<style>
.charts{
    width: 100vw;
  height: 100vh;
}
</style>