export class Conf {

    static port: any = process.env.PORT || 3000;

    static res = {
        ok: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 200,
                msg: msg || "OK",
                data: data
            }
        },
        forbidden: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 403,
                msg: msg || 'Forbidden',
                data: data
            }
        },
        noData: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 404,
                msg: msg || 'No Data Found',
                data: data
            }
        },
        invalid: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 400,
                msg: msg || 'Bad Request',
                data: data
            }
        },
        failure: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 402,
                msg: msg || 'Request Failed',
                data: data
            }
        },
        conflict: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 409,
                msg: msg || 'Conflict : Data already exists',
                data: data
            }
        },
        serverError: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 500,
                msg: msg || 'Internal Server Error',
                data: data
            }
        }
    }
}
