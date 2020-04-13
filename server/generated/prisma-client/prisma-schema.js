module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateApplicant {
  count: Int!
}

type AggregateContact {
  count: Int!
}

type AggregateEmployer {
  count: Int!
}

type AggregateJobPost {
  count: Int!
}

type AggregateResume {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Applicant {
  id: ID!
  email: String!
  linkedin: String!
  github: String!
  appliedJobs(where: JobPostWhereInput, orderBy: JobPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JobPost!]
  resume(where: ResumeWhereInput, orderBy: ResumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resume!]
}

type ApplicantConnection {
  pageInfo: PageInfo!
  edges: [ApplicantEdge]!
  aggregate: AggregateApplicant!
}

input ApplicantCreateInput {
  id: ID
  email: String!
  linkedin: String!
  github: String!
  appliedJobs: JobPostCreateManyWithoutViewedInput
  resume: ResumeCreateManyInput
}

input ApplicantCreateManyWithoutAppliedJobsInput {
  create: [ApplicantCreateWithoutAppliedJobsInput!]
  connect: [ApplicantWhereUniqueInput!]
}

input ApplicantCreateOneInput {
  create: ApplicantCreateInput
  connect: ApplicantWhereUniqueInput
}

input ApplicantCreateWithoutAppliedJobsInput {
  id: ID
  email: String!
  linkedin: String!
  github: String!
  resume: ResumeCreateManyInput
}

type ApplicantEdge {
  node: Applicant!
  cursor: String!
}

enum ApplicantOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  linkedin_ASC
  linkedin_DESC
  github_ASC
  github_DESC
}

type ApplicantPreviousValues {
  id: ID!
  email: String!
  linkedin: String!
  github: String!
}

input ApplicantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  linkedin: String
  linkedin_not: String
  linkedin_in: [String!]
  linkedin_not_in: [String!]
  linkedin_lt: String
  linkedin_lte: String
  linkedin_gt: String
  linkedin_gte: String
  linkedin_contains: String
  linkedin_not_contains: String
  linkedin_starts_with: String
  linkedin_not_starts_with: String
  linkedin_ends_with: String
  linkedin_not_ends_with: String
  github: String
  github_not: String
  github_in: [String!]
  github_not_in: [String!]
  github_lt: String
  github_lte: String
  github_gt: String
  github_gte: String
  github_contains: String
  github_not_contains: String
  github_starts_with: String
  github_not_starts_with: String
  github_ends_with: String
  github_not_ends_with: String
  AND: [ApplicantScalarWhereInput!]
  OR: [ApplicantScalarWhereInput!]
  NOT: [ApplicantScalarWhereInput!]
}

type ApplicantSubscriptionPayload {
  mutation: MutationType!
  node: Applicant
  updatedFields: [String!]
  previousValues: ApplicantPreviousValues
}

input ApplicantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApplicantWhereInput
  AND: [ApplicantSubscriptionWhereInput!]
  OR: [ApplicantSubscriptionWhereInput!]
  NOT: [ApplicantSubscriptionWhereInput!]
}

input ApplicantUpdateDataInput {
  email: String
  linkedin: String
  github: String
  appliedJobs: JobPostUpdateManyWithoutViewedInput
  resume: ResumeUpdateManyInput
}

input ApplicantUpdateInput {
  email: String
  linkedin: String
  github: String
  appliedJobs: JobPostUpdateManyWithoutViewedInput
  resume: ResumeUpdateManyInput
}

input ApplicantUpdateManyDataInput {
  email: String
  linkedin: String
  github: String
}

input ApplicantUpdateManyMutationInput {
  email: String
  linkedin: String
  github: String
}

input ApplicantUpdateManyWithoutAppliedJobsInput {
  create: [ApplicantCreateWithoutAppliedJobsInput!]
  delete: [ApplicantWhereUniqueInput!]
  connect: [ApplicantWhereUniqueInput!]
  set: [ApplicantWhereUniqueInput!]
  disconnect: [ApplicantWhereUniqueInput!]
  update: [ApplicantUpdateWithWhereUniqueWithoutAppliedJobsInput!]
  upsert: [ApplicantUpsertWithWhereUniqueWithoutAppliedJobsInput!]
  deleteMany: [ApplicantScalarWhereInput!]
  updateMany: [ApplicantUpdateManyWithWhereNestedInput!]
}

input ApplicantUpdateManyWithWhereNestedInput {
  where: ApplicantScalarWhereInput!
  data: ApplicantUpdateManyDataInput!
}

input ApplicantUpdateOneInput {
  create: ApplicantCreateInput
  update: ApplicantUpdateDataInput
  upsert: ApplicantUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ApplicantWhereUniqueInput
}

input ApplicantUpdateWithoutAppliedJobsDataInput {
  email: String
  linkedin: String
  github: String
  resume: ResumeUpdateManyInput
}

input ApplicantUpdateWithWhereUniqueWithoutAppliedJobsInput {
  where: ApplicantWhereUniqueInput!
  data: ApplicantUpdateWithoutAppliedJobsDataInput!
}

input ApplicantUpsertNestedInput {
  update: ApplicantUpdateDataInput!
  create: ApplicantCreateInput!
}

input ApplicantUpsertWithWhereUniqueWithoutAppliedJobsInput {
  where: ApplicantWhereUniqueInput!
  update: ApplicantUpdateWithoutAppliedJobsDataInput!
  create: ApplicantCreateWithoutAppliedJobsInput!
}

input ApplicantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  linkedin: String
  linkedin_not: String
  linkedin_in: [String!]
  linkedin_not_in: [String!]
  linkedin_lt: String
  linkedin_lte: String
  linkedin_gt: String
  linkedin_gte: String
  linkedin_contains: String
  linkedin_not_contains: String
  linkedin_starts_with: String
  linkedin_not_starts_with: String
  linkedin_ends_with: String
  linkedin_not_ends_with: String
  github: String
  github_not: String
  github_in: [String!]
  github_not_in: [String!]
  github_lt: String
  github_lte: String
  github_gt: String
  github_gte: String
  github_contains: String
  github_not_contains: String
  github_starts_with: String
  github_not_starts_with: String
  github_ends_with: String
  github_not_ends_with: String
  appliedJobs_every: JobPostWhereInput
  appliedJobs_some: JobPostWhereInput
  appliedJobs_none: JobPostWhereInput
  resume_every: ResumeWhereInput
  resume_some: ResumeWhereInput
  resume_none: ResumeWhereInput
  AND: [ApplicantWhereInput!]
  OR: [ApplicantWhereInput!]
  NOT: [ApplicantWhereInput!]
}

input ApplicantWhereUniqueInput {
  id: ID
  email: String
}

type BatchPayload {
  count: Long!
}

type Contact {
  id: ID!
  email: String
  website: String
}

type ContactConnection {
  pageInfo: PageInfo!
  edges: [ContactEdge]!
  aggregate: AggregateContact!
}

input ContactCreateInput {
  id: ID
  email: String
  website: String
}

input ContactCreateOneInput {
  create: ContactCreateInput
  connect: ContactWhereUniqueInput
}

type ContactEdge {
  node: Contact!
  cursor: String!
}

enum ContactOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  website_ASC
  website_DESC
}

type ContactPreviousValues {
  id: ID!
  email: String
  website: String
}

type ContactSubscriptionPayload {
  mutation: MutationType!
  node: Contact
  updatedFields: [String!]
  previousValues: ContactPreviousValues
}

input ContactSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContactWhereInput
  AND: [ContactSubscriptionWhereInput!]
  OR: [ContactSubscriptionWhereInput!]
  NOT: [ContactSubscriptionWhereInput!]
}

input ContactUpdateDataInput {
  email: String
  website: String
}

input ContactUpdateInput {
  email: String
  website: String
}

input ContactUpdateManyMutationInput {
  email: String
  website: String
}

input ContactUpdateOneInput {
  create: ContactCreateInput
  update: ContactUpdateDataInput
  upsert: ContactUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ContactWhereUniqueInput
}

input ContactUpsertNestedInput {
  update: ContactUpdateDataInput!
  create: ContactCreateInput!
}

input ContactWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  website: String
  website_not: String
  website_in: [String!]
  website_not_in: [String!]
  website_lt: String
  website_lte: String
  website_gt: String
  website_gte: String
  website_contains: String
  website_not_contains: String
  website_starts_with: String
  website_not_starts_with: String
  website_ends_with: String
  website_not_ends_with: String
  AND: [ContactWhereInput!]
  OR: [ContactWhereInput!]
  NOT: [ContactWhereInput!]
}

input ContactWhereUniqueInput {
  id: ID
}

scalar DateTime

type Employer {
  id: ID!
  jobpostings(where: JobPostWhereInput, orderBy: JobPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JobPost!]
  contact: Contact
}

type EmployerConnection {
  pageInfo: PageInfo!
  edges: [EmployerEdge]!
  aggregate: AggregateEmployer!
}

input EmployerCreateInput {
  id: ID
  jobpostings: JobPostCreateManyWithoutEmployerInput
  contact: ContactCreateOneInput
}

input EmployerCreateOneInput {
  create: EmployerCreateInput
  connect: EmployerWhereUniqueInput
}

input EmployerCreateOneWithoutJobpostingsInput {
  create: EmployerCreateWithoutJobpostingsInput
  connect: EmployerWhereUniqueInput
}

input EmployerCreateWithoutJobpostingsInput {
  id: ID
  contact: ContactCreateOneInput
}

type EmployerEdge {
  node: Employer!
  cursor: String!
}

enum EmployerOrderByInput {
  id_ASC
  id_DESC
}

type EmployerPreviousValues {
  id: ID!
}

type EmployerSubscriptionPayload {
  mutation: MutationType!
  node: Employer
  updatedFields: [String!]
  previousValues: EmployerPreviousValues
}

input EmployerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmployerWhereInput
  AND: [EmployerSubscriptionWhereInput!]
  OR: [EmployerSubscriptionWhereInput!]
  NOT: [EmployerSubscriptionWhereInput!]
}

input EmployerUpdateDataInput {
  jobpostings: JobPostUpdateManyWithoutEmployerInput
  contact: ContactUpdateOneInput
}

input EmployerUpdateInput {
  jobpostings: JobPostUpdateManyWithoutEmployerInput
  contact: ContactUpdateOneInput
}

input EmployerUpdateOneInput {
  create: EmployerCreateInput
  update: EmployerUpdateDataInput
  upsert: EmployerUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: EmployerWhereUniqueInput
}

input EmployerUpdateOneRequiredWithoutJobpostingsInput {
  create: EmployerCreateWithoutJobpostingsInput
  update: EmployerUpdateWithoutJobpostingsDataInput
  upsert: EmployerUpsertWithoutJobpostingsInput
  connect: EmployerWhereUniqueInput
}

input EmployerUpdateWithoutJobpostingsDataInput {
  contact: ContactUpdateOneInput
}

input EmployerUpsertNestedInput {
  update: EmployerUpdateDataInput!
  create: EmployerCreateInput!
}

input EmployerUpsertWithoutJobpostingsInput {
  update: EmployerUpdateWithoutJobpostingsDataInput!
  create: EmployerCreateWithoutJobpostingsInput!
}

input EmployerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  jobpostings_every: JobPostWhereInput
  jobpostings_some: JobPostWhereInput
  jobpostings_none: JobPostWhereInput
  contact: ContactWhereInput
  AND: [EmployerWhereInput!]
  OR: [EmployerWhereInput!]
  NOT: [EmployerWhereInput!]
}

input EmployerWhereUniqueInput {
  id: ID
}

type JobPost {
  id: ID!
  createdAt: DateTime!
  industry: String!
  location: String!
  discipline: [String!]!
  totalRoles: Int!
  employer: Employer!
  viewed(where: ApplicantWhereInput, orderBy: ApplicantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Applicant!]
  description: String
}

type JobPostConnection {
  pageInfo: PageInfo!
  edges: [JobPostEdge]!
  aggregate: AggregateJobPost!
}

input JobPostCreatedisciplineInput {
  set: [String!]
}

input JobPostCreateInput {
  id: ID
  industry: String!
  location: String!
  discipline: JobPostCreatedisciplineInput
  totalRoles: Int!
  employer: EmployerCreateOneWithoutJobpostingsInput!
  viewed: ApplicantCreateManyWithoutAppliedJobsInput
  description: String
}

input JobPostCreateManyWithoutEmployerInput {
  create: [JobPostCreateWithoutEmployerInput!]
  connect: [JobPostWhereUniqueInput!]
}

input JobPostCreateManyWithoutViewedInput {
  create: [JobPostCreateWithoutViewedInput!]
  connect: [JobPostWhereUniqueInput!]
}

input JobPostCreateWithoutEmployerInput {
  id: ID
  industry: String!
  location: String!
  discipline: JobPostCreatedisciplineInput
  totalRoles: Int!
  viewed: ApplicantCreateManyWithoutAppliedJobsInput
  description: String
}

input JobPostCreateWithoutViewedInput {
  id: ID
  industry: String!
  location: String!
  discipline: JobPostCreatedisciplineInput
  totalRoles: Int!
  employer: EmployerCreateOneWithoutJobpostingsInput!
  description: String
}

type JobPostEdge {
  node: JobPost!
  cursor: String!
}

enum JobPostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  industry_ASC
  industry_DESC
  location_ASC
  location_DESC
  totalRoles_ASC
  totalRoles_DESC
  description_ASC
  description_DESC
}

type JobPostPreviousValues {
  id: ID!
  createdAt: DateTime!
  industry: String!
  location: String!
  discipline: [String!]!
  totalRoles: Int!
  description: String
}

input JobPostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  industry: String
  industry_not: String
  industry_in: [String!]
  industry_not_in: [String!]
  industry_lt: String
  industry_lte: String
  industry_gt: String
  industry_gte: String
  industry_contains: String
  industry_not_contains: String
  industry_starts_with: String
  industry_not_starts_with: String
  industry_ends_with: String
  industry_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  totalRoles: Int
  totalRoles_not: Int
  totalRoles_in: [Int!]
  totalRoles_not_in: [Int!]
  totalRoles_lt: Int
  totalRoles_lte: Int
  totalRoles_gt: Int
  totalRoles_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [JobPostScalarWhereInput!]
  OR: [JobPostScalarWhereInput!]
  NOT: [JobPostScalarWhereInput!]
}

type JobPostSubscriptionPayload {
  mutation: MutationType!
  node: JobPost
  updatedFields: [String!]
  previousValues: JobPostPreviousValues
}

input JobPostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JobPostWhereInput
  AND: [JobPostSubscriptionWhereInput!]
  OR: [JobPostSubscriptionWhereInput!]
  NOT: [JobPostSubscriptionWhereInput!]
}

input JobPostUpdatedisciplineInput {
  set: [String!]
}

input JobPostUpdateInput {
  industry: String
  location: String
  discipline: JobPostUpdatedisciplineInput
  totalRoles: Int
  employer: EmployerUpdateOneRequiredWithoutJobpostingsInput
  viewed: ApplicantUpdateManyWithoutAppliedJobsInput
  description: String
}

input JobPostUpdateManyDataInput {
  industry: String
  location: String
  discipline: JobPostUpdatedisciplineInput
  totalRoles: Int
  description: String
}

input JobPostUpdateManyMutationInput {
  industry: String
  location: String
  discipline: JobPostUpdatedisciplineInput
  totalRoles: Int
  description: String
}

input JobPostUpdateManyWithoutEmployerInput {
  create: [JobPostCreateWithoutEmployerInput!]
  delete: [JobPostWhereUniqueInput!]
  connect: [JobPostWhereUniqueInput!]
  set: [JobPostWhereUniqueInput!]
  disconnect: [JobPostWhereUniqueInput!]
  update: [JobPostUpdateWithWhereUniqueWithoutEmployerInput!]
  upsert: [JobPostUpsertWithWhereUniqueWithoutEmployerInput!]
  deleteMany: [JobPostScalarWhereInput!]
  updateMany: [JobPostUpdateManyWithWhereNestedInput!]
}

input JobPostUpdateManyWithoutViewedInput {
  create: [JobPostCreateWithoutViewedInput!]
  delete: [JobPostWhereUniqueInput!]
  connect: [JobPostWhereUniqueInput!]
  set: [JobPostWhereUniqueInput!]
  disconnect: [JobPostWhereUniqueInput!]
  update: [JobPostUpdateWithWhereUniqueWithoutViewedInput!]
  upsert: [JobPostUpsertWithWhereUniqueWithoutViewedInput!]
  deleteMany: [JobPostScalarWhereInput!]
  updateMany: [JobPostUpdateManyWithWhereNestedInput!]
}

input JobPostUpdateManyWithWhereNestedInput {
  where: JobPostScalarWhereInput!
  data: JobPostUpdateManyDataInput!
}

input JobPostUpdateWithoutEmployerDataInput {
  industry: String
  location: String
  discipline: JobPostUpdatedisciplineInput
  totalRoles: Int
  viewed: ApplicantUpdateManyWithoutAppliedJobsInput
  description: String
}

input JobPostUpdateWithoutViewedDataInput {
  industry: String
  location: String
  discipline: JobPostUpdatedisciplineInput
  totalRoles: Int
  employer: EmployerUpdateOneRequiredWithoutJobpostingsInput
  description: String
}

input JobPostUpdateWithWhereUniqueWithoutEmployerInput {
  where: JobPostWhereUniqueInput!
  data: JobPostUpdateWithoutEmployerDataInput!
}

input JobPostUpdateWithWhereUniqueWithoutViewedInput {
  where: JobPostWhereUniqueInput!
  data: JobPostUpdateWithoutViewedDataInput!
}

input JobPostUpsertWithWhereUniqueWithoutEmployerInput {
  where: JobPostWhereUniqueInput!
  update: JobPostUpdateWithoutEmployerDataInput!
  create: JobPostCreateWithoutEmployerInput!
}

input JobPostUpsertWithWhereUniqueWithoutViewedInput {
  where: JobPostWhereUniqueInput!
  update: JobPostUpdateWithoutViewedDataInput!
  create: JobPostCreateWithoutViewedInput!
}

input JobPostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  industry: String
  industry_not: String
  industry_in: [String!]
  industry_not_in: [String!]
  industry_lt: String
  industry_lte: String
  industry_gt: String
  industry_gte: String
  industry_contains: String
  industry_not_contains: String
  industry_starts_with: String
  industry_not_starts_with: String
  industry_ends_with: String
  industry_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  totalRoles: Int
  totalRoles_not: Int
  totalRoles_in: [Int!]
  totalRoles_not_in: [Int!]
  totalRoles_lt: Int
  totalRoles_lte: Int
  totalRoles_gt: Int
  totalRoles_gte: Int
  employer: EmployerWhereInput
  viewed_every: ApplicantWhereInput
  viewed_some: ApplicantWhereInput
  viewed_none: ApplicantWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [JobPostWhereInput!]
  OR: [JobPostWhereInput!]
  NOT: [JobPostWhereInput!]
}

input JobPostWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createApplicant(data: ApplicantCreateInput!): Applicant!
  updateApplicant(data: ApplicantUpdateInput!, where: ApplicantWhereUniqueInput!): Applicant
  updateManyApplicants(data: ApplicantUpdateManyMutationInput!, where: ApplicantWhereInput): BatchPayload!
  upsertApplicant(where: ApplicantWhereUniqueInput!, create: ApplicantCreateInput!, update: ApplicantUpdateInput!): Applicant!
  deleteApplicant(where: ApplicantWhereUniqueInput!): Applicant
  deleteManyApplicants(where: ApplicantWhereInput): BatchPayload!
  createContact(data: ContactCreateInput!): Contact!
  updateContact(data: ContactUpdateInput!, where: ContactWhereUniqueInput!): Contact
  updateManyContacts(data: ContactUpdateManyMutationInput!, where: ContactWhereInput): BatchPayload!
  upsertContact(where: ContactWhereUniqueInput!, create: ContactCreateInput!, update: ContactUpdateInput!): Contact!
  deleteContact(where: ContactWhereUniqueInput!): Contact
  deleteManyContacts(where: ContactWhereInput): BatchPayload!
  createEmployer(data: EmployerCreateInput!): Employer!
  updateEmployer(data: EmployerUpdateInput!, where: EmployerWhereUniqueInput!): Employer
  upsertEmployer(where: EmployerWhereUniqueInput!, create: EmployerCreateInput!, update: EmployerUpdateInput!): Employer!
  deleteEmployer(where: EmployerWhereUniqueInput!): Employer
  deleteManyEmployers(where: EmployerWhereInput): BatchPayload!
  createJobPost(data: JobPostCreateInput!): JobPost!
  updateJobPost(data: JobPostUpdateInput!, where: JobPostWhereUniqueInput!): JobPost
  updateManyJobPosts(data: JobPostUpdateManyMutationInput!, where: JobPostWhereInput): BatchPayload!
  upsertJobPost(where: JobPostWhereUniqueInput!, create: JobPostCreateInput!, update: JobPostUpdateInput!): JobPost!
  deleteJobPost(where: JobPostWhereUniqueInput!): JobPost
  deleteManyJobPosts(where: JobPostWhereInput): BatchPayload!
  createResume(data: ResumeCreateInput!): Resume!
  updateResume(data: ResumeUpdateInput!, where: ResumeWhereUniqueInput!): Resume
  updateManyResumes(data: ResumeUpdateManyMutationInput!, where: ResumeWhereInput): BatchPayload!
  upsertResume(where: ResumeWhereUniqueInput!, create: ResumeCreateInput!, update: ResumeUpdateInput!): Resume!
  deleteResume(where: ResumeWhereUniqueInput!): Resume
  deleteManyResumes(where: ResumeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  applicant(where: ApplicantWhereUniqueInput!): Applicant
  applicants(where: ApplicantWhereInput, orderBy: ApplicantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Applicant]!
  applicantsConnection(where: ApplicantWhereInput, orderBy: ApplicantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicantConnection!
  contact(where: ContactWhereUniqueInput!): Contact
  contacts(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contact]!
  contactsConnection(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactConnection!
  employer(where: EmployerWhereUniqueInput!): Employer
  employers(where: EmployerWhereInput, orderBy: EmployerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employer]!
  employersConnection(where: EmployerWhereInput, orderBy: EmployerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployerConnection!
  jobPost(where: JobPostWhereUniqueInput!): JobPost
  jobPosts(where: JobPostWhereInput, orderBy: JobPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JobPost]!
  jobPostsConnection(where: JobPostWhereInput, orderBy: JobPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobPostConnection!
  resume(where: ResumeWhereUniqueInput!): Resume
  resumes(where: ResumeWhereInput, orderBy: ResumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resume]!
  resumesConnection(where: ResumeWhereInput, orderBy: ResumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResumeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Resume {
  id: ID!
  fullname: String!
  address: String!
  email: String!
  phone: String
  experience: String!
  education: String!
  skills: String!
}

type ResumeConnection {
  pageInfo: PageInfo!
  edges: [ResumeEdge]!
  aggregate: AggregateResume!
}

input ResumeCreateInput {
  id: ID
  fullname: String!
  address: String!
  email: String!
  phone: String
  experience: String!
  education: String!
  skills: String!
}

input ResumeCreateManyInput {
  create: [ResumeCreateInput!]
  connect: [ResumeWhereUniqueInput!]
}

type ResumeEdge {
  node: Resume!
  cursor: String!
}

enum ResumeOrderByInput {
  id_ASC
  id_DESC
  fullname_ASC
  fullname_DESC
  address_ASC
  address_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  experience_ASC
  experience_DESC
  education_ASC
  education_DESC
  skills_ASC
  skills_DESC
}

type ResumePreviousValues {
  id: ID!
  fullname: String!
  address: String!
  email: String!
  phone: String
  experience: String!
  education: String!
  skills: String!
}

input ResumeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullname: String
  fullname_not: String
  fullname_in: [String!]
  fullname_not_in: [String!]
  fullname_lt: String
  fullname_lte: String
  fullname_gt: String
  fullname_gte: String
  fullname_contains: String
  fullname_not_contains: String
  fullname_starts_with: String
  fullname_not_starts_with: String
  fullname_ends_with: String
  fullname_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  experience: String
  experience_not: String
  experience_in: [String!]
  experience_not_in: [String!]
  experience_lt: String
  experience_lte: String
  experience_gt: String
  experience_gte: String
  experience_contains: String
  experience_not_contains: String
  experience_starts_with: String
  experience_not_starts_with: String
  experience_ends_with: String
  experience_not_ends_with: String
  education: String
  education_not: String
  education_in: [String!]
  education_not_in: [String!]
  education_lt: String
  education_lte: String
  education_gt: String
  education_gte: String
  education_contains: String
  education_not_contains: String
  education_starts_with: String
  education_not_starts_with: String
  education_ends_with: String
  education_not_ends_with: String
  skills: String
  skills_not: String
  skills_in: [String!]
  skills_not_in: [String!]
  skills_lt: String
  skills_lte: String
  skills_gt: String
  skills_gte: String
  skills_contains: String
  skills_not_contains: String
  skills_starts_with: String
  skills_not_starts_with: String
  skills_ends_with: String
  skills_not_ends_with: String
  AND: [ResumeScalarWhereInput!]
  OR: [ResumeScalarWhereInput!]
  NOT: [ResumeScalarWhereInput!]
}

type ResumeSubscriptionPayload {
  mutation: MutationType!
  node: Resume
  updatedFields: [String!]
  previousValues: ResumePreviousValues
}

input ResumeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResumeWhereInput
  AND: [ResumeSubscriptionWhereInput!]
  OR: [ResumeSubscriptionWhereInput!]
  NOT: [ResumeSubscriptionWhereInput!]
}

input ResumeUpdateDataInput {
  fullname: String
  address: String
  email: String
  phone: String
  experience: String
  education: String
  skills: String
}

input ResumeUpdateInput {
  fullname: String
  address: String
  email: String
  phone: String
  experience: String
  education: String
  skills: String
}

input ResumeUpdateManyDataInput {
  fullname: String
  address: String
  email: String
  phone: String
  experience: String
  education: String
  skills: String
}

input ResumeUpdateManyInput {
  create: [ResumeCreateInput!]
  update: [ResumeUpdateWithWhereUniqueNestedInput!]
  upsert: [ResumeUpsertWithWhereUniqueNestedInput!]
  delete: [ResumeWhereUniqueInput!]
  connect: [ResumeWhereUniqueInput!]
  set: [ResumeWhereUniqueInput!]
  disconnect: [ResumeWhereUniqueInput!]
  deleteMany: [ResumeScalarWhereInput!]
  updateMany: [ResumeUpdateManyWithWhereNestedInput!]
}

input ResumeUpdateManyMutationInput {
  fullname: String
  address: String
  email: String
  phone: String
  experience: String
  education: String
  skills: String
}

input ResumeUpdateManyWithWhereNestedInput {
  where: ResumeScalarWhereInput!
  data: ResumeUpdateManyDataInput!
}

input ResumeUpdateWithWhereUniqueNestedInput {
  where: ResumeWhereUniqueInput!
  data: ResumeUpdateDataInput!
}

input ResumeUpsertWithWhereUniqueNestedInput {
  where: ResumeWhereUniqueInput!
  update: ResumeUpdateDataInput!
  create: ResumeCreateInput!
}

input ResumeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullname: String
  fullname_not: String
  fullname_in: [String!]
  fullname_not_in: [String!]
  fullname_lt: String
  fullname_lte: String
  fullname_gt: String
  fullname_gte: String
  fullname_contains: String
  fullname_not_contains: String
  fullname_starts_with: String
  fullname_not_starts_with: String
  fullname_ends_with: String
  fullname_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  experience: String
  experience_not: String
  experience_in: [String!]
  experience_not_in: [String!]
  experience_lt: String
  experience_lte: String
  experience_gt: String
  experience_gte: String
  experience_contains: String
  experience_not_contains: String
  experience_starts_with: String
  experience_not_starts_with: String
  experience_ends_with: String
  experience_not_ends_with: String
  education: String
  education_not: String
  education_in: [String!]
  education_not_in: [String!]
  education_lt: String
  education_lte: String
  education_gt: String
  education_gte: String
  education_contains: String
  education_not_contains: String
  education_starts_with: String
  education_not_starts_with: String
  education_ends_with: String
  education_not_ends_with: String
  skills: String
  skills_not: String
  skills_in: [String!]
  skills_not_in: [String!]
  skills_lt: String
  skills_lte: String
  skills_gt: String
  skills_gte: String
  skills_contains: String
  skills_not_contains: String
  skills_starts_with: String
  skills_not_starts_with: String
  skills_ends_with: String
  skills_not_ends_with: String
  AND: [ResumeWhereInput!]
  OR: [ResumeWhereInput!]
  NOT: [ResumeWhereInput!]
}

input ResumeWhereUniqueInput {
  id: ID
}

type Subscription {
  applicant(where: ApplicantSubscriptionWhereInput): ApplicantSubscriptionPayload
  contact(where: ContactSubscriptionWhereInput): ContactSubscriptionPayload
  employer(where: EmployerSubscriptionWhereInput): EmployerSubscriptionPayload
  jobPost(where: JobPostSubscriptionWhereInput): JobPostSubscriptionPayload
  resume(where: ResumeSubscriptionWhereInput): ResumeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  password: String!
  employerProfile: Employer
  applicantProfile: Applicant
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  password: String!
  employerProfile: EmployerCreateOneInput
  applicantProfile: ApplicantCreateOneInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  password: String
  employerProfile: EmployerUpdateOneInput
  applicantProfile: ApplicantUpdateOneInput
}

input UserUpdateManyMutationInput {
  name: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  employerProfile: EmployerWhereInput
  applicantProfile: ApplicantWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    