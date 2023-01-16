const util = {
    success: (data?: any) => {
        return {
            data
        };
    },
    fail: (status: number, message: string) => {
        return {
            status,
            success: false,
            message,
        };
    },
};

export default util;