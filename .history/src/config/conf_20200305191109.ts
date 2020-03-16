/**
 * Conveince function for api response and other configurations
 * Author: Rajesh Malakar(Provab Id- 6120)
 * Email: rajeshmbg3@gmail.com(rajeshmbg3.provab@gmail.com)
 */
export class Conf {

    static PORT: any = process.env.PORT || 12000;

    static res = {
        ok: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 200,
                msg: msg || "OK",
                data: data || null
            }
        },
        forbidden: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 403,
                msg: msg || 'Forbidden',
                data: data || null
            }
        },
        noData: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 404,
                msg: msg || 'No Data Found',
                data: data || null
            }
        },
        invalid: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 400,
                msg: msg || 'Bad Request',
                data: data || null
            }
        },
        failure: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 402,
                msg: msg || 'Request Failed',
                data: data || null
            }
        },
        conflict: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 409,
                msg: msg || 'Conflict : Data already exists',
                data: data || null
            }
        },
        serverError: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                statusCode: statusCode || 500,
                msg: msg || 'Internal Server Error',
                data: data || null
            }
        }
    }
}
