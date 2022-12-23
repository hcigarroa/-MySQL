const {Router} = require('express');
const TestService = require('../services/mock.service');

const router = Router();

const testService = new TestService();

router.get('/test', (_req, res) => {
    try{
        const mockData = await testService.getTestMock();
        res.status(200) .json({
            success: true,
            data: mockData
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

module.exports = routes;