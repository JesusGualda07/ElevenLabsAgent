module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { account_number, postcode } = req.body || {};

  const verified =
    String(account_number) === "10000001" &&
    String(postcode) === "94107";

  return res.status(200).json({
    success: verified
  });
};
