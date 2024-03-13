const apiURL = "https://back-proyecto-1er50-electiva-ii.vercel.app";

const resolvers = {
  Query: {
    getAllClient: async () => {
      try {
        const response = await fetch(apiURL + "/client");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    getClientByID: async (_, args) => {
      return null;
    },
    getAllReservations: async () => {
      try {
        const response = await fetch(apiURL + "/reservation");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    getReservationById: async (_, args) => {
      return null;
    },
  },
  Mutation: {
    createClient: async (_, args) => {
      return null;
    },
    deleteClient: async (_, args) => {
      return null;
    },
    updateClient: async (_, args) => {
      return null;
    },
    createReservation: async (_, args) => {
      return null;
    },
    deleteReservation: async (_, args) => {
      return null;
    },
    updateReservation: async (_, args) => {
      return null;
    },
  },
};

module.exports = { resolvers };
