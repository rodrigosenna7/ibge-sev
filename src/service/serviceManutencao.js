import { dbfs, auth } from "../../firebaseConfig"; 

function getTarefasCollection(){
    return dbfs
            .collection('user')
            .doc(auth.currentUser.uid)
            .collection('manutencao')
}

export default {
    async listar() {    
        let manutencao = [];        
        const manutencaoFs = await getTarefasCollection().get();        
        manutencaoFs.forEach(doc => {
            manutencao.push({
                idManutencao: doc.id,
                ...doc.data()     
            });
        });
        return manutencao;
    },
    async adicionar(descricao) {
        return await getTarefasCollection()
            .add({
                descricao: descricao,
                status: false
            });
    },
    async removerTarefa (id) {        
        return await getTarefasCollection()
            .doc(id)
            .delete();
    },
    async atualizarTarefa({idTarefa, status}){
        return await getTarefasCollection()
            .doc(idTarefa)
            .update({
                status: !status
            });
    }
}