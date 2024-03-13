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
      try {
        const response = await fetch(`${apiURL}/client/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error(`Error fetching client with ID ${id}:`, error);
        throw error;
      }
    },
    getAllReservations: async () => {
      return null;
    },
    getReservationById: async (_, args) => {
      return null;
    },
  },
  Mutation: {
    createClient: async (_, { id, name, celphone, email }) => {
      try {
        const response = await fetch(`${apiURL}/client`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
            name,
            celphone,
            email
          }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error('Error creating client:', error);
        throw error;
      }
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
