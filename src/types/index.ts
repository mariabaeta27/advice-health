export type Time = {
  id: number;
  time: string;
  schedule?: {
    title: string;
    subtext: string;
    patientId: number;
  } | undefined;
  block?: boolean | undefined;
}

export type Patient = {
  id: number,
  name: string,
  document: string,
  bday: string,
  address: string,
}

export type Notification = {
  id: number;
  text: string;
  subText: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  icon?: any
}

export type HeadersTable = {
  name: string;
  styles: {
    width: string;
  };
} | {
  name: string;
  styles?: undefined;
}


export type Routes = {
  label: string;
  icon: JSX.Element;
  route: string;
}


export type BodyTableWorkspace = {
  id: number;
  status: boolean;
  data: string;
  time: string;
  commitment: string;
  patient: string;
  local: string;
  priority: string;
}


export type Doctor = {
  id: number;
  name: string;
  specialty: string;
}

export type Times = {
  id: number;
  time: string;
  absent: boolean;
}



export type Schedule = {
  id: number;
  patient: string;
  doctor: string;
  specialty: string;
  procedure: string;
  value: string;
  date: string;
  time: string;
  answered: boolean,
  patientId: number,
  status: boolean
}


export type NotificationNew = {
  id: number;
  type: string;
  informations: {
    name: string;
    datePayment: string;
    value: string;
    dateSheduled: string;
  }[];
}

export type TimeFormated = {
  id: number;
  time: string;
  absent: boolean;
  schedule: Schedule | undefined;
}