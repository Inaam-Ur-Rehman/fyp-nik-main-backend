const userRoute = require('./routes/user');
const stockRoute = require('./routes/stock');
const suppliersRoute = require('./routes/suppliers');
const salesRoute = require('./routes/sales');
const shopRoute = require('./routes/shop');
const employeeRoute = require('./routes/employee');

const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors())

app.post("/", userRoute.getUsers)
app.get("/users", userRoute.getAllUsers)
app.get("/user/:id", userRoute.getUser)

app.get("/stock", stockRoute.getStock)

app.get("/suppliers", suppliersRoute.getSuppliers)


app.get("/sales", salesRoute.getSales)
app.get("/sales/today", salesRoute.getCurrentDaySales)
app.get("/sales/week", salesRoute.getWeekSales)
app.get("/sales/monthly", salesRoute.getMonthlySales)
app.get("/sales/top", salesRoute.getTopSales)


app.get("/shop", shopRoute.getShopDetails)

app.get("/employees", employeeRoute.getAttendance)
app.get("/employee/:id", employeeRoute.getAttendanceByID)

app.listen(process.env.PORT_LOCAL || 3000, () => {
    console.log("Server is running on port", process.env.PORT_LOCAL);
})