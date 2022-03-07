import styles from './add.module.css'
function previewImagem(){
    var imagem = document.querySelector('input[name=imagem]').files[0];
    var preview = document.getElementById('IMAGE');
    var reader = new FileReader();
    reader.onloadend = function (){
        preview.src= reader.result; 
    }
    if(imagem){
        reader.readAsDataURL(imagem);
    }
    else{
        preview.src=""
    }
}
function add(){
    return(
        <div>
            <form method='POST' action="" encType='multipart/form-data'>
                <input type="file" name='imagem' id='imagem' onChange={previewImagem}/>
                <img id='IMAGE' className={styles.imgns}  />
            </form>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        </div>
    )}
export default add