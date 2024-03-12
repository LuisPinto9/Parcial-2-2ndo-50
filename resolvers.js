const resolvers = {
  Query: {
    getAllClient: async () => {
      return null;
    },
    getClientByID: async (_, args) => {
      return null
    },
    getAllReservations: async () => {
      return null
    },
    getReservationById: async (_, args) => {
      return null
    },
  },
  Mutation: {
    createClient: async (_, args) => {
      return null
    },
    deleteClient: async (_, args) => {
      return null
    },
    updateClient: async (_, args) => {
      return null;
    },
    createReservation: async (_, args) => {
      return null
    },
    deleteReservation: async (_, args) => {
      return null;
    },
    updateReservation: async (_, args) => {
      return null
    },
  },
};

module.exports = { resolvers };
