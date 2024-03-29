const apiURL = "https://back-proyecto-1er50-electiva-ii.vercel.app";

const resolvers = {
  Query: {
    getAllClient: async () => {
      try {
        const response = await fetch(apiURL + "/client");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    getClientByID: async (_, args) => {
      try {
        const response = await fetch(apiURL + `/client/ById/${args.id}`);
        if (response == null) {
          throw new Error("No encontrado");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error(`Error fetching client with ID ${args.id}:`, error);
        throw error;
      }
    },
    getAllReservations: async () => {
      try {
        const response = await fetch(apiURL + "/reservation");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    getReservationById: async (_, args) => {
      try {
        const response = await fetch(apiURL + `/reservation/${args.id}`);
        if (response == null) {
          throw new Error("No encontrado");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error(`Error fetching client with ID ${args.id}:`, error);
        throw error;
      }
    },
  },
  Mutation: {
    createClient: async (_, { id, name, celphone, email }) => {
      try {
        const response = await fetch(`${apiURL}/client`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            celphone,
            email,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error creating client:", error);
        throw error;
      }
    },

    deleteClient: async (_, { _id }) => {
      try {
        const response = await fetch(`${apiURL}/client/${_id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("no se puedo borrar cliente:", error);
        throw error;
      }
    },
    updateClient: async (_, args) => {
      return null;
    },
    createReservation: async (
      _,
      { bookingStartDate, bookingEndDate, service, idClient, id }
    ) => {
      try {
        const response = await fetch(`${apiURL}/reservation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingStartDate,
            bookingEndDate,
            service,
            idClient,
            id,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error creating client:", error);
        throw error;
      }
    },
    deleteReservation: async (_, args) => {
      try {
        const response = await fetch(apiURL + `/reservation/${args.id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("no se puedo borrar cliente:", error);
        throw error;
      }
    },
    updateReservation: async (_, args) => {
      return null;
    },
  },
};

module.exports = { resolvers };
