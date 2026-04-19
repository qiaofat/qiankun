<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <el-button
      type="primary"
      size="small"
      @click="clearConnect"
    >清除</el-button>
    <div
      v-for="node in nodes"
      :key="node.id"
      :id="node.id"
      class="item"
      :style="{
        top: `${node.top}px`,
        left: `${node.left}px`,
      }"
    >
      {{ node.label }}
    </div>
  </div>
</template>

<script>
import { jsPlumb } from 'jsplumb'

// const jsplumb = jsplumbModule.jsPlumb
export default {
  data() {
    return {
      instance: null,
      // 假设我们有一个节点数组，每个节点都有一个唯一的id
      nodes: [
        { id: 'node1', label: 'Node 1', left: 20, top: 100 },
        { id: 'node2', label: 'Node 2', left: 620, top: 50 },
        { id: 'node3', label: 'Node 3', left: 620, top: 170 },
        { id: 'node4', label: 'Node 4', left: 20, top: 300 },
        { id: 'node5', label: 'Node 5', left: 620, top: 290 }
        // 更多节点...
      ],
      // 假设我们有一个连接数组，每个连接包含源节点和目标节点的id
      connections: [
        { source: 'node1', target: 'node2' },
        { source: 'node1', target: 'node3' },
        { source: 'node4', target: 'node3' },
        { source: 'node4', target: 'node5' }
        // 更多连接...
      ]
    }
  },
  mounted() {
    this.initJsPlumb()
  },
  methods: {
    clearConnect() {
      this.instance.deleteEveryConnection() // 清除所有连接
    },
    initJsPlumb() {
      this.instance = jsPlumb.getInstance({
        // 配置项
        Container: document.querySelector('.container'), // 选择器id
        EndpointStyle: { radius: 0.1, fill: '#f00' }, // 端点样式
        PaintStyle: { stroke: '#4F4F4F', strokeWidth: 1, dashstyle: '2 2' }, // 绘画样式，默认8px线宽  #456
        // HoverPaintStyle: { stroke: '#f00', strokeWidth: 2, dashstyle: '2 2' }, // 默认悬停样式  默认为null
        Anchors: ['Right', 'Left'],
        ConnectionOverlays: [
          // 此处可以设置所有箭头的样式
          [
            'Arrow',
            {
              // 设置参数可以参考中文文档
              location: 1,
              width: 10,
              length: 10
              // paintStyle: {
              //   stroke: '#f00',
              //   fill: '#f00',
              // },
            }
          ]
        ],
        Connector: ['Bezier'] // 要使用的默认连接器的类型：直线，折线，曲线等
        // DrapOptions: { cursor: 'crosshair', zIndex: 2000 },
      })

      // 基于数据动态创建连接
      this.connections.forEach((connection) => {
        this.instance.connect({
          source: connection.source,
          target: connection.target
          // 其他连接配置...
          // paintStyle: { stroke: '#000', strokeWidth: 2 },
          // endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .item {
    width: 200px;
    height: 100px;
    // background: #000;
    border: 1px solid #000;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
