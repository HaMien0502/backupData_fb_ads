const axios = require('axios');

const refreshTokenLark = async () => {
    try {
        const response = await axios.post(process.env.LARK_URL_GET_TOKEN, {
            app_id: process.env.LARK_APP_ID,
            app_secret: process.env.LARK_APP_SECRET
        });

        return response.data.tenant_access_token;
    } catch (error) {
        console.error("Lỗi lấy token:", error.response?.data || error.message);
    }
}

module.exports = refreshTokenLark;