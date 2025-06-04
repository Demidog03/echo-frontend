// // let num: number | string
// // num = 10
// // num = 'hello'
// // // num = true -> ts error
// // console.log(num)

// // Типизировать обьект
// type Speciality = 'Frontend' | 'Backend' | 'QA' | 'UI/UX Design' | 'Devops'

// // type Student = {
// //     name: string
// //     speciality: Speciality
// //     isMarried: boolean
// //     age: number
// //     experience?: number
// // }

// interface Student {
//     name: string
//     speciality: Speciality
//     isMarried: boolean
//     age: number
//     experience?: number
// }

// interface Developer {
//     speciality: Speciality
// }

// const student: Student = {
//     name: 'Riza',
//     speciality: 'Frontend',
//     isMarried: false,
//     age: 23
// }

// const student2: Student = {
//     name: 'Galymzhan',
//     speciality: 'Backend',
//     isMarried: false,
//     age: 21,
//     experience: 2
// }

// // student.age = false
// // student.name = 40

// inteface Object = {
//     property: any
// }

// Record<any, any> -> любой обьект без лимитов

// const obj: Record<any, any> = {

// }