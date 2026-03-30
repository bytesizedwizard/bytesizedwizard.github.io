export interface Certification {
  id: string
  title: string
  issuer: string
  issuedDate: string
  expiryDate?: string
  credentialUrl?: string
  credentialId?: string
  logoUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'cert1',
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google / Coursera',
    issuedDate: 'July 2021',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/F9VWYYMG3J6L',
    credentialId: 'CP5YJ5SD2KX8',
    logoUrl: 'https://cdn.simpleicons.org/coursera/0056D2',
  },
  {
    id: 'cert2',
    title: 'Programming in Google Go Specialization',
    issuer: 'University of California, Irvine / Coursera',
    issuedDate: 'Dec 2022',
    credentialId: '65Y7FRSHW5YQ',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/65Y7FRSHW5YQ',
    logoUrl: 'https://cdn.simpleicons.org/coursera/0056D2',
  },
  {
    id: 'cert3',
    title: 'Introduction to AI',
    issuer: 'Google / Coursera',
    issuedDate: 'Aug 2023',
    credentialId: 'I9ZZ3OCC3SVU',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/I9ZZ3OCC3SVU',
    logoUrl: 'https://cdn.simpleicons.org/coursera/0056D2',
  },
]
