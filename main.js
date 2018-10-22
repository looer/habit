var app = new Vue({
  el: '#dashboard',
  data: {
    today: new Date().toDateString(),
    message: 'Save',
    saved: false,
    add: false,
    newHabit: '',
    white: 'white',
    habits: [
      { name: 'Wake up early', color: '#2e75b5', done: false },
      { name: 'Exercise', color: 'brown', done: false },
      { name: 'Meditation', color: 'seagreen', done: false },
      { name: 'Running', color: 'lightblue', done: false },
      { name: 'Study German', color: 'orangered', done: false },
    ],
  },
  methods: {
    save: () => {
      app.message = "Saved"
      console.log('save')
    },
    
    complete: (habit) => {
      if (!habit.done) {
      habit.done = true
      console.log('done', habit.name)
      }  
    },
    addHabit: () => {
      app.habits.push({ name: app.newHabit.toLowerCase(), color: getRandomColor(), done: false })
      let last = app.habits[app.habits.length-1]
      //console.log(last)
      app.newHabit = ''
    },
    removeHabit: (habit) => {
      app.habits.splice(app.habits.indexOf(habit), 1)
      console.log('Removed',habit.name)
    },
    showAdd: () => {
      app.add = true
    }
  }
  
  
})
/*
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response.data.title))
  .catch(err => console.log(err))
*/

/*
computed: {
    buttonClass: (habit) => {
      if (habit.done == false) {
        return {
          color: habit.color,
          backgroundColor: 'white'
        } 
      } else {
        return {
          color: 'white',
          backgroundColor: habit.color
        }
      }
    }
    */

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}