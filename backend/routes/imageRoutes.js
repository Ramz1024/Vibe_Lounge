const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const User = require('../model/User');

router.post('/upload-profile/:id', upload.single('image'), async (req, res) => {
  try {
    const imagePath = `uploads/${req.file.filename}`;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { profilePic: imagePath },
      { new: true }
    );
    res.status(200).json({ message: 'Image uploaded', imageUrl: user.profilePic });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading image', error: err.message });
  }
});

module.exports = router;
