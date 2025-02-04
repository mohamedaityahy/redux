const initialeState = {
  users: [
    {
      id: 1,
      name: "Ahmed Ali",
      email: "ahmed.ali@email.com",
      number: "+966501234567",
    },
    {
      id: 2,
      name: "Fatima Saeed",
      email: "fatima.saeed@email.com",
      number: "+966502345678",
    },
    {
      id: 3,
      name: "Yousef Hassan",
      email: "yousef.hassan@email.com",
      number: "+966503456789",
    },
    {
      id: 4,
      name: "Mariam Khaled",
      email: "mariam.khaled@email.com",
      number: "+966504567890",
    },
    {
      id: 5,
      name: "Khaled Nasser",
      email: "khaled.nasser@email.com",
      number: "+966505678901",
    },
    {
      id: 6,
      name: "Aisha Mohammed",
      email: "aisha.mohammed@email.com",
      number: "+966506789012",
    },
    {
      id: 7,
      name: "Omar Zayed",
      email: "omar.zayed@email.com",
      number: "+966507890123",
    },
    {
      id: 8,
      name: "Layla Tariq",
      email: "layla.tariq@email.com",
      number: "+966508901234",
    },
    {
      id: 9,
      name: "Hassan Ibrahim",
      email: "hassan.ibrahim@email.com",
      number: "+966509012345",
    },
    {
      id: 10,
      name: "Nour Adel",
      email: "nour.adel@email.com",
      number: "+966510123456",
    },
  ],
};

const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, users:[...state.users, action.payload] };
    case "delete":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== parseInt(action.payload)),
      };
    case "update":
        return{ ...state, users:state.users.map((u) =>u.id === action.payload.id ? {...u, ...action.payload} : u)}
    default: return state;
  }
};

export default reducer;
