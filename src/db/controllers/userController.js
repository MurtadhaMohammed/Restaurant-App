import User from "../modals/user";
import sequelize from "../sequelize";

export const createUser = async (data, callback) => {
  sequelize
    .sync()
    .then(async () => {
      const user = await User.create(data);
      if (user instanceof User) {
        callback({ status: true, user });
      } else {
        callback({ status: false });
      }
    })
    .catch((e) => callback({ status: false }));
};

export const getUsers = async (callback) => {
  const users = await User.findAll();
  if (users.every((user) => user instanceof User)) {
    callback({
      status: true,
      users: JSON.parse(JSON.stringify(users, null, 2)),
    });
  } else {
    callback({ status: false });
  }
};
