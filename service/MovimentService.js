import { dbfs, auth } from "../firebaseConfig"; 

function getMovimentCollection(){
    return dbfs
            .collection('veiculo')
            .doc(auth.currentUser.uid)
            .collection('moviments')
}

export default {
    async listar() {    
        let moviment = [];        
        const movimentFs = await getMovimentCollection().get();        
        movimentFs.forEach(doc => {
            moviment.push({
                idMoviment: doc.id,
                ...doc.data()     
            });
        });
        return moviment;
    },
    async adicionar(descricao) {
        return await getMovimentCollection()
            .add({
                descricao: descricao,
                status: false
            });
    },
    async removerMoviment (id) {        
        return await getMovimentCollection()
            .doc(id)
            .delete();
    },
    async atualizarMoviment({idMoviment, status}){
        return await getMovimentCollection()
            .doc(idMoviment)
            .update({
                status: !status
            });
    }
}