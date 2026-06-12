const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * Asynchronously updates the phone number of a user in the database.
 * @param {Object} req - The Express request object. Contains the user's `userId` and the new phone number in `req.body.ph`.
 * @param {Object} res - The Express response object. Not used in the current implementation but can be used to send responses.
 */

const changeph=async(req,res)=>{
    try{
      const userId = req.userId;

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { ph: req.body.ph },
        { new: true }
      ).select('-password -securityans');

      if (!updatedUser) {
        return res.status(404).json({ msg: 'User not found' });
      }

      return res.status(200).json({ user: updatedUser });
    }catch(error){
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  }

  module.exports = changeph
