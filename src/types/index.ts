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
