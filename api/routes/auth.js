import express from "express";
import {register} from "../controller/auth.js"
import {login} from "../controller/auth.js"
import {logout} from "../controller/auth.js"


const router = express.Router()

router.post("/register", register)

router.post("/login", login)
router.post("/logout",logout )





export default router 