export class Conf {

    static port: any = process.env.PORT || 3000;
    static res = {
    ok: (msg, data) => {
        return {
            statusCode: 200,
            msg: msg || "OK",
            data: data
        }
    },
    forbidden: (msg, data) => {
        return {
            statusCode: 403,
            msg: msg || 'Forbidden',
            data: data
        }
    },
    noData: (msg, data) => {
        return {
            statusCode: 404,
            msg: msg || 'No Data Found',
            data: data
        }
    },
    invalid: (msg, data) => {
        return {
            statusCode: 400,
            msg: msg || 'Bad Request',
            data: data
        }
    },
    failure: (msg, data) => {
        return {
            statusCode: 402,
            msg: msg || 'Request Failed',
            data: data
        }
    },
    conflict: (msg, data) => {
        return {
            statusCode: 409,
            msg: msg || 'Conflict : Data already exists',
            data: data
        }
    },
    serverError: (msg, data) => {
        return {
            statusCode: 500,
            msg: msg || 'Internal Server Error',
            data: data
        }
    }
}


}
