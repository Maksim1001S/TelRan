use("ls1");

db.users.find();

db.users.updateMany(
    {},
    { $push: { cities: { $each: ["Madrit", "Berlin", "Milan"] } } }
)




