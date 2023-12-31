<script lang="ts" setup>
    import {Teacher} from '../types';
    const props = defineProps<{
        teachers: Teacher[],
    }>()
    const allTeachers = props.teachers;
    const options = Object.keys(allTeachers[0]);
</script>
<template lang="">
    <table>
        <caption>Listado de Profesores</caption>
        <tr>
            <th v-for="option of options" :key="option" >{{option}}</th>
        </tr>
        <tr v-for="teacher of allTeachers" :key="teacher">

            <td>{{teacher.teacherName}}</td>
            <td>{{teacher.teacherLastName}}</td>
            <td>{{teacher.dni}}</td>
            <td>{{teacher.subjects}}</td>
            <td>{{teacher.doc}}</td>
        </tr>
    </table>
</template>
<style scoped>
    th,td{
       border: 1px solid #000; 
       padding: 2px;
       gap: 3px;
       width: 140px;
       &:hover{
            background-color: seagreen;
            color: #FFF;
            transition: all ease-in .3s;
        }

    }
</style>