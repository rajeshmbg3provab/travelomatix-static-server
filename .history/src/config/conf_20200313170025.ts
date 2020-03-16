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
                Status: statusCode || 1 || 200,
                Message: msg || "OK",
                Data: data || null
            }
        },
        forbidden: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                Status: statusCode || 0 || 403,
                Message: msg || 'Forbidden',
                Data: data || null
            }
        },
        noData: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                Status: statusCode || 0 || 404,
                Message: msg || 'No Data Found',
                data: data || null
            }
        },
        invalid: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                Status: statusCode || 0 || 400,
                Message: msg || 'Bad Request',
                Data: data || null
            }
        },
        failure: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                Status: statusCode || 0 || 402,
                Message: msg || 'Request Failed',
                Data: data || null
            }
        },
        conflict: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                Status: statusCode || 0 || 409,
                Message: msg || 'Conflict : Data already exists',
                Data: data || null
            }
        },
        serverError: (data: any, statusCode?: number|string, msg?: string) => {
            return {
                Status: statusCode || 0 || 500,
                Message: msg || 'Internal Server Error',
                Data: data || null
            }
        }
    }
}
