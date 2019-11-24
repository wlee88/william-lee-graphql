const { gql } = require('apollo-server');

const typeDefs = gql`
"http://iam.william-lee.com 🎸"
type Query {
    "My name"
    name: String!
    "I'm english, innit"
    born: String!
    "Wanna get in touch?"
    email: String!
    "My up to date curriculum vitae"
    resume: String!
    "Things I like to do when I have free time"
    hobbies: [String]!
    "💻 🔨❤️"
    favouriteTech: [String]!
    "Professional networking"
    linkedIn: String!
    "My open source codes"
    github: String
    "Music 🎵"
    soundcloud: String
    "oh sh... you found me out",
    secretWebsites: [String!]
  }
`

module.exports = typeDefs;