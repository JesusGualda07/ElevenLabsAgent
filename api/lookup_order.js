module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { order_id } = req.body || {};

  const orders = {
    "12345": {
      order_id: "12345",
      status: "shipped",
      product: "Wireless Headphones",
      estimated_delivery: "2026-11-28"
    },
    "67890": {
      order_id: "67890",
      status: "processing",
      product: "Smart Speaker",
      estimated_delivery: "2026-12-01"
    }
  };

  const order = orders[String(order_id)];

  if (!order) {
    return res.status(200).json({
      success: false,
      status: "not_found"
    });
  }

  return res.status(200).json({
    success: true,
    ...order
  });
};
