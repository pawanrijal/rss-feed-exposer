class RssController {
  async getRss(req, res, next) {
    return res.json({ message: "Successs" });
  }
}

module.exports = new RssController();
