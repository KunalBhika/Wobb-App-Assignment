import jwt from "jsonwebtoken";

const generateToken = async (userId , res) => {
    const token = jwt.sign({userId} , "Kunalbhika1#" , {
        expiresIn : '7d'
    });

    res.cookie("jwt" , token , {
        maxAge : 7 * 24 * 60 * 60 * 1000,  // 7d in MS
        httpOnly : true ,
        sameSite : "strict"
    });

    return token;
}

export default generateToken;