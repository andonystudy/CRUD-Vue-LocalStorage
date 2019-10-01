const app = new Vue({
    el: '#app',
    data: {
        title: 'TASK with Vue',
        tasks: [],
        newTask: ''
    },
    methods: {
        addTask(){
            if (this.newTask === '') {
                swal("Error!", "Input Empty", "error");
            } else {
                this.tasks.push({
                    name: this.newTask,
                    state: false
                });
                console.log(this.tasks);
                this.newTask = '';
                localStorage.setItem('task-vue', JSON.stringify(this.tasks));
            }            
        },
        editTask(index){
            this.tasks[index].state = true;
            localStorage.setItem('task-vue', JSON.stringify(this.tasks));
            // let btnCheck = document.getElementById(index);
            // btnCheck.style.display = 'none';
            // console.log(btnCheck);
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
            localStorage.setItem('task-vue', JSON.stringify(this.tasks));
        }
    },
    created: function(){
        let dataDB = JSON.parse(localStorage.getItem('task-vue'));
        if (dataDB === null) {
            this.tasks = [];
        }else{
            this.tasks = dataDB;
        }
    }
});