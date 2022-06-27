import firebase from '../../firebaseConfig'

export default {
    async atualizarNome(nome){
        await auth.currentUser.updateProfile({
            displayName: nome
        });
    },
    async uploadImagem(imagem){

        const blob = await new Promise((resolve, reject) =>{
            const xhr = new XMLHttpRequest();            
            xhr.onload = function(){
                resolve(xhr.response);
            }
            xhr.responseType = 'blob'            
            xhr.open('GET', imagem, true);
            xhr.send(null);
        });

        const imagemPerfil = 
            storage.
                ref()
                .child(`usuarios/${auth.currentUser.uid}/imagemPerfil`);

        await imagemPerfil.put(blob);
        let url = await imagemPerfil.getDownloadURL();

        await auth.currentUser.updateProfile({
            photoURL: url
        }); 
    }
}