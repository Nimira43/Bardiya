import type { AppEvent, AppUser } from '../types'

export const users : AppUser[] = [
  {
    uid: 'bob-id',
    displayName: 'Bob',
    email: 'bob@test.com',
    photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    uid: 'tom-id',
    displayName: 'Tom',
    email: 'tom@test.com',
    photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    uid: 'nikki-id',
    displayName: 'Nikki',
    email: 'nikki@test.com',
    photoURL: 'https://randomuser.me/api/portraits/women/19.jpg'
  },
  {
    uid: 'kate-id',
    displayName: 'Kate',
    email: 'kate@test.com',
    photoURL: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    uid: 'mike-id',
    displayName: 'Mike',
    email: 'mike@test.com',
    photoURL: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    uid: 'emma-id',
    displayName: 'Emma',
    email: 'emma@test.com',
    photoURL: 'https://randomuser.me/api/portraits/women/55.jpg'
  },
  {
    uid: 'liam-id',
    displayName: 'Liam',
    email: 'liam@test.com',
    photoURL: 'https://randomuser.me/api/portraits/men/66.jpg'
  },
  {

    uid: 'olivia-id',
    displayName: 'Olivia',
    email: 'olivia@test.com',
    photoURL: 'https://randomuser.me/api/portraits/women/75.jpg'
  }
]

export const events: AppEvent[] = [
  {
    id: 'activity-p1',
    title: 'Past Activity 1',
    date: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString(),
    description: 'Activity 2 months ago',
    category: 'drinks',
    city: 'Birmingham',
    venue: 'The Old Joint Stock Pub & Theatre, Birmingham',
    latitude: 52.480020,
    longitude: -1.899780,
    hostUid: users[0].uid, // Bob
    attendees: [
      { id: users[0].uid, displayName: users[0].displayName, photoURL: users[0].photoURL, isHost: true },
      { id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: false },
      { id: users[3].uid, displayName: users[3].displayName, photoURL: users[3].photoURL,isHost: false }
    ],
    attendeeIds: [users[0].uid, users[1].uid, users[3].uid]
  },
  {
    id: 'activity-p2',
    title: 'Past Activity 2',
    date: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
    description: 'Activity 1 month ago',
    category: 'culture',
    city: 'Wolverhampton',
    venue: 'Wolverhampton Art Gallery',
    latitude: 52.586214,
    longitude: -2.130470,
    hostUid: users[2].uid, // Jane
    attendees: [
      { id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL, isHost: true },
      { id: users[4].uid, displayName: users[4].displayName, photoURL: users[4].photoURL, isHost: false },
      { id: users[6].uid, displayName: users[6].displayName, photoURL: users[6].photoURL, isHost: false }
    ],
    attendeeIds: [users[2].uid, users[4].uid, users[6].uid]
  },
  {
    id: 'activity-f1',
    title: 'Future Activity 1',
    date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
    description: 'Activity 1 month in future',
    category: 'culture',
    city: 'Coventry',
    venue: 'Coventry Transport Museum',
    latitude: 52.411810,
    longitude: -1.508030,
    hostUid: users[5].uid, // Emma
    attendees: [
      { id: users[5].uid, displayName: users[5].displayName, photoURL: users[5].photoURL, isHost: true },
      { id: users[7].uid, displayName: users[7].displayName, photoURL: users[7].photoURL, isHost: false }
    ],
    attendeeIds: [users[5].uid, users[7].uid]
  },
  {
    id: 'activity-f2',
    title: 'Future Activity 2',
    date: new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(),
    description: 'Activity 2 months in future',
    category: 'music',
    city: 'Dudley',
    venue: 'Dudley Town Hall',
    latitude: 52.512260,
    longitude: -2.083420,
    hostUid: users[1].uid, // Tom
    attendees: [
      { id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: true },
      { id: users[3].uid, displayName: users[3].displayName, photoURL: users[3].photoURL, isHost: false },
      { id: users[4].uid, displayName: users[4].displayName, photoURL: users[4].photoURL, isHost: false }
    ],
    attendeeIds: [users[1].uid, users[3].uid, users[4].uid]
  },
  {
    id: 'activity-f3',
    title: 'Future Activity 3',
    date: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString(),
    description: 'Activity 3 months in future',
    category: 'drinks',
    city: 'Stourbridge',
    venue: 'The Duke William, Stourbridge',
    latitude: 52.457890,
    longitude: -2.147210,
    hostUid: users[4].uid, // Mike
    attendees: [
      { id: users[4].uid, displayName: users[4].displayName, photoURL: users[4].photoURL, isHost: true }
    ],
    attendeeIds: [users[4].uid]
  },
  {
    id: 'activity-f4',
    title: 'Future Activity 4',
    date: new Date(new Date().setMonth(new Date().getMonth() + 4)).toISOString(),
    description: 'Activity 4 months in future',
    category: 'drinks',
    city: 'Birmingham',
    venue: 'The Wellington, Birmingham',
    latitude: 52.479630,
    longitude: -1.897450,
    hostUid: users[7].uid, // Olivia
    attendees: [
      { id: users[7].uid, displayName: users[7].displayName, photoURL: users[7].photoURL, isHost: true },
      { id: users[0].uid, displayName: users[0].displayName, photoURL: users[0].photoURL, isHost: false },
      { id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL, isHost: false }
    ],
    attendeeIds: [users[7].uid, users[0].uid, users[2].uid]
  }
]
