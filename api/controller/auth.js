import {db } from "../db.js"
import bcrypt from "bcryptjs"
import mysql from 'mysql'
export const register = (req, res) => {
    const {email, username, password} =  req.body;
    // print(email);
    // return res.json(req.body);

    // Checking existing user#
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
db.query(q , [email,username], (err,data)=>{
    if (err) return res.json(err)

    if (data.length) return res.status(409).json("user already exists!")
    //hash the password and cfreat user 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const q = "INSERT INTO users (`username`,`email`,`password`) valus(?) "
    const values =[
        req.body.username,
        req.body.email,
        hash,
    ]
    db.query(q, [values],(err,data) => {
    if (err) return res.json(err);
        return res.status(200).json("user has been created ");

    });
    

});
    
};
export const login = (req,res) => {
    
};
export const logout = (req,res) => {
    
};
