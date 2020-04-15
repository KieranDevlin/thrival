const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    employerProfile: Employer
    applicantProfile: Applicant
    profileImage: String
  }

  type Employer {
    id: ID!
    jobpostings: [JobPost!]
    linkedin: String
    contact: Contact
  }

  type Applicant {
    id: ID!
    linkedin: String!
    github: String!
    appliedJobs: [JobPost]
    resume: [Resume]
  }

  type JobPost {
    id: ID!
    createdAt: Int!
    rate: Int!
    industry: String!
    location: String!
    discipline: [String!]!
    totalRoles: Int!
    employer: Employer!
    viewed: [Applicant]
    description: String
    roles: [String!]!
    requirements: [String!]!
  }

  type Contact {
    id: ID!
    email: String
    website: String
  }

  type Resume {
    id: ID!
    fullname: String!
    address: String!
    email: String!
    phone: String
    experience: [String!]
    education: [String!]
    skills: String!
  }

  type Query {
    currentUser: User!
  }

  type Mutation {
    register(name: String!, password: String!, email: String!): AuthResponse!
    login(email: String!, password: String!): AuthResponse!
  }

  type AuthResponse {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
