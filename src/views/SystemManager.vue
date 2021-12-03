<template>

  <div class="pageStyle">

    <div class="leftdiv">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo menu "
        @open="handleOpen"
        @close="handleClose"
        @select="handSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1" route="userManager">选项1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="rightdiv">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  name: "SystemManager",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handSelect(index, indexPath) {
      console.log("index", index);
      console.log("indexPath", indexPath);
    }
  }
};
</script>

<style scoped>
.pageStyle {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.menu{
  height: 100%;
}

.leftdiv {
  width: 16%;
  height: 100%;
  margin: 0;
  padding: 0;
  float: left;
}

.rightdiv {
  width: 84%;
  height: 100%;
  padding: 0;
  float: right;
}
</style>