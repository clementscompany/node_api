import conn from "../../database/conn.js"
import bcrypt from 'bcrypt';
class UserModel{
    list(){
        return new Promise((resove, reject)=>{    

            conn.query("SELECT * FROM user_data ;", (error, response)=>{
                if (error) {
                    reject(JSON.parse(JSON.stringify({message:"erroao listar os dados!", erro:error })))
                } else{
                    resove({ response })
                }
            });
        })
    }

    listById(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM user_data WHERE id = ?;";
            conn.query(sql, id, (error, response) => {
                if (error) {
                    reject({ message: "Registro não encontrado!", erro: error });
                } else {
                    resolve({ response });
                }
            });
        });
    }
    
    cadastrar(dados){
        return new Promise((resolve, reject)=>{
           const sql = "INSERT INTO user_data SET ?"
            conn.query(sql, dados, (error, response)=>{
                if(error){
                    reject({ message:"erro ao inserir os dados", erro:error })
                } else{
                    resolve({ message:"Cadastrado com sucesso", response })
                }
            })
        })
    }

    deleteById(id){
        return new Promise((resolve, reject)=>{
            const sql = "DELETE FROM user_data WHERE user_data.id = ? ;"
            conn.query(sql, id, (error, response)=>{
                if (error) {
                    reject({ erro:"Erro ao eliminaro arquivo", erro:error })
                } else{
                    resolve({ messsage:"Eliminado com sucesso", details:response })
                }
            })           
        })
    }

    update(value, id) {
        return new Promise((resolve, reject) => {
            const sql = "UPDATE user_data SET ? WHERE user_data.id = ?;";
            conn.query(sql, [value, id], (error, response) => {
                if (error) {
                    reject({ message: "Erro ao atualizar os dados!", details: error });
                } else {
                    if (response.affectedRows > 0) {

                        resolve({ message: "Dados atua lizados com sucesso!", details: response });
                    } else{
                        resolve({ message: "Erro ao atualizar os dados!", details: response });
                    }
                }
            });
        });
    }


}
export default new UserModel();

async function generetePass(password){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const newPass = await bcrypt.hash(password, salt);
    return newPass;
}

