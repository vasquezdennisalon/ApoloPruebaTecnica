const User = require("../models/user.model");

const apoloService = require("../services/user.service");

const syncUsers = async (req, res) => {
  try {
    const users = await apoloService.getUsers();
    const UsersRecords = users.Records;

    /*const coworkers = await apoloService.getCoworkers();
    const coworkersRecords = coworkers.Records;

    console.log("coworkers ", coworkersRecords);*/

    for (const item of UsersRecords) {
      //const coworker = coworkersRecords.find((c) => c.Email === item.Email);

      const coworkers = await apoloService.getCoworkersByFullName(
        item.FullName,
      );
      const coworkersRecords = coworkers.Records;

      const coworker = coworkersRecords.find((c) => c.Email === item.Email);

      await User.upsert({
        fullName: item.FullName,
        email: item.Email,
        address: item.Address || "",
        userActive: item.Active || false,
        coworkerContractIds: coworker?.CoworkerContractIds
          ? coworker.CoworkerContractIds.split(",").map((id) =>
              Number(id.trim()),
            )
          : [],
      });
    }

    res.json({
      success: true,
      total: users.length,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    var users = await User.findAll();
    users = users.map((user) => {
      const data = user.toJSON();

      return {
        ...data,
        coworkerContractIds:
          typeof data.coworkerContractIds === "string"
            ? JSON.parse(data.coworkerContractIds)
            : data.coworkerContractIds,
      };
    });
    
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getLicensedUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    const licensed = users
      .map((user) => {
        const data = user.toJSON();

        return {
          ...data,
          coworkerContractIds:
            typeof data.coworkerContractIds === "string"
              ? JSON.parse(data.coworkerContractIds)
              : data.coworkerContractIds,
        };
      })
      .filter(
        (user) =>
          user.coworkerContractIds && user.coworkerContractIds.length > 0,
      );

    res.json(licensed);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.update(req.body, {
      where: { id },
    });

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: { id },
    });

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  syncUsers,
  getUsers,
  getLicensedUsers,
  createUser,
  updateUser,
  deleteUser,
};
