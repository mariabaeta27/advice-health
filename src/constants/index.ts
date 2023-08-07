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
  { name: 'Data' },
  { name: 'Horário' },
  {
    name: 'Compromisso'
  },
  {
    name: 'Paciente'
  },
  {
    name: 'Local'
  },
  {
    name: 'Prioridade'
  }
]

const bodyTableWorkspace = [
  {
    id: 1,
    status: true,
    data: '19/02/2023',
    time: '16:00h',
    commitment: 'Consulta Médica',
    patient: '-',
    local: 'Consultório Dra. Fernanda',
    priority: 'Baixa'
  },
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
    id: 4,
    status: true,
    data: '16/06/2023',
    time: '08:00h',
    commitment: 'Reunião',
    patient: '-',
    local: 'Consultorio Centro',
    priority: 'Alta'
  },
  {
    id: 5,
    status: true,
    data: '26/06/2023',
    time: '17:00h',
    commitment: 'Compromisso Pessoal',
    patient: '-',
    local: '-',
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
  }
]

const times = [
  { id: 0, time: '08:00', schedule: { title: 'Paciente João da Mata', subtext: 'Extração do dente 18, 28' }, block: false },
  { id: 1, time: '08:30' },
  { id: 2, time: '09:00', },
  { id: 3, time: '09:30' },
  { id: 4, time: '10:00', schedule: { title: 'Reunião', subtext: 'Comite de formatura' }, block: false },
  { id: 5, time: '10:30' },
  { id: 6, time: '11:00' },
  { id: 7, time: '11:30', block: true },
  { id: 8, time: '12:00', schedule: { title: 'Almoço', subtext: '-' }, block: false }

]



export { months, weeksDay, headersTableWorkspace, bodyTableWorkspace, times }




