const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação Física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química'
]

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

function getSubject(subjectNumber) {
    const arrayPosition = Number(subjectNumber - 1)
    return subjects[arrayPosition]
}

module.exports = { subjects, weekdays, getSubject, convertHoursToMinutes }