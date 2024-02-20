import Review from "../models/reviewModel.js";
// import ticket from "../models/ticketModel.js";

const addRev = async(req, res) => {
    const {review, email} = req.body;

    try {
        const rev = new Review({
            review,
            email
        })
        const keep = await rev.save();
        if(keep) {
            res.status(201).send(keep)
        } else {
            console.log("cannot save to database");
        }
    } catch(er) {
        console.log(er);
    }
}

const getRev = async(req, res) => {
    const allReviews = await Review.find();

    try{
        if(allReviews) {
            res.status(200).send(allReviews)
        } else {
            console.log("cannot fetch from database");
        }
    } catch(err) {
        console.log(err);
    }
}

const updtRev = async() => {
    const {id} = req.params;

    try {
        const revi = await Review.findById({_id: id});
        console.log(revi);
        const uptRevi = await Review.findByIdAndUpdate({_id: id}, {seen: !revi.seen}, {returnDocument: after});
        res.status(201).send(uptRevi);
    } catch(error) {
        console.log(error)
    }
}

const delRevi = async() => {
    const {id} = req.params;

    const delRev = await Review.findByIdAndDelete({_id: id});
    try{
        if(delRev) {
            res.status(200).send(delRev)
        } else {
            console.log("cannot delete from database")
        }
    } catch( err) {
        console.log(err)
    }
}

export default {
    addRev,
    getRev,
    updtRev,
    delRevi
}

