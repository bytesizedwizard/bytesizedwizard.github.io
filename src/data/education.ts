export interface EducationEntry {
  id: string
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number | 'present'
  location: string
  honors?: string
  description?: string
}

export const education: EducationEntry[] = [
  {
    id: 'edu1',
    institution: 'University of Pune',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    startYear: 2013,
    endYear: 2017,
    location: 'Pune, India',
    honors: 'First Class with Distinction',
    description: 'Focused on algorithms, distributed systems, and mobile computing. Final year project: an encrypted peer-to-peer messaging protocol.',
  },
  {
    id: 'edu2',
    institution: 'Senior Secondary School',
    degree: 'Higher Secondary Certificate',
    field: 'Science (Physics, Chemistry, Mathematics, Computer Science)',
    startYear: 2011,
    endYear: 2013,
    location: 'Pune, India',
    honors: '82% aggregate',
  },
]
