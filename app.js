const express = require("express");
const cors = require("cors");
const repairRouter = require("./app/routes/repair.route"); 
const RepairService = require("./app/services/repair.service");
const MongoDB = require('./app/utils/mongodb.util')
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/repair", repairRouter);

app.use("/api/repair", repairRouter);

//handle 404 response 
app.use((req, res, next) => {
    // code o day se chay khi khong co route nao duoc dinh nghia
    // khop voi yeu cau. Goi next() de chuyen sang middleware xu ly loi
    return next(new ApiError(404, "Resource not found"));
});

//define error-handling middleware last, after other app.use() and routes calls 
app.use((err, req, res, next) => {
    // middleware xu ly loi tap trung
    // Trong cac doan code xu ly o cac route, goi next(error) se chuyen ve middleware xu ly loi nay
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).send(error.message);
});

app.get("/", (req, res) => {
    res.json({message: "Chào mừng bạn đến với ứng dụng đăng ký sửa chữa thiết bị"});
});

module.exports = app;