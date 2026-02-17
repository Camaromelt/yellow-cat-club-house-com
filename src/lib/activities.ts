export interface Activity {
  id: string
  name: string
  description: string
  ageRange: string
  imagePlaceholder?: string
}

export const activities: Activity[] = [
  {
    id: '1',
    name: 'Padded Play Arena',
    description:
      'A safe, fully padded play space where kids can run, jump, and tumble with confidence. Soft foam mats and cushioned walls make every adventure worry-free.',
    ageRange: 'Ages 1-8',
  },
  {
    id: '2',
    name: 'Pretend Play Village',
    description:
      'A miniature village where imagination comes alive. Kids can pretend to cook, shop, and role-play in our kid-sized play structures.',
    ageRange: 'Ages 2-10',
  },
  {
    id: '3',
    name: 'Climbing Cubes',
    description:
      'Colorful, soft climbing structures designed for little explorers. Build confidence and motor skills in a fully padded environment.',
    ageRange: 'Ages 2-7',
  },
  {
    id: '4',
    name: 'Ball Pit Paradise',
    description:
      'Dive into our giant ball pit! A favorite for sensory play and pure fun. Clean, soft balls in a padded enclosure.',
    ageRange: 'Ages 1-8',
  },
  {
    id: '5',
    name: 'Art & Create Corner',
    description:
      'A creative space for crafts and imaginative play. Safe, age-appropriate materials for budding artists.',
    ageRange: 'Ages 2-12',
  },
  {
    id: '6',
    name: 'Group Play Zone',
    description:
      'Designed for social play! Kids make new friends while playing together in our supervised group activities.',
    ageRange: 'Ages 3-10',
  },
]
