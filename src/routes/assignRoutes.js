import express from "express";
import SecretSanta from "../services/SecretSanta.js";
import Mailer from "../services/Mailer.js"

const router = express.Router();

router.post("/", (req, res) => {
    try {
        const curList = req.body.participants;
        //validate curList with util -> validate participants.
        let newObj = new SecretSanta(curList);
        const assignedMap = newObj.assignSecretSanta();
        //assignedMap.key -> Secret Santa, .value -> jisko gift milega
        // complete tomo.
         res.status(200).json({ msg: "Emails sent!" });

    } catch (error) {
         res.status(500).json({ msg: "Error fetching tasks" });
    }
})