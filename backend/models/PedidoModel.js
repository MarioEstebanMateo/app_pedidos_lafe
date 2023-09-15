const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
  sucursal: {
    type: String,
    required: true,
  },
  products: [
    {
      title: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pedido", PedidoSchema);
