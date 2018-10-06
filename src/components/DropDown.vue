<template>
    <div>
        <el-dropdown>
  <el-button type="primary">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
    <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>  
    </div>
</template>

<script>
  export default {
    name: "DropDown",
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>

<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>


