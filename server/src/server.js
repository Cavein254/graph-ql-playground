const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const path = require("path");

const animals = [
  {
    name: "lion",
    fact: "It dies",
  },
  {
    name: "Goose",
  },
];

const resolvers = {
  Query: {
    getAllAnimals: () => animals,
  },
};

const server = new ApolloServer({
  typeDefs: readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running ${url}`);
});
