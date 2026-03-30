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
    institution: 'University of Technology',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    startYear: 2018,
    endYear: 2022,
    location: 'Mumbai, India',
    honors: 'First Class with Distinction',
    description: 'Focused on algorithms, distributed systems, and mobile computing. Final year project: an encrypted peer-to-peer messaging protocol.',
  },
  {
    id: 'edu2',
    institution: 'Senior Secondary School',
    degree: 'Higher Secondary Certificate',
    field: 'Science (Physics, Chemistry, Mathematics, Computer Science)',
    startYear: 2016,
    endYear: 2018,
    location: 'Mumbai, India',
    honors: '92.4% aggregate',
  },
]
