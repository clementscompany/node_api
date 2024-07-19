import UserModel from "../models/UserModel.js";

class userController{

    async listAll(req,res){
        const data = await UserModel.list();
        res.status(200).send(data)
    }

    async cadastrate(req,res){
        const data = await UserModel.cadastrar(req.body);
        res.status(201).send(data);
    }
    async listBy(req,res){
        const id = req.params.id;
        const data = await UserModel.listById(id);
        res.status(200).json(data);
    }

    async deleteBy(req, res){
        const data = await UserModel.deleteById(req.body.id);
        res.status(200).json(data);
        
    }
    
    async updateData(req,res){
        const data = await UserModel.update(req.body, req.params.id)
        res.status(200).json(data);
        console.log(data);
    }
}

export default new userController();
