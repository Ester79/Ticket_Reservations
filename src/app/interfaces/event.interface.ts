

export interface Event {
  event: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
  },
  sessions: Calendar[];
}

export interface Calendar {
  date: string;
  availability: string;
}
