import { uuidv4 } from "@firebase/util";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";



export const uploadToFirebaseStorage = async (file) => {
    
    try {
        const ext = file.name.split('.').pop();  //拡張子を取得 
        const hashName = uuidv4();   //ユニークなファイル名を生成
        const fullPath = `gs://kickpose-34d3b.appspot.com/${hashName} .${ext}`;  //imageのpathを作成  
        const storageRef = ref(storage, fullPath);  //create ref
        await uploadBytes(storageRef, file);

    } catch (error) {
        console.log(error)
    } finally {
        console.log('upload success!')
    }
    
}
