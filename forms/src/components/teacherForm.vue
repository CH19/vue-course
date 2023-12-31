
<script lang="ts"  setup>
//   import {pipesCategories} from '../pipes/pipes'
import {ref} from 'vue'
import {Teacher} from '../types';
import {pipesCategories} from '../pipes/pipes';

const emits = defineEmits<{
    data: Teacher[],
}>()
const teacher = ref<Teacher>({
    teacherName: '',
    teacherLastName: '',
    dni: '',
    subjects: [],
    doc: false
});
const newSubjects = ref('');
const addSubject = (materia: string) => teacher.value.subjects.push(materia);
const addTeacher = () => {
    emits('data', teacher.value);
    teacher.value = {
        teacherName: '',
    teacherLastName: '',
    dni: '',
    subjects: [],
    doc: false
    },
    newSubjects.value = '';
};
const materiasDisponibles = ['php', 'javascript', 'typescript', 'python'];
</script>

<template>
    <section>
        <div v-for="(_categoire, key) of teacher" :key="key">
            <label :for="`${key}id`">{{ key }}</label>
            <div v-if="key != 'subjects' && key != 'doc'">
                <input type="text" :placeholder="pipesCategories(key)" @keyup.enter="addTeacher" v-model="teacher[key]" :id="`${key}id`">
            </div>
            <div v-else-if="key === 'subjects'">
                <div v-for="materia of materiasDisponibles">
                    <input type="checkbox" :id="`${materia}id`" :value="materia" v-model="teacher['subjects']">
                    <label :for="`${materia}id`">{{ materia }} {{ teacher['subjects'] }}</label>
                </div>
                <input type="text" :placeholder="pipesCategories(key)" v-model="newSubjects" :id="`${key}id`">
                <button @click="addSubject(newSubjects)">Agregar Materia</button>
            </div>
            <div v-else-if="key === 'doc'">
                <input type="checkbox" v-model="teacher.doc">
            </div>
        </div>
        <button @click="addTeacher">Send</button>
</section>
</template>

<style scoped>
    h1{
        background-color: skyblue;
    }
    input{
        padding: 5px 0 5px 10px;
    }
</style>