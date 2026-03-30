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
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issuedDate: 'Mar 2025',
    expiryDate: 'Mar 2028',
    credentialUrl: 'https://www.credly.com/badges/placeholder-1',
    credentialId: 'ABC-123-DEF',
    logoUrl: 'https://cdn.simpleicons.org/amazonaws/FF9900',
  },
  {
    id: 'cert2',
    title: 'Meta iOS Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    issuedDate: 'Jan 2024',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/placeholder-2',
    logoUrl: 'https://cdn.simpleicons.org/coursera/0056D2',
  },
  {
    id: 'cert3',
    title: 'Google Android Developer Certification',
    issuer: 'Google',
    issuedDate: 'Aug 2023',
    credentialUrl: 'https://www.credential.net/placeholder-3',
    logoUrl: 'https://cdn.simpleicons.org/android/3DDC84',
  },
  {
    id: 'cert4',
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    issuedDate: 'May 2023',
    credentialUrl: 'https://university.mongodb.com/certification/placeholder-4',
    credentialId: 'MDB-DEV-placeholder',
    logoUrl: 'https://cdn.simpleicons.org/mongodb/47A248',
  },
]
