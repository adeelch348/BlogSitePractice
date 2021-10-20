function upload(req, res) {
  if (req.file.filename) {
    res.status(200).json({
      message: "Image Upload Successfully",
      url: req.file.filename,
    });
  } else {
    res.status(500).json({
      message: "Something Wrong",
    });
  }
}

module.exports = {
  upload: upload,
};
