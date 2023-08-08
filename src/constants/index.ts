import { Doctor, NotificationNew, Patient, Schedule, Times } from "../types"

const patients: Patient[] = [
  { id: 1, name: 'João da Mata', document: '000.000.000-00', bday: '28/06/1993', address: 'Rua 1' },
]

const doctors: Doctor[] = [
  { id: 0, name: 'Dra Fernanda', specialty: 'Cirurgia Dentista' }
]

const timesSchedule: Times[] = [
  { id: 0, time: '08:00', absent: false },
  { id: 1, time: '09:00', absent: true },
  { id: 2, time: '09:30', absent: false },
  { id: 3, time: '10:00', absent: true },
  { id: 4, time: '10:30', absent: true },
  { id: 5, time: '11:00', absent: true },
  { id: 6, time: '11:30', absent: true },
  { id: 7, time: '12:00', absent: false },
]



const schedule: Schedule[] = [
  { id: 0, patientId: patients[0].id, patient: patients[0].name, doctor: doctors[0].name, specialty: doctors[0].specialty, procedure: 'Extração', value: '100', date: '20/08/2023', time: timesSchedule[0].time, answered: true, status: true }
]

const notifications: NotificationNew[] = [
  {
    id: 0, type: 'payment', informations: [{
      name: patients[0].name,
      datePayment: '20/08/2023',
      value: schedule[0].value,
      dateSheduled: '25/08/2023'
    }
    ]
  },
  {
    id: 0, type: 'shedule', informations: [{
      name: patients[0].name,
      datePayment: '20/08/2023',
      value: schedule[0].value,
      dateSheduled: '27/08/2023'
    }
    ]
  }
]



const months = [
  {
    id: 0,
    name: 'Janeiro',
  },
  {
    id: 1, name: 'Fevereiro'
  },
  { id: 2, name: 'Março', },
  { id: 3, name: 'Abril', },
  { id: 4, name: 'Maio', },
  { id: 5, name: 'Junho', },
  { id: 6, name: 'Julho', },
  { id: 7, name: 'Agosto', },
  { id: 8, name: 'Setembro', },
  { id: 9, name: 'Outubro', },
  { id: 10, name: 'Novembro', },
  { id: 11, name: 'Dezembro', }
]

const weeksDay = [
  { id: 0, name: 'Dom' },
  { id: 1, name: 'Seg' },
  { id: 2, name: 'Ter' },
  { id: 3, name: 'Qua' },
  { id: 4, name: 'Qui' },
  { id: 5, name: 'Sex' },
  { id: 6, name: 'Sab' },
]


const headersTableWorkspace = [
  {
    name: 'Status',
    styles: {
      width: '10px'
    },
  },
  { name: 'Paciente' },
  {
    name: 'Data'
  },
  {
    name: 'Horário'
  },
  {
    name: 'Dr(a):'
  },
  { name: 'Procedimento' }
]



const headersTableQuery = [
  {
    name: 'Status',
    styles: {
      width: '10px'
    },
  },
  { name: 'Paciente' },
  {
    name: 'Data'
  },
  {
    name: 'Horário'
  },
  {
    name: 'Valor'
  },
  {
    name: 'Procedimento'
  },
  {
    name: ''
  }
]


const bodyTableQuery = [
  {
    id: 0,
    status: false,
    name: patients[0].name,
    doctor: 'Dra. Fernanda',
    date: '20/08/2023',
    time: '08:00h',
    priority: 'Alta'
  },
  {
    id: 1,
    status: true,
    name: 'Maria',
    doctor: 'Dra. Fernanda',
    date: '20/08/2023',
    time: '10:00h',
    priority: 'Alta'
  },

]

const bodyTableWorkspace = [
  {
    id: 2,
    status: true,
    data: '21/02/2023',
    time: '11:00h',
    commitment: 'Paciente',
    patient: 'Heloisa Baeta',
    local: 'Consultório Centro',
    priority: 'Alta'
  },
  {
    id: 3,
    status: true,
    data: '08/04/2023',
    time: '09:00h',
    commitment: 'Paciente',
    patient: 'Fernanda Lopes',
    local: 'Consultório Rua da Bahia',
    priority: 'Média'
  },
  {
    id: 6,
    status: false,
    data: '27/09/2023',
    time: '15:00h',
    commitment: 'Paciente',
    patient: 'Luiz Antonio',
    local: 'Consultório Av. Brail',
    priority: 'Alta'
  },
  {
    id: 7,
    status: false,
    data: '29/10/2023',
    time: '15:00h',
    commitment: 'Paciente',
    patient: 'Luiz Antonio',
    local: 'Consultório Av. Brail',
    priority: 'Alta'
  }
]


const times = [
  { id: 0, time: '08:00', schedule: { title: `${patients[0].name}`, subtext: 'Extração do dente 18, 28', patientId: patients[0].id }, block: false },
  { id: 1, time: '08:30' },
  { id: 2, time: '09:00', },
  { id: 3, time: '09:30' },
  { id: 5, time: '10:30' },
  { id: 6, time: '11:00' },
  { id: 7, time: '11:30', block: true },
  { id: 8, time: '12:00', block: true }

]




export { months, weeksDay, headersTableWorkspace, bodyTableWorkspace, times, patients, headersTableQuery, bodyTableQuery, timesSchedule, schedule, doctors, notifications }




