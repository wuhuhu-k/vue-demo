<template>
    <div class="container">
        <div class="menu">
            <el-radio-group v-model="user">
                <el-radio value="1" size="large">管理员</el-radio>
                <el-radio value="2" size="large">会员</el-radio>
                <el-radio value="3" size="large">普通用户</el-radio>
            </el-radio-group>
            <div class="menu-item" v-for="(item, index) in menu" :key="index" @click="() => setComponent(item)">{{
                item.title }}
            </div>
        </div>
        <component :is="com"></component>
    </div>
</template>

<script setup>
import { ref, reactive, markRaw } from "vue"
import PageOne from './components/PageOne.vue';
import PageTwo from './components/PageTwo.vue';
const PAGES = {
    PageOne,
    PageTwo
}

let user = ref(1);
let com = ref();

const menu = reactive([
    {
        title: '页面1',
        id: 'PageOne'
    },
    {
        title: '页面2',
        id: 'PageTwo'
    },
    {
        title: '页面3',
        id: 'PageTwo'
    },
    {
        title: '页面4',
        id: 'PageTwo'
    },
    {
        title: '页面5',
        id: 'PageTwo'
    }
]);

function setComponent(item) {
    com.value = markRaw(PAGES[item.id]);
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .menu {
        width: 300px;
        height: 100%;
        background: rgba(189, 230, 189, 0.5);

        &-item {
            width: 100%;
            height: 50px;
            padding-left: 20px;
            line-height: 50px;
            font-weight: 600;
            background: rgba(108, 151, 230, 0.5);
            border-top: 3px solid rgb(255, 255, 255);

            &:hover {
                background: rgba(108, 151, 230, 1);
            }
        }

        .el-radio-group {
            margin: 30px 20px;

            .el-radio {
                margin: 0 10px;
            }
        }
    }
}
</style>