let courses = [

   {
   
   title: 'SMM',
   
   howLong: 3
   
   },
   
   {
   
   title: 'Dev',
   
   howLong: 6
   
   },
   
   {
   
   title: 'Graph',
   
   howLong: 4
   
   },
   
   ]
   
   let earnings = {
   
   total: 0,
   
   max: {},
   
   min: {}
   
   }
   
   let m = 0
   
   let w = 0
   
   let average_age = 0
   
   let smm = 0
   
   let dev = 0
   
   let graph = 0
   
   let students = [
   
   {
   
   sex: 'm',
   
   age: 14,
   
   payment: 1220000,
   
   course: {
   
   title: 'SMM',
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 24,
   
   payment: 1883000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 16,
   
   payment: 2190000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 19,
   
   payment: 718000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 15,
   
   payment: 2195000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 24,
   
   payment: 460000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 14,
   
   payment: 560000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 22,
   
   payment: 160000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 26,
   
   payment: 883000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 26,
   
   payment: 750000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 23,
   
   payment: 212000,
   
   course: {
   
   title: 'Graph',
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 24,
   
   payment: 883000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 27,
   
   payment: 190000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 19,
   
   payment: 210000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 21,
   
   payment: 770000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 18,
   
   payment: 1200000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 51,
   
   payment: 880000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 51,
   
   payment: 2430000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 33,
   
   payment: 1277000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 21,
   
   payment: 2750000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   ]
   
   // В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*
   
   // 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*
   
   // 2. Сохранить количество девочек и мальчиков внутри переменных m и w*
   
   // 3. Сохранить заработок учебного центра в earning.total*
   
   // 4. Узнать кто больше всех платит за обучение в earning.max*
   
   // 5. Узнать кто меньше всех платит за обучение в earning.min*
   
   // 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*
   
   // 7. Посчитать средний возраст студентов в average_age*
   
   
   const setup = () => {
    // 1  добавил ключ //
    for (let i of students) {
    if (i.course.title == 'SMM') {
    i.course.howLong = 3
    } else if (i.course.title == 'Dev') {
    i.course.howLong = 6
    } else if (i.course.title == 'Graph') {
    i.course.howLong = 4
    }
    
    }
   
    // 2 разделил девушек и малчиков и сохранил //
    for (let i of students) {
    if (i.sex == 'm') {
    m++
    } else if (i.sex == 'w') {
    w++
    }
    }
    // 3  прибль центра //
    for (let i of students) {
    earnings.total += i.payment
    }
    // 4 сколько студентов учится на каждом курсе //
    for (let i of students) {
    if (i.course.title == 'SMM') {
    smm++
    } else if (i.course.title == 'Dev') {
    dev++
    } else if (i.course.title == 'Graph') {
    graph++
    }
    }
   
    // 5 средний возраст студента //
    let sumage = 0
    for (let i of students) {
    sumage += i.age
    average_age = sumage / students.length
    }
   
   
    // 6 кто платит максимально//
    let max_pric = students.flat().sort((a, b) => a.payment - b.payment)
    earnings.max = max_pric.pop()
   
   
    // 7 кто платит минимально //
    let min_pric = students.flat().sort((a, b) => a.payment - b.payment)
    earnings.min = min_pric.shift()
   
   
    console.log(courses);
    console.log(m, w);
    console.log(earnings.total);
    console.log(smm, dev, graph);
    console.log(average_age);
    console.log(earnings.max);
    console.log(earnings.min);
   }
   
   console.log(setup());








