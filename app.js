const app = Vue.createApp({
  data() {
    return {
      courseGoal: "<h3>Finish the course and learn Vue</h3>",
      courseGoal2: "<h3>Master Vue and build amazing apps</h3>",
      vueLink: "https://vuejs.org/",
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.courseGoal
      } else {
        return this.courseGoal2
      }
    }
  },
});

app.mount('#user-goal');