module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const {
    account_number,
    order_id,
    new_address
  } = req.body || {};

  if (!account_number || !order_id || !new_address) {
    return res.status(400).json({
      success: false,
      error: "missing_parameters"
    });
  }

  if (String(account_number) !== "10000001") {
    return res.status(200).json({
      success: false,
      error: "account_not_found"
    });
  }

  if (String(order_id) !== "67890") {
    return res.status(200).json({
      success: false,
      error: "order_not_eligible"
    });
  }

  return res.status(200).json({
    success: true,
    order_id: String(order_id),
    new_address: new_address
  });
};
