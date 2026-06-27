export const sampleMIddleWare = async (req, res, next) => {
    console.log("I am Sample Middleware 1")
    next();
};

export const sampleMIddleWare = async (req, res, next) => {
    console.log("I am Sample Middleware 2")
    next();
};